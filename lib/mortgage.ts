import { MortgageResult } from "@/types/mortgage-result";

export default function calculateMortgage(formData: FormData): MortgageResult {
  const mortgageAmount = parseFloat(formData.get("mortgage-amount") as string);
  const mortgageTerm = parseFloat(formData.get("mortgage-term") as string);
  const interestRate = parseFloat(formData.get("interest-rate") as string);

  const monthlyInterestRate = interestRate / 100 / 12;

  const totalPayments = mortgageTerm * 12;

  const monthly =
    (mortgageAmount *
      (monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, totalPayments))) /
    (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

  const overall = monthly * totalPayments;

  return {
    monthly: Math.round(monthly * 100) / 100,
    overall: Math.round(overall * 100) / 100,
  };
}
