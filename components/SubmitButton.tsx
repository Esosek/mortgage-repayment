import { ReactNode } from "react";

type SubmitButtonProps = {
  children: ReactNode;
};

export default function SubmitButton({ children }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className="flex items-center w-full justify-center gap-2 bg-lime py-3 px-8 rounded-full font-bold hover:bg-lime/50 transition-colors duration-100 md:w-auto"
    >
      {children}
    </button>
  );
}
