"use client";
import { FormEvent } from "react";
import SubmitButton from "./SubmitButton";

import iconCalculator from "@/assets/images/icon-calculator.svg";
import Image from "next/image";

export default function Form() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  function handleClearForm() {
    console.log("Form cleared");
  }

  return (
    <form onSubmit={handleSubmit} className="px-8">
      <div className="flex justify-between items-center my-8">
        <h1 className="font-bold text-lg">Mortgage Calculator</h1>
        <button
          onClick={handleClearForm}
          className="text-sm underline text-slate-700 hover:text-slate-900"
        >
          Clear All
        </button>
      </div>
      <SubmitButton>
        <Image src={iconCalculator} alt="Calculator icon" />
        Calculate Repayments
      </SubmitButton>
    </form>
  );
}
