import { useState } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

const FirstInput = ({
  setFirstNum,
  setShowResult,
  setIsLoading,
  focusSecondInput,
  firstNum,
  style,
  disabledStyle,
  leftArrStyle,
  rightArrStyle,
  firstInputRef,
}) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [userTyped, setUserTyped] = useState(false);
  const handleFirstNum = (e) => {
    let value = e.target.value;
    value = value.slice(0, 5);
    setFirstNum(value);
    if (value.length === 5) {
      if (!/^[1-8]\d*(\d)(?!\1)\d{2}$/.test(value)) {
        alert("Please enter a valid number");
        setFirstNum("");
        setUserTyped(false);

        return;
      } else {
        setIsLoading(true);
        setTimeout(() => {
          setUserTyped(true);
          setShowResult(true);
          setIsLoading(false);
          setIsDisabled(true);
          focusSecondInput();
        }, 2000);
      }
    }
  };
  return (
    <div className="flex w-1/2 justify-center h-20">
      <HiArrowNarrowRight
        color={rightArrStyle.color}
        size={rightArrStyle.size}
        className={`${rightArrStyle.class} ${isDisabled ? "hidden" : ""}`}
      />
      <input
        ref={firstInputRef}
        autoFocus
        value={firstNum}
        type="number"
        className={!userTyped ? style : style + disabledStyle}
        maxLength={5}
        onChange={(e) => handleFirstNum(e)}
        disabled={isDisabled}
      />
      <HiArrowNarrowLeft
        size={leftArrStyle.size}
        color={leftArrStyle.color}
        className={`${leftArrStyle.class} ${isDisabled ? "hidden" : ""}`}
      />
    </div>
  );
};

export default FirstInput;
