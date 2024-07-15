"use client";

import Form from "@/components/form/Form";
import Results from "@/components/results/Results";
import EmptyResults from "@/components/results/EmptyResults";
import { useState } from "react";
import { MortgageResult } from "@/types/mortgage-result";

export default function Home() {
  const [result, setResult] = useState<MortgageResult | null>(null);

  function handleFormSubmit(result: MortgageResult | null) {
    setResult(() => result);
  }
  return (
    <main className="bg-white w-full max-w-4xl md:mx-4 grid md:grid-cols-2 md:rounded-2xl md:overflow-clip">
      <Form onSubmit={handleFormSubmit} />
      <div className="bg-slate-900 text-white md:rounded-bl-[3rem]">
        {result ? <Results results={result} /> : <EmptyResults />}
      </div>
    </main>
  );
}
