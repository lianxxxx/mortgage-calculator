export function validateInputs(amount, term, interest, type) {
    return amount > 0 && term > 0 && interest >= 0 && type;
}

export function computeMortgage(amount, term, interest, type) {
  if (!validateInputs(amount, term, interest, type)) return null;

  const monthlyRate = interest / 12 / 100;
  const totalPayments = term * 12;
  let monthlyPayment, totalRepayment;

  if (type === "repayment") {
    const factor = Math.pow(1 + monthlyRate, totalPayments);
    monthlyPayment = amount * (monthlyRate * factor) / (factor - 1);
    totalRepayment = monthlyPayment * totalPayments;
  } else if (type === "interest-only") {
    monthlyPayment = amount * monthlyRate;
    totalRepayment = monthlyPayment * totalPayments;
  } else {
    return null;
  }

  return {
    monthlyPayment: monthlyPayment.toLocaleString('en-GB', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }),
    totalRepayment: totalRepayment.toLocaleString('en-GB', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  };
}