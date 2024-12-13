export interface LoanOption {
  name: string;
  logo: string;
  minAmount: number;
  maxAmount: number;
  minAPR: number;
  maxAPR: number;
  creditScoreRequired: number | 'None';
  applicationLink: string;
 }