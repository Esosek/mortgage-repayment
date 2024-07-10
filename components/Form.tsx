"use client";
import { FormEvent } from "react";
import SubmitButton from "./SubmitButton";

import iconCalculator from "@/assets/images/icon-calculator.svg";
import Image from "next/image";

export default function Form() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="p-8">
      <SubmitButton>
        <Image src={iconCalculator} alt="Calculator icon" />
        Calculate Repayments
      </SubmitButton>
    </form>
  );
}
