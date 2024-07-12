type FormHeaderProps = {
  handleClearForm?: () => void;
};

export default function FormHeader({ handleClearForm }: FormHeaderProps) {
  return (
    <div className="flex flex-col justify-between items-start gap-2 md:items-center my-8 md:flex-row">
      <h1 className="font-bold text-xl md:text-lg">Mortgage Calculator</h1>
      <button
        onClick={handleClearForm}
        className="text-sm underline text-slate-700 hover:text-slate-900"
      >
        Clear All
      </button>
    </div>
  );
}
