"use client";
import { FormEvent } from "react";
import SubmitButton from "./SubmitButton";

import iconCalculator from "@/assets/images/icon-calculator.svg";
import Image from "next/image";
import FormHeader from "./FormHeader";
import CustomNumberInput from "./CustomNumberInput";

export default function Form() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  function handleClearForm() {
    console.log("Form cleared");
  }

  return (
    <form onSubmit={handleSubmit} className="px-8">
      <FormHeader handleClearForm={handleClearForm} />

      <CustomNumberInput
        metric="£"
        name="mortgage-amount"
        initialValue={300000}
        step="1000"
      >
        Mortgage Amount
      </CustomNumberInput>

      <div className="md:flex md:gap-4">
        <CustomNumberInput
          metric="years"
          name="mortgage-term"
          initialValue={25}
          step="1"
          isMetricLeft={false}
        >
          Mortgage Term
        </CustomNumberInput>

        <CustomNumberInput
          metric="%"
          name="interest-rate"
          initialValue={5.25}
          step="0.01"
          isMetricLeft={false}
        >
          Interest Rate
        </CustomNumberInput>
      </div>

      <SubmitButton>
        <Image src={iconCalculator} alt="Calculator icon" />
        Calculate Repayments
      </SubmitButton>
    </form>
  );
}
