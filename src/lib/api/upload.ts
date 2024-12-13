import axios from 'axios';

export const uploadFile = async (userId: string, fileBase64: string, fileType: string) => {
  return axios.post("https://4zpask5mw0.execute-api.us-east-2.amazonaws.com/dev/add-user-images", {
    userId,
    imageBase64: fileBase64,
    imageType: fileType,
  });
};