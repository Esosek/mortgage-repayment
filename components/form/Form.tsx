"use client";
import Image from "next/image";
import { useFormState } from "react-dom";
import { FormEvent, useEffect, useState } from "react";

import iconCalculator from "@/assets/images/icon-calculator.svg";
import SubmitButton from "./SubmitButton";
import FormHeader from "./FormHeader";
import CustomNumberInput from "./CustomNumberInput";
import MortgageTypeInput from "./MortgageTypeInput";

import handleFormSubmit from "@/actions/form-submit";
import { MortgageResult } from "@/types/mortgage-result";

type FormType = {
  onSubmit: (result: MortgageResult | null) => void;
};

export default function Form({ onSubmit }: FormType) {
  const [formState, formAction] = useFormState(handleFormSubmit, {
    result: null,
    errors: null,
  });

  const [mortgageType, setMortgageType] = useState<number | null>(null);

  useEffect(() => {
    onSubmit(formState.result);
  }, [onSubmit, formState.result]);

  const handleFormReset = (e: FormEvent) => setMortgageType(null);

  return (
    <form action={formAction} onReset={handleFormReset} className="px-8">
      <FormHeader />

      <CustomNumberInput
        metric="£"
        name="mortgage-amount"
        step="1000"
        error={formState.errors?.amount}
      >
        Mortgage Amount
      </CustomNumberInput>

      <div className="md:flex md:gap-4">
        <CustomNumberInput
          metric="years"
          name="mortgage-term"
          step="1"
          error={formState.errors?.term}
          isMetricLeft={false}
        >
          Mortgage Term
        </CustomNumberInput>

        <CustomNumberInput
          metric="%"
          name="interest-rate"
          step="0.01"
          error={formState.errors?.["interest-rate"]}
          isMetricLeft={false}
        >
          Interest Rate
        </CustomNumberInput>
      </div>

      <MortgageTypeInput
        activeRadio={mortgageType}
        setActiveRadio={setMortgageType}
        error={formState.errors?.type}
      />

      <SubmitButton>
        <Image src={iconCalculator} alt="Calculator icon" priority />
        Calculate Repayments
      </SubmitButton>
    </form>
  );
}
