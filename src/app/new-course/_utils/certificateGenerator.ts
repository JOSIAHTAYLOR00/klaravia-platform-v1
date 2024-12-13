// import { jsPDF } from 'jspdf';
// import { courseStructure } from '@/app/new-course/data/courseStructure';

// interface CertificateData {
//   studentName: string;
//   completionDate: string;
//   certificateId: string;
// }

// // Generate unique certificate ID
// function generateCertificateId(): string {
//   return `KL-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`.toUpperCase();
// }

// // Format date for certificate
// function formatCertificateDate(date: Date): string {
//   return date.toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
//   });
// }

// // Generate PDF certificate
// export async function generateCertificatePDF(data: CertificateData): Promise<Blob> {
//   const doc = new jsPDF({
//     orientation: 'landscape',
//     unit: 'px',
//     format: [800, 600]
//   });

//   // Set background color
//   doc.setFillColor(255, 255, 255);
//   doc.rect(0, 0, 800, 600, 'F');

//   // Add border
//   doc.setDrawColor(59, 130, 246); // blue-600
//   doc.setLineWidth(5);
//   doc.rect(40, 40, 720, 520);

//   // Add Klaravia logo
//   // doc.addImage('/klaravia-logo.png', 'PNG', 360, 60, 80, 80);

//   // Set title
//   doc.setFont('helvetica', 'bold');
//   doc.setFontSize(48);
//   doc.setTextColor(23, 37, 84); // blue-900
//   doc.text('Certificate of Completion', 400, 180, { align: 'center' });

//   // Add student name
//   doc.setFontSize(36);
//   doc.setTextColor(31, 41, 55); // gray-800
//   doc.text(data.studentName, 400, 280, { align: 'center' });

//   // Add course completion text
//   doc.setFontSize(24);
//   doc.setTextColor(75, 85, 99); // gray-600
//   doc.text('has successfully completed the', 400, 320, { align: 'center' });
  
//   // Add course name
//   doc.setFontSize(32);
//   doc.setTextColor(59, 130, 246); // blue-600
//   doc.text('Solar Expert Course', 400, 360, { align: 'center' });

//   // Add completion date
//   doc.setFontSize(18);
//   doc.setTextColor(75, 85, 99); // gray-600
//   doc.text(`Awarded on ${data.completionDate}`, 400, 420, { align: 'center' });

//   // Add certificate ID
//   doc.setFontSize(12);
//   doc.text(`Certificate ID: ${data.certificateId}`, 400, 500, { align: 'center' });

//   return doc.output('blob');
// }

// // Generate certificate verification URL
// export function generateVerificationUrl(certificateId: string): string {
//   return `${process.env.NEXT_PUBLIC_SITE_URL}/verify/${certificateId}`;
// }

// // Calculate course stats for certificate
// export function calculateCourseStats(): {
//   totalModules: number;
//   totalLessons: number;
//   totalHours: number;
// } {
//   const totalModules = courseStructure.length;
//   const totalLessons = courseStructure.reduce(
//     (acc, module) => acc + module.lessons.length, 
//     0
//   );
//   // Assuming average of 15 minutes per lesson
//   const totalHours = Math.round((totalLessons * 15) / 60);

//   return {
//     totalModules,
//     totalLessons,
//     totalHours
//   };
// }