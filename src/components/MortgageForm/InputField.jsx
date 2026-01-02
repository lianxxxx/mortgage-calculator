import iconCalculator from "../../assets/img/icon-calculator.svg";
import { useState } from 'react';

function InputField() {
   const [isAmountFocused, setIsAmountFocused] = useState(false);
  const [isTermFocused, setIsTermFocused] = useState(false);
  const [isRateFocused, setIsRateFocused] = useState(false);
  return (
    <div className="input-fields">
      <div>
        <label className="block" htmlFor="amount">
          Mortgage Amount
        </label>
        <div className="relative ">
          <span 
        className={`absolute left-0 top-0 h-full w-10 flex items-center justify-center font-semibold rounded-l-md border border-r-0 amount-term-rate ${isAmountFocused ? 'active' : ''}`}
      >
            £
          </span>

          <input
            id="mortgage-amount"
            type="text"
            className="w-full pl-12 pr-3 py-2 border rounded-md bg-white focus:outline-none"    onFocus={() => setIsAmountFocused(true)}
            onBlur={() => setIsAmountFocused(false)}
          />
        </div>

        {/* Mortgage Term Input */}
        <div className="term-rate">
          <div>
            <label className="block  font-medium mb-1" htmlFor="term">
              Mortgage Term
            </label>
            <div className="relative input-box">
            <span
  className={`absolute right-0 top-0 h-full w-16 flex items-center justify-center text-sm font-semibold rounded-r-md border border-l-0 amount-term-rate ${isTermFocused ? 'active' : ''}`}
>
  years
</span>

              <input
                id="mortgage-term"
                type="text"
                className="w-full pl-12 pr-3 py-2 border rounded-md bg-white focus:outline-none"  onFocus={() => setIsTermFocused(true)}
                onBlur={() => setIsTermFocused(false)}
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
  className={`absolute right-0 top-0 h-full w-10 flex items-center justify-center text-sm font-semibold rounded-r-md border border-l-0 amount-term-rate ${isRateFocused ? 'active' : ''}`}
>
                %
              </span>
              <input
                id="interest-rate"
                type="text"
                className="w-full pl-12 pr-3 py-2 border rounded-md bg-white focus:outline-none"  onFocus={() => setIsRateFocused(true)}
                onBlur={() => setIsRateFocused(false)}
              />
            </div>
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
           
              />
              <span className="text-gray-700 font-semibold">Repayment</span>
            </div>
            <div className="flex items-center cursor-pointer border   rounded-md p-2 mortgage-type">
              <input
                type="radio"
                name="mortgageType"
                value="interest-only"
                id="interest-only"
         
              /> 
              <span className="text-gray-700 mortgage-type-label font-semibold">
                Interest Only
              </span>
            </div>
          </div>
        </div>

        <button className="w-full md:w-auto    rounded-full flex items-center justify-center gap-2 font-semibold">
          <img src={iconCalculator} alt="" className="w-6" />
          Calculate Repayments
        </button>
      </div>
    </div>
  );
}

export default InputField;
