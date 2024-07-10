type FormHeaderProps = {
  handleClearForm?: () => void;
};

export default function FormHeader({ handleClearForm }: FormHeaderProps) {
  return (
    <div className="flex justify-between items-center my-8">
      <h1 className="font-bold text-lg">Mortgage Calculator</h1>
      <button
        onClick={handleClearForm}
        className="text-sm underline text-slate-700 hover:text-slate-900"
      >
        Clear All
      </button>
    </div>
  );
}
