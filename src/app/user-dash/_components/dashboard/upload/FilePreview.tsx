import { Box, Image, Icon, VStack, Text, HStack } from "@chakra-ui/react";
import { GrDocumentText } from "react-icons/gr";
import { FileWithPreview } from "../stages/_types";
import { getFileType } from "./_utils";

interface FilePreviewProps {
  files: FileWithPreview[];
}

export const FilePreview = ({ files }: FilePreviewProps) => {
  if (files.length === 0) return null;

  return (
    <VStack w="full" maxW={{ base: "full", lg: "40vw" }} borderRadius="6px" bgColor="rgba(255,255,255,.2)" mt={5} pt="20px">
      <Text color="white">Uploaded documents</Text>
      <HStack w="100%" p="20px" spacing={4} justifyContent="flex-start" flexWrap="wrap">
        {files.map((file, i) => (
          <Box
            key={`${file.name}-${i}`}
            bgColor="white"
            borderRadius="6px"
            shadow="rgba(0, 0, 0, 0.1) 0px 5px 15px 0px"
            w="120px"
            h="140px"
            display="flex"
            flexDirection="column"
            p="10px"
          >
            <Box w="100%" display="flex" justifyContent="center">
              {getFileType(file.type) === "image" ? (
                <Image h="120px" src={file.preview} alt={file.name} objectFit="cover" borderRadius="md" />
              ) : (
                <Icon as={GrDocumentText} boxSize="80px" />
              )}
            </Box>
          </Box>
        ))}
      </HStack>
    </VStack>
  );
};
