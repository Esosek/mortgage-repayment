import { ReactNode } from "react";
import InputLable from "./InputLabel";

type CustomNumberInputProps = {
  children: ReactNode;
  name: string;
  metric: string;
  initialValue?: number;
  step?: string;
  isMetricLeft?: boolean;
};

export default function CustomNumberInput({
  children,
  name,
  metric,
  initialValue = 0,
  step = "1",
  isMetricLeft = true,
}: CustomNumberInputProps) {
  return (
    <div className="my-4 md:my-2">
      <InputLable for={name}>{children}</InputLable>
      <div className="flex border-[1px] border-slate-500 rounded-md overflow-clip">
        <p
          className={`${
            isMetricLeft ? "" : "order-2"
          } font-bold text-slate-700 bg-slate-100 py-2 px-3`}
        >
          {metric}
        </p>
        <input
          type="number"
          min={0}
          step={step}
          name={name}
          id={name}
          defaultValue={initialValue}
          className="w-full focus:outline-none px-4 font-bold"
        />
      </div>
    </div>
  );
}
