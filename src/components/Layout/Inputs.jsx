import { useRef, useState } from "react";
import FifthInput from "../FifthInput";
import FinalSum from "../FinalSum";
import FirstInput from "../FirstInput";
import FourthInput from "../FourthInput";
import SecondInput from "../SecondInput";
import ThirdInput from "../ThirdInput";

const Inputs = () => {
  const style =
    "my-10 h-[2rem] w-[10rem] p-0 text-3xl tracking-widest text-center py-0 bg-transparent border-b border-t-0 border-hidden  focus:border-b-custom-orange focus:border-double outline-none md:overflow-hidden md:w-[15.5rem] md:h-[3rem] md:text-5xl md:text-center  md:pb-1";
  const disabledStyle =
    "disabled:opacity-75 disabled:border-b-custom-orange disabled:border-double md:disabled:text-5xl md:disabled:py-2";
  const leftArrStyle = {
    class: "relative top-10 left-4",
    color: "#FB8500",
    size: 25,
  };
  const rightArrStyle = {
    class: "relative top-10 right-4 ",
    color: "#FB8500",
    size: 25,
  };
  // HANDLING FIRST INPUT TO SHOW RESULT AND GOING TO STEP 2
  const [firstNum, setFirstNum] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const secondInputRef = useRef(null);
  const focusSecondInput = () => {
    if (secondInputRef.current) {
      secondInputRef.current.focus();
    }
  };

  // STEP 2
  const [secondNum, setSecondNum] = useState("");
  const thirdInputRef = useRef(null);
  const focusThirdInput = () => {
    if (thirdInputRef.current) {
      thirdInputRef.current.focus();
    }
  };

  // STEP 3
  const [thirdNum, setThirdNum] = useState("");
  const [disabledFourth, setDisabledFourth] = useState(true);
  const fourthInputRef = useRef(null);
  const focusFourthInput = () => {
    if (fourthInputRef.current) {
      fourthInputRef.current.focus();
      console.log("focus4th");
    }
  };
  const firstInputRef = useRef(null);
  //LAST STEP
  const [fourthNum, setFourthNum] = useState("");
  const [fifthNum, setFifthNum] = useState("");

  return (
    <div className="h-screen w-full flex flex-col items-center font-custom-two font-bold gap-4  text-white">
      <FirstInput
        firstNum={firstNum}
        setFirstNum={setFirstNum}
        setShowResult={setShowResult}
        setIsLoading={setIsLoading}
        focusSecondInput={focusSecondInput}
        style={style}
        disabledStyle={disabledStyle}
        leftArrStyle={leftArrStyle}
        rightArrStyle={rightArrStyle}
        inputRef={firstInputRef}
      />
      <SecondInput
        inputRef={secondInputRef}
        firstNum={firstNum}
        secondNum={secondNum}
        setSecondNum={setSecondNum}
        setIsLoading={setIsLoading}
        focusThirdInput={focusThirdInput}
        setThirdNum={setThirdNum}
        focusFourthInput={focusFourthInput}
        style={style}
        disabledStyle={disabledStyle}
        leftArrStyle={leftArrStyle}
        rightArrStyle={rightArrStyle}
      />
      <ThirdInput
        thirdNum={thirdNum}
        inputRef={thirdInputRef}
        style={style}
        disabledStyle={disabledStyle}
        focusFourthInput={focusFourthInput}
        setDisabledFourth={setDisabledFourth}
      />
      <FourthInput
        inputRef={fourthInputRef}
        fourthNum={fourthNum}
        setFourthNum={setFourthNum}
        setIsLoading={setIsLoading}
        setFifthNum={setFifthNum}
        style={style}
        disabledStyle={disabledStyle}
        leftArrStyle={leftArrStyle}
        rightArrStyle={rightArrStyle}
        thirdNum={thirdNum}
        disabledFourth={disabledFourth}
        setDisabledFourth={setDisabledFourth}
      />
      <FifthInput
        fifthNum={fifthNum}
        style={style}
        disabledStyle={disabledStyle}
      />
      <FinalSum
        firstNum={firstNum}
        showResult={showResult}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Inputs;
