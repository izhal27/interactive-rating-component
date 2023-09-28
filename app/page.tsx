"use client";

import { FormEvent, useState } from "react";
import { StarSvg } from "./star-svg";
import ThankYouSvg from "./thank-you-svg";

export default function Home() {
  const [activeNumber, setActiveNumber] = useState<number>(0);
  const [choosenNumber, setchoosenNumber] = useState<number>(0);
  const numbers = [1, 2, 3, 4, 5];

  function setActive(num: number) {
    setActiveNumber(num);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setchoosenNumber(activeNumber);
  }

  const VoteComponent = () => (
    <section className="flex max-w-sm flex-col space-y-5 rounded-3xl bg-gradient-to-b from-dark-blue-gradient-from  to-dark-blue-gradient-to px-8 py-7 drop-shadow-xl">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-blue">
        <StarSvg />
      </div>
      <h1 className="text-2xl font-semibold text-white">How did we do?</h1>
      <p className="text-sm text-gray-500">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-between">
        {numbers.map((n) => (
          <p
            key={n}
            className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-sm hover:bg-orange hover:text-white font-semibold
            ${activeNumber === n
                ? "bg-medium-grey text-white"
                : "bg-dark-blue text-[#68717b]"
              }`}
            onClick={() => setActive(n)}
          >
            {n}
          </p>
        ))}
      </div>
      <form onSubmit={(e) => onSubmit(e)} className="flex flex-col">
        <button className="rounded-full bg-orange py-2 text-sm text-white hover:bg-white hover:text-orange">
          SUBMIT
        </button>
      </form>
    </section>
  );

  const ResultComponent = () => (
    <section className="flex max-w-sm flex-col items-center space-y-5 rounded-3xl bg-gradient-to-b from-dark-blue-gradient-from  to-dark-blue-gradient-to px-8 py-7 drop-shadow-xl">
      <ThankYouSvg />
      <h2 className="rounded-full bg-gray-700 px-5 py-1 text-sm font-light text-orange"> You selected {choosenNumber} out of 5</h2 >
      <h3 className="text-2xl text-white">Thank you!</h3>
      <p className="text-center text-sm text-gray-500">
        We appreciate you taking the time to give rating. If you ever need more
        support, don't hesitate to get in touch!!
      </p>
    </section >
  );

  return (
    <main className="flex h-screen items-center justify-center bg-[#141519]">
      {choosenNumber > 0 ? <ResultComponent /> : <VoteComponent />}
    </main>
  );
}
