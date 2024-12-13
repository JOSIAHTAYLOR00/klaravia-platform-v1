import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Box,
  VStack,
  Button,
  Text,
  Flex,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useBreakpoint,
} from '@chakra-ui/react';

const PDFViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [pdfDocument, setPdfDocument] = useState(null);
  const [error, setError] = useState(null);
  const breakpoint = useBreakpoint();
  const containerRef = useRef(null);

  const loadPdfJs = useCallback(async () => {
    if (window.pdfjsLib) {
      return window.pdfjsLib;
    }

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.9.359/pdf.min.js';
    script.async = true;
    document.body.appendChild(script);

    return new Promise((resolve, reject) => {
      script.onload = () => {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.9.359/pdf.worker.min.js';
        resolve(window.pdfjsLib);
      };
      script.onerror = reject;
    });
  }, []);

  const loadPdf = useCallback(async (pdfjsLib) => {
    if (!pdfUrl) {
      setIsLoading(false);
      return;
    }

    try {
      const loadingTask = pdfjsLib.getDocument(pdfUrl);
      const pdf = await loadingTask.promise;
      setPdfDocument(pdf);
      setNumPages(pdf.numPages);
      setIsLoading(false);
    } catch (error) {
      setError(`Failed to load PDF: ${error.message}`);
      setIsLoading(false);
    }
  }, [pdfUrl]);

  useEffect(() => {
    let mounted = true;
    let retryCount = 0;
    const maxRetries = 3;

    const loadPdfWithRetry = async () => {
      try {
        const pdfjsLib = await loadPdfJs();
        if (mounted) {
          await loadPdf(pdfjsLib);
        }
      } catch (error) {
        if (retryCount < maxRetries) {
          retryCount++;
          setTimeout(loadPdfWithRetry, 1000);
        } else {
          setError(`Failed to load PDF after ${maxRetries} attempts`);
          setIsLoading(false);
        }
      }
    };

    loadPdfWithRetry();

    return () => {
      mounted = false;
    };
  }, [loadPdfJs, loadPdf]);

  const renderPage = useCallback(async () => {
    if (!pdfDocument) {
      return null;
    }

    try {
      const page = await pdfDocument.getPage(pageNumber);
      const scale = breakpoint === '2xl' || breakpoint === 'xl' || breakpoint === 'lg' ? 1 : 0.5;
      const viewport = page.getViewport({ scale });

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      await page.render(renderContext);
      return canvas;
    } catch (error) {
      setError(`Failed to render page: ${error.message}`);
      return null;
    }
  }, [pdfDocument, pageNumber, breakpoint]);

  useEffect(() => {
    const updateCanvas = async () => {
      const container = containerRef.current;
      if (!container) {
        return;
      }

      container.innerHTML = '';
      const canvas = await renderPage();
      if (canvas) {
        container.appendChild(canvas);
      }
    };

    if (!isLoading && pdfDocument) {
      updateCanvas();
    }
  }, [pageNumber, pdfDocument, isLoading, renderPage]);

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => changePage(-1);
  const nextPage = (e) => {
    e.stopPropagation();
    changePage(1);
  };

  return (
    <VStack spacing={4} align="center" w="full" className="bg-dynamic" pt="20px">
      {error && (
        <Alert status="error">
          <AlertIcon />
          <Box>
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Box>
        </Alert>
      )}
      {pdfUrl ? (
        <>
          <Box w="full" display="flex" justifyContent="center" overflow="auto" className="bg-dynamic">
            {isLoading ? (
              <Flex justify="center" align="center" h="full">
                <Spinner size="xl" />
              </Flex>
            ) : (
              <div ref={containerRef} />
            )}
          </Box>
          {numPages && (
            <Box pb="20px" w="full" textAlign="center">
              <Text color="text-dynamic">Page {pageNumber} of {numPages}</Text>
              <Flex w="full" justifyContent="space-evenly">
                <Button w="120px" onClick={previousPage} isDisabled={pageNumber <= 1} mr={2}>
                  Previous
                </Button>
                <Button w="120px" onClick={nextPage} isDisabled={pageNumber >= numPages}>
                  Next
                </Button>
              </Flex>
            </Box>
          )}
        </>
      ) : (
        <Text>No PDF URL provided</Text>
      )}
    </VStack>
  );
};

export default PDFViewer;