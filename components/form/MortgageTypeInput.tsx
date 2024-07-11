type MortgageTypeInputProps = {};

export default function MortgageTypeInput(props: MortgageTypeInputProps) {
  return (
    <fieldset>
      <legend className="text-sm text-slate-700">Mortgage Type</legend>

      <div className="flex gap-4 border-[1px]">
        <input
          type="radio"
          id="contactChoice1"
          name="mortgage-type"
          value="repayment"
          className="accent-lime"
        />
        <label htmlFor="contactChoice1">Repayment</label>
      </div>

      <div className="flex gap-4 border-[1px]">
        <input
          type="radio"
          id="contactChoice1"
          name="mortgage-type"
          value="interest-only"
        />
        <label htmlFor="contactChoice1">Interest Only</label>
      </div>
    </fieldset>
  );
}
