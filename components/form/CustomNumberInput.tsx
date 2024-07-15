import { ReactNode } from "react";

type CustomNumberInputProps = {
  children: ReactNode;
  name: string;
  metric: string;
  step?: string;
  isMetricLeft?: boolean;
};

export default function CustomNumberInput({
  children,
  name,
  metric,
  step = "1",
  isMetricLeft = true,
}: CustomNumberInputProps) {
  return (
    <div className="my-4 md:my-2">
      <label htmlFor={name} className="text-sm text-slate-700">
        {children}
      </label>
      <div className="group flex border-[1px] border-slate-500 rounded-md overflow-clip mt-2 hover:border-slate-900 focus-within:border-lime focus-within:hover:border-lime">
        <p
          className={`${
            isMetricLeft ? "" : "order-2"
          } font-bold text-slate-900 bg-slate-100 py-2 px-3 group-focus-within:bg-lime`}
        >
          {metric}
        </p>
        <input
          type="number"
          min={0}
          step={step}
          name={name}
          id={name}
          required
          className="w-full focus:outline-none px-4 font-bold"
        />
      </div>
    </div>
  );
}
