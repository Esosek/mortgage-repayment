import Form from "@/components/Form";
import Results from "@/components/Results";

export default function Home() {
  return (
    <main className="bg-white w-full max-w-3xl grid md:grid-cols-2 rounded-2xl">
      <Form />
      <Results />
    </main>
  );
}
