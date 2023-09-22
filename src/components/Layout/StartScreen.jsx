import React from "react";

const StartScreen = ({ toggleFullScreen }) => {
  return (
    <div className="w-screen h-auto flex items-center justify-center flex-col font-bold font-custom-one mt-20 md:text-4xl ">
      <div className="bg-blue-green h-1/2 md:h-[30rem] w-auto md:w-[80%] flex flex-col shadow shadow-white">
        <div className="flex px-4 py-4 font-bold flex-col">
          <h1 className="text-md">
            Welcome to the{" "}
            <span className="text-custom-yellow text-md underline">
              Magic Mumber Game!
            </span>
          </h1>
          <h2>Follow these instructions to play:</h2>

          <ol className="font-custom-two mt-2 list-decimal px-2 font-bold text-sm md:text-3xl md:mt-14 md:px-10">
            <li className="">
              Enter a five-digit number starting with a digit between 1 and 8.
              The other four digits can be any number, but they can&apos;t be
              the same as each other.
            </li>
            <li>
              The program will magically calculate the sum of the next numbers
              you enter.
            </li>
            <li>Enter the next number.</li>
            <li>Repeat steps 3 and 4 for a certain number of iterations.</li>
            <li>Enjoy the game and see how the numbers unfold!</li>
          </ol>
          <div className="flex justify-center">
            <button
              onClick={() => toggleFullScreen((prev) => !prev)}
              className="mt-4 border border-double border-custom-yellow w-20 text-white hover:bg-custom-yellow transition-all rounded-xl text-md md:w-[10rem] md:mt-10"
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
