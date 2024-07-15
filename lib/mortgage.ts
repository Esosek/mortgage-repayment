type MortgageResult = {
    monthly: number;
    overall: number;
}

export default function calculateMortgage(formData: FormData):MortgageResult {
    return {
        monthly: 0,
        overall: 0,
    }
}