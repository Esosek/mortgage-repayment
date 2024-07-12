import Image from "next/image";

import calcImage from "@/assets/images/illustration-empty.svg";

export default function EmptyResults() {
  return (
    <div className="h-full text-center flex flex-col justify-center items-center py-8 px-6 md:p-8">
      <Image
        src={calcImage}
        alt="Illustration of empty calculator"
        className="max-w-36"
      />
      <h2 className="font-bold text-xl md:text-lg my-4">Results shown here</h2>
      <p className="text-sm text-slate-300">
        Complete the form and click &quot;calculate repayments&quot; to see what
        your monthly repayments would be.
      </p>
    </div>
  );
}
