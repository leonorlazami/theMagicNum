import { useEffect, useState } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

const SecondInput = ({
  inputRef,
  setSecondNum,
  secondNum,
  setIsLoading,
  focusFourthInput,
  setThirdNum,
  style,
  disabledStyle,
  leftArrStyle,
  rightArrStyle,
  firstNum,
  setDisabled,
}) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [userTyped, setUserTyped] = useState(false);

  useEffect(() => {
    if (firstNum.length === 5) {
      setIsDisabled(false);
    }
  }, [firstNum]);

  const handleSecondInput = (e) => {
    let value = e.target.value;
    value = value.slice(0, 5);
    setSecondNum(value);
    if (value.length === 5) {
      if (!/^[1-8]\d*(\d)(?!\1)\d{2}$/.test(value)) {
        setSecondNum(" ");
        setUserTyped(false);
        alert("Please enter a valid number");

        return;
      } else {
        let num = 99999 - parseInt(value);
        setIsLoading(true);
        setTimeout(() => {
          setUserTyped(true);
          setIsLoading(false);
          setIsDisabled(true);

          setThirdNum(num);
        }, 2000);
      }
    }
  };
  return (
    <div className="flex w-1/2 justify-center  h-20">
      <HiArrowNarrowRight
        size={rightArrStyle.size}
        className={`${rightArrStyle.class} ${isDisabled ? "hidden" : ""}`}
        color={rightArrStyle.color}
      />
      <input
        disabled={isDisabled}
        value={secondNum}
        ref={inputRef}
        onChange={(e) => handleSecondInput(e)}
        type="number"
        className={!userTyped ? style : style + disabledStyle}
      />
      <HiArrowNarrowLeft
        size={leftArrStyle.size}
        className={`${leftArrStyle.class} ${isDisabled ? "hidden" : ""}`}
        color={leftArrStyle.color}
      />
    </div>
  );
};

export default SecondInput;
