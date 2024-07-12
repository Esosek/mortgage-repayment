import Form from "@/components/form/Form";
import Results from "@/components/results/Results";
import EmptyResults from "@/components/results/EmptyResults";

export default function Home() {
  return (
    <main className="bg-white w-full max-w-4xl md:mx-4 grid md:grid-cols-2 md:rounded-2xl md:overflow-clip">
      <Form />
      <div className="bg-slate-900 text-white md:rounded-bl-[3rem]">
        <EmptyResults />
        {/* <Results /> */}
      </div>
    </main>
  );
}
