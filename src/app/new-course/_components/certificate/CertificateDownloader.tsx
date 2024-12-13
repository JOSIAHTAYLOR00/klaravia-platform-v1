"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { generateCertificatePDF } from "@/app/new-course/_utils/certificateGenerator";

export default function CertificateDownloader() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    try {
      setIsGenerating(true);

      const certificateData = {
        studentName: "Student Name", // This would come from user data
        completionDate: new Date().toLocaleDateString(),
        certificateId: `KL-${Date.now()}`,
      };

      const pdfBlob = await generateCertificatePDF(certificateData);

      // Create download link
      const url = window.URL.createObjectURL(pdfBlob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `klaravia-solar-expert-certificate.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to generate certificate:", error);
      alert("Failed to generate certificate. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg transition-colors"
    >
      <Download className="w-5 h-5" />
      {isGenerating ? "Generating..." : "Download Certificate"}
    </button>
  );
}
