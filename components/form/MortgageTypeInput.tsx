"use client";

import { MortgageType } from "@/types/mortgage-type";

type MortgageTypeInputType = {
  activeRadio: number | null;
  setActiveRadio: (index: number) => void;
  error?: string | null;
};

export default function MortgageTypeInput({
  activeRadio,
  setActiveRadio,
  error = null,
}: MortgageTypeInputType) {
  const mortgageTypeNames = ["Repayment", "Interest Only"];

  const handleRadioSelect = (index: number) => setActiveRadio(index);

  return (
    <fieldset className="space-y-2 my-2 font-bold">
      <legend className="text-sm text-slate-700">Mortgage Type</legend>

      {Object.values(MortgageType).map((type, index) => (
        <label
          key={type}
          htmlFor={`mortgage-type-${index + 1}`}
          onClick={() => handleRadioSelect(index)}
          className={`flex items-center gap-4 w-full border-[1px] py-2 px-4 rounded-md hover:border-lime hover:cursor-pointer focus-within:border-lime ${
            activeRadio === index
              ? "border-lime bg-lime/15"
              : "border-slate-500"
          }`}
        >
          <input
            type="radio"
            id={`mortgage-type-${index + 1}`}
            name="mortgage-type"
            value={type}
            className="sr-only"
            checked={activeRadio === index}
            onChange={() => handleRadioSelect(index)}
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
          <p>{mortgageTypeNames[index]}</p>
        </label>
      ))}
      {error && <p className="text-xs text-red font-normal">{error}</p>}
    </fieldset>
  );
}
