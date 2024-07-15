"use client";
import { FormEvent } from "react";
import SubmitButton from "./SubmitButton";

import iconCalculator from "@/assets/images/icon-calculator.svg";
import Image from "next/image";
import FormHeader from "./FormHeader";
import CustomNumberInput from "./CustomNumberInput";
import MortgageTypeInput from "./MortgageTypeInput";

export default function Form() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="px-8">
      <FormHeader />

      <CustomNumberInput metric="£" name="mortgage-amount" step="1000">
        Mortgage Amount
      </CustomNumberInput>

      <div className="md:flex md:gap-4">
        <CustomNumberInput
          metric="years"
          name="mortgage-term"
          step="1"
          isMetricLeft={false}
        >
          Mortgage Term
        </CustomNumberInput>

        <CustomNumberInput
          metric="%"
          name="interest-rate"
          step="0.01"
          isMetricLeft={false}
        >
          Interest Rate
        </CustomNumberInput>
      </div>

      <MortgageTypeInput />

      <SubmitButton>
        <Image src={iconCalculator} alt="Calculator icon" />
        Calculate Repayments
      </SubmitButton>
    </form>
  );
}
