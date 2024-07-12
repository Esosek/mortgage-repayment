"use client";

import { useState } from "react";

export default function MortgageTypeInput() {
  const [activeRadio, setActiveRadio] = useState<Number | null>();
  const mortgageTypes = ["Repayment", "Interest Only"];

  const handleRadioSelect = (index: number) => setActiveRadio(index);

  return (
    <fieldset className="space-y-2 my-2 font-bold">
      <legend className="text-sm text-slate-700">Mortgage Type</legend>

      {mortgageTypes.map((type, index) => (
        <button
          key={type}
          type="button"
          onClick={() => handleRadioSelect(index)}
          className={`flex items-center gap-4 w-full border-[1px] py-2 px-4 rounded-md hover:border-lime ${
            activeRadio === index
              ? "border-lime bg-lime/15"
              : "border-slate-500"
          }`}
        >
          <input
            type="radio"
            id={`mortgage-type-${index + 1}`}
            name="mortgage-type"
            value={type.toLowerCase()}
            className="sr-only"
            defaultChecked={activeRadio === index}
          />
          <div
            className={`flex items-center justify-center size-4 rounded-full border-2 ${
              activeRadio === index ? "border-lime" : "border-slate-900"
            }`}
          >
            {activeRadio === index && (
              <div className="size-2 bg-lime rounded-full"></div>
            )}
          </div>
          <label
            htmlFor={`mortgage-type-${index + 1}`}
            className="pointer-events-none"
          >
            {type}
          </label>
        </button>
      ))}
    </fieldset>
  );
}
