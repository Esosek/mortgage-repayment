import Form from "@/components/form/Form";
import Results from "@/components/results/Results";
import EmptyResults from "@/components/results/EmptyResults";

export default function Home() {
  return (
    <main className="bg-white w-full max-w-4xl grid md:grid-cols-2 rounded-2xl overflow-clip">
      <Form />
      <div className="bg-slate-900 text-white rounded-bl-[3rem]">
        <EmptyResults />
      </div>
    </main>
  );
}
