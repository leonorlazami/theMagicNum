import React from "react";

const FifthInput = ({ fifthNum, style, disabledStyle }) => {
  return (
    <div className="flex w-1/2 h-20 justify-center ">
      <input
        readOnly
        value={fifthNum}
        disabled={fifthNum ? true : false}
        type="number"
        className={style + disabledStyle}
      />
    </div>
  );
};

export default FifthInput;
