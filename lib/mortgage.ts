import { MortgageResult } from "@/types/mortgage-result";

export default function calculateMortgage(formData: FormData): MortgageResult {
  return {
    monthly: 0,
    overall: 0,
  };
}
