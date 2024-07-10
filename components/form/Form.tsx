"use client";
import { FormEvent } from "react";
import SubmitButton from "./SubmitButton";

import iconCalculator from "@/assets/images/icon-calculator.svg";
import Image from "next/image";
import FormHeader from "./FormHeader";

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
      <SubmitButton>
        <Image src={iconCalculator} alt="Calculator icon" />
        Calculate Repayments
      </SubmitButton>
    </form>
  );
}
