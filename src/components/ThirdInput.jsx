import { useEffect, useLayoutEffect } from "react";

const ThirdInput = ({
  inputRef,
  thirdNum,
  style,
  focusFourthInput,
  disabledStyle,
  setDisabledFourth,
}) => {
  useEffect(() => {
    console.log("asdasd");
    if (thirdNum) {
      setDisabledFourth(false);
      focusFourthInput();
    }
  }, [thirdNum, focusFourthInput, setDisabledFourth]);
  return (
    <div className="flex w-1/2 justify-center  h-20">
      <input
        value={thirdNum}
        ref={inputRef}
        type="number"
        className={style + disabledStyle}
        disabled={thirdNum ? true : false}
      />
    </div>
  );
};

export default ThirdInput;
