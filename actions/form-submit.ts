"use server";

import calculateMortgage from "@/lib/mortgage";
import { MortgageType } from "@/types/mortgage-type";

type FormType = {
  result: null | { monthly: number; overall: number };
  errors: null | { [key: string]: string };
};

export default async function handleFormSubmit(
  prevState: {},
  formData: FormData
): Promise<FormType> {
  const formErrors = validateForm(formData);

  if (formErrors !== null) {
    return { result: null, errors: formErrors };
  }

  return { result: calculateMortgage(formData), errors: formErrors };
}

function validateForm(formData: FormData) {
  const error: { [key: string]: string } = {};

  const mortgageType = formData.get("mortgage-type");
  const mortgageAmount = formData.get("mortgage-amount");
  const mortgageTerm = formData.get("mortgage-term");
  const interestRate = formData.get("interest-rate");

  if (!isTypeValid(mortgageType)) {
    error.type = "The field is required";
  }

  if (!isNumberInputValid(mortgageAmount)) {
    error.amount = "The field is required";
  }

  if (!isNumberInputValid(mortgageTerm)) {
    error.term = "The field is required";
  }

  if (!isNumberInputValid(interestRate)) {
    error["interest-rate"] = "The field is required";
  }

  return Object.keys(error).length > 0 ? error : null;
}

function isNumberInputValid(value: FormDataEntryValue | null) {
  if (
    value === null ||
    value === "" ||
    isNaN(Number(value)) ||
    Number(value) <= 0
  ) {
    return false;
  }
  return true;
}

function isTypeValid(type: FormDataEntryValue | null) {
  return (
    type !== null && Object.values(MortgageType).includes(type as MortgageType)
  );
}
