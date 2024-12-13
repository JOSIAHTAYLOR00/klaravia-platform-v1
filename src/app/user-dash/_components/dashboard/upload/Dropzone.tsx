import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Center, Text, Progress, VStack } from "@chakra-ui/react";
import { FilePreview } from "./FilePreview";
import { DropzoneProps, FileWithPreview } from "../stages/_types";

const dropzoneStyles = {
  border: "2px dashed white",
  borderRadius: "16px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
  color: "white",
} as const;

export const Dropzone = ({ onFileUpload, loadingFileUpload }: DropzoneProps) => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const filesWithPreviews = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setFiles((prev) => [...prev, ...filesWithPreviews]);
      await onFileUpload(acceptedFiles);
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  });

  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  return (
    <Box p="4">
      <Center h="200px" {...getRootProps()} style={dropzoneStyles} display="flex" alignItems="center">
        <input {...getInputProps()} />
        <Text>{isDragActive ? "Drop the files here ..." : "Drag 'n' drop some files here, or click to select files"}</Text>
      </Center>
      {loadingFileUpload && <Progress mt={4} isIndeterminate />}
      <FilePreview files={files} />
    </Box>
  );
};
