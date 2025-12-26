import iconCalculator from "../../assets/img/icon-calculator.svg";

function InputField() {
  return (
    <div className="input-fields">
      <div>
        <label className="block" htmlFor="amount">
          Mortgage Amount
        </label>
        <div className="relative">
          <span
            className="absolute left-0 top-0 h-full w-10 flex items-center justify-center font-semibold rounded-l-md border border-r-0"
            style={{
              backgroundColor: "var(--slate-light)",
              color: "var(--slate-darker)",
            }}
          >
            £
          </span>

          <input
            id="mortgage-amount"
            type="text"
            className="w-full pl-12 pr-3 py-2 border rounded-md bg-white focus:outline-none"
          />
        </div>

        {/* Mortgage Term Input */}
        <div>
          <label className="block  font-medium mb-1" htmlFor="term">
            Mortgage Term
          </label>
          <div className="relative">
            <span
              className="absolute right-0 top-0 h-full w-16 flex items-center justify-center text-sm  font-semibold rounded-r-md border border-l-0"
              style={{
                backgroundColor: "var(--slate-light)",
                color: "var(--slate-darker)",
              }}
            >
              years
            </span>

            <input
              id="mortgage-term"
              type="text"
              className="w-full pl-12 pr-3 py-2 border rounded-md bg-white focus:outline-none"
            />
          </div>
        </div>

        {/* Interest Rate */}
        <div>
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="rate"
          >
            Interest Rate
          </label>
          <div className="relative">
            <span
              className="absolute right-0 top-0 h-full w-10 flex items-center justify-center font-semibold rounded-r-md border border-l-0"
              style={{
                backgroundColor: "var(--slate-light)",
                color: "var(--slate-darker)",
              }}
            >
              %
            </span>

            <input
              id="interest-rate"
              type="text"
              className="w-full pl-12 pr-3 py-2 border rounded-md bg-white focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium" htmlFor="type">
            Mortgage Type
          </label>
          <div className="flex flex-col">
            <div
              className="flex items-center cursor-pointer border  rounded-md p-2"
              style={{
                borderColor: "var(--slate-dark)",
              }}
            >
              <input
                type="radio"
                name="mortgageType"
                value="repayment"
                className=" border-2 w-4 rounded-full focus:outline-none mr-2"
              />
              <span className="text-gray-700">Repayment</span>
            </div>
            <div
              className="flex items-center cursor-pointer border   rounded-md p-2 mortgage-type"
              style={{
                borderColor: "var(--slate-dark)",
              }}
            >
              <input
                type="radio"
                name="mortgageType"
                value="interest-only"
                className="w-4 h-4 border-2  rounded-full focus:outline-none "
              />
              <span className="text-gray-700 mortgage-type-label">
                Interest Only
              </span>
            </div>
          </div>
        </div>

        <button className="w-full  rounded-full flex items-center justify-center gap-2 font-semibold">
          <img src={iconCalculator} alt="" className="w-6" />
          Calculate Repayments
        </button>
      </div>
    </div>
  );
}

export default InputField;
