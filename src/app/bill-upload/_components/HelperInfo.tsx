import { Info } from "lucide-react";
import { HelperInfoProps } from "../_types";

export const HelperInfo: React.FC<HelperInfoProps> = ({ message }) => (
  <div className="bg-blue-500/10 rounded-lg p-4 flex items-start space-x-3">
    <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
    <p className="text-sm text-main/70 dark:text-blue-50/70">{message}</p>
  </div>
);

// lib/api/upload.ts
import axios from "axios";

interface UploadResponse {
  data: {
    statusCode?: number;
    message?: string;
  };
}

export const uploadFile = async (userId: string, fileBase64: string, fileType: string): Promise<UploadResponse> => {
  return axios.post("https://4zpask5mw0.execute-api.us-east-2.amazonaws.com/dev/add-user-images", {
    userId,
    imageBase64: fileBase64,
    imageType: fileType,
  });
};
