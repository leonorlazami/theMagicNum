import loader from "../assets/spinner.svg";
const FinalSum = ({ firstNum, showResult, isLoading }) => {
  return (
    <div className="flex  justify-center items-center flex-col text-center h-20 mt-6 font-custom-one ">
      <div>{isLoading && <img src={loader} alt="" className="w-20 " />}</div>
      {showResult && (
        <h2 className="text-white text-2xl md:text-5xl">
          Calculated sum:
          <span className="text-custom-yellow tracking-wider font-custom-two font-bold ml-3">
            {(parseInt(firstNum) + 199998).toLocaleString()}
          </span>
        </h2>
      )}
    </div>
  );
};

export default FinalSum;
