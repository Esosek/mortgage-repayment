import { MortgageResult } from "@/types/mortgage-result";

type ResultsProps = {
  results: MortgageResult;
};

export default function Results({ results }: ResultsProps) {
  return (
    <div className="py-8 px-6 md:p-8">
      <h2 className="font-bold text-xl md:text-xl mb-4">Your results</h2>
      <p className="text-sm text-slate-300 leading-6">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click &quot;calculate
        repayments&quot; again.
      </p>

      <div className="bg-slate-950 rounded-md shadow-lime shadow-[0_-5px_0] mt-10 mb-4 p-6">
        <h3 className="text-sm text-slate-300">Your monthly repayments</h3>
        <p className="my-6 text-5xl font-bold text-lime">
          £{results.monthly.toLocaleString("en-GB")}
        </p>
        <hr className="border-white/15 my-4 md:my-8" />
        <p className="text-sm text-slate-300 my-2">
          Total you&apos;ll repay over the term
        </p>
        <p className="font-bold text-lg">
          £{results.overall.toLocaleString("en-GB")}
        </p>
      </div>
    </div>
  );
}
