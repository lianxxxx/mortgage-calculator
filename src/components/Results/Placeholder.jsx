import illustrationEmpty from "../../assets/img/illustration-empty.svg";
function Placeholder() {
  return (
    <div className="placeholder-container flex justify-center items-center flex-col  text-white">
      <img src={illustrationEmpty} alt="" />
      <h1 className="result-empty-text">Results shown here</h1>
      <p className="complete-form-text">Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
    </div>
  );
}

export default Placeholder;
