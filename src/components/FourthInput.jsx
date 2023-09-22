import { useEffect, useState } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
const FourthInput = ({
  inputRef,
  fourthNum,
  setFourthNum,
  setIsLoading,
  setFifthNum,
  style,
  disabledStyle,
  leftArrStyle,
  rightArrStyle,
  thirdNum,
  disabledFourth,
  setDisabledFourth,
}) => {
  useEffect(() => {
    if (fourthNum.length === 5) {
      setDisabledFourth(true);
    }
  }, [[fourthNum]]);

  const [userTyped, setUserTyped] = useState(false);
  console.log(disabledFourth);
  const handleFourthInput = (e) => {
    let value = e.target.value.slice(0, 5);
    setFourthNum(value);

    if (value.length === 5) {
      if (!/^[1-8]\d*(\d)(?!\1)\d{2}$/.test(value)) {
        setFourthNum("");
        setUserTyped(false);
        alert("Please enter a valid number");
        return;
      } else {
        let num = 99999 - parseInt(value);
        setIsLoading(true);
        setTimeout(() => {
          setUserTyped(true);
          setIsLoading(false);
          setDisabledFourth(true);
          setFifthNum(num);
        }, 1500);
      }
    }
  };
  return (
    <div className="flex w-1/2 justify-center  h-20">
      <HiArrowNarrowRight
        color={rightArrStyle.color}
        size={rightArrStyle.size}
        className={`${rightArrStyle.class} ${disabledFourth ? "hidden" : ""}`}
      />
      <input
        disabled={disabledFourth}
        onChange={(e) => handleFourthInput(e)}
        ref={inputRef}
        type="number"
        className={!userTyped ? style : style + disabledStyle}
        value={fourthNum}
        autoFocus={thirdNum}
      />
      <HiArrowNarrowLeft
        size={leftArrStyle.size}
        color={leftArrStyle.color}
        className={`${leftArrStyle.class} ${disabledFourth ? "hidden" : ""}`}
      />
    </div>
  );
};

export default FourthInput;
