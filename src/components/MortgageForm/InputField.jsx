import { validateInputs, computeMortgage } from "../../utils/mortgageLogic";
import iconCalculator from "../../assets/img/icon-calculator.svg";
import { useState } from "react";

function InputField({
  amount,
  setAmount,
  term,
  setTerm,
  rate,
  setRate,
  type,
  setType,
  setResult,
}) {
  const [isAmountFocused, setIsAmountFocused] = useState(false);
  const [isTermFocused, setIsTermFocused] = useState(false);
  const [isRateFocused, setIsRateFocused] = useState(false);

  // ERROR STATES
  const [errors, setErrors] = useState({
    amount: false,
    term: false,
    rate: false,
    type: false,
  });
  const formatNumberWithCommas = (value) => {
    if (!value) return "";
    const cleanValue = value.toString().replace(/^0+/, "") || "0";
    return cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleAmountChange = (e) => {
    let rawValue = e.target.value.replace(/[^\d]/g, ""); // remove non-digits including commas

    // Remove leading zeros
    if (rawValue.length > 1) {
      rawValue = rawValue.replace(/^0+/, "");
    }

    setAmount(rawValue);
  };
  const handleCalculate = () => {
    const newErrors = {
      amount: !amount || amount === "0",
      term: !term || term === "0",
      rate: !rate || rate === "0",
      type: !type,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    const result = computeMortgage(amount, term, rate, type);

    if (result) {
      setResult(result);
    }
  };
  return (
    <div className="input-fields">
      <div>
        <label className="block" htmlFor="amount">
          Mortgage Amount
        </label>
        <div className="relative ">
          <span
            className={`absolute left-0 top-0 h-full w-10 flex items-center justify-center font-semibold rounded-l-md border border-r-0 amount-term-rate ${
              errors.amount
                ? "bg-red-500 text-white border-red-500"
                : isAmountFocused
                ? "active"
                : ""
            }`}
          >
            £
          </span>
          <input
            id="mortgage-amount"
            type="text"
            className={`w-full pl-12 pr-3 py-2 border rounded-md bg-white focus:outline-none ${
              errors.amount ? "border-red-500" : ""
            }`}
            onFocus={() => setIsAmountFocused(true)}
            onBlur={() => setIsAmountFocused(false)}
            value={formatNumberWithCommas(amount)}
            onChange={handleAmountChange}
          />
        </div>
        {errors.amount && (
          <p className="text-red-600 text-sm error-message">
            This field is required
          </p>
        )}

        {/* Mortgage Term Input */}
        <div className="term-rate">
          <div>
            <label className="block  font-medium mb-1" htmlFor="term">
              Mortgage Term
            </label>
            <div className="relative input-box">
              <span
                className={`absolute right-0 top-0 h-full w-16 flex items-center justify-center text-sm font-semibold rounded-r-md border border-l-0 amount-term-rate ${
                  errors.term
                    ? "bg-red-500 text-white border-red-500"
                    : isTermFocused
                    ? "active"
                    : ""
                }`}
              >
                years
              </span>

              <input
                id="mortgage-term"
                type="number"
                className={`w-full pl-12 pr-3 py-2 border rounded-md bg-white focus:outline-none ${
                  errors.term ? "border-red-500" : ""
                }`}
                onFocus={() => setIsTermFocused(true)}
                onBlur={() => setIsTermFocused(false)}
                value={term}
                onChange={(e) => {
                  setTerm(e.target.value);
                  if (e.target.value)
                    setErrors((prev) => ({ ...prev, term: false }));
                }}
              />
            </div>
            {errors.term && (
              <p className="text-red-600 text-sm error-message">
                This field is required
              </p>
            )}
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
                className={`absolute right-0 top-0 h-full w-10 flex items-center justify-center text-sm font-semibold rounded-r-md border border-l-0 amount-term-rate ${
                  errors.rate
                    ? "bg-red-500 text-white border-red-500"
                    : isRateFocused
                    ? "active"
                    : ""
                }`}
              >
                %
              </span>
              <input
                id="interest-rate"
                type="number"
                className={`w-full pl-12 pr-3 py-2 border rounded-md bg-white focus:outline-none ${
                  errors.rate ? "border-red-500" : ""
                }`}
                onFocus={() => setIsRateFocused(true)}
                onBlur={() => setIsRateFocused(false)}
                value={rate}
                onChange={(e) => {
                  setRate(e.target.value);
                  if (e.target.value)
                    setErrors((prev) => ({ ...prev, rate: false }));
                }}
              />
            </div>
            {errors.rate && (
              <p className="text-red-600 text-sm error-message">
                This field is required
              </p>
            )}
          </div>
        </div>

        {/* Mortgage Type Selection */}
        <div>
          <label className="block text-gray-700 font-medium" htmlFor="type">
            Mortgage Type
          </label>
          <div className="flex flex-col">
            <div className="flex items-center cursor-pointer border  rounded-md p-2 mortgage-type">
              <input
                type="radio"
                name="mortgageType"
                value="repayment"
                id="repayment"
                checked={type === "repayment"}
                onChange={() => {
                  setType("repayment");
                  setErrors((prev) => ({ ...prev, type: false }));
                }}
              />
              <span className="text-gray-700 font-semibold">Repayment</span>
            </div>
            <div className="flex items-center cursor-pointer border   rounded-md p-2 mortgage-type">
              <input
                type="radio"
                name="mortgageType"
                value="interest-only"
                id="interest-only"
                checked={type === "interest-only"}
                onChange={() => {
                  setType("interest-only");
                  setErrors((prev) => ({ ...prev, type: false }));
                }}
              />
              <span className="text-gray-700 mortgage-type-label font-semibold">
                Interest Only
              </span>
            </div>
          </div>
          {errors.type && (
            <p className="text-red-600 text-sm error-message">
              This field is required
            </p>
          )}
        </div>

        <button
          className="w-full md:w-auto    rounded-full flex items-center justify-center gap-2 font-semibold"
          onClick={handleCalculate}
        >
          <img src={iconCalculator} alt="" className="w-6" />
          Calculate Repayments
        </button>
      </div>
    </div>
  );
}

export default InputField;
