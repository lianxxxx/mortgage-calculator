function ResultDisplay() {
  return (
    <div className="results-display text-white">
      <h1 className="result-text">Your results</h1>
      <p className="result-description">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click "calculate repayments"
        again.
      </p>
      <div style={{color:"var(--slate-normal)"}} className="result-box">
      
        <p>Your monthly repayments</p>
        <h1 className="font-bold text-3xl amount-monthly-repayments" style={{color:"var(--lime)"}}>$0</h1>
        <hr />
        <p>Total you'll repay over the term</p>
        <h3 className="font-bold amount-monthly-repay-term" style={{color:"var(--white)"}}>£0</h3>
      </div>
    </div>
  );
}

export default ResultDisplay;
