import { ReactNode } from "react";

type InputLableProps = {
  children: ReactNode;
  for: string;
};

export default function InputLable(props: InputLableProps) {
  return (
    <label htmlFor={props.for} className="block text-sm text-slate-700 mb-2">
      {props.children}
    </label>
  );
}
