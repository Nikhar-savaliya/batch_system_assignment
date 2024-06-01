import React from "react";

import data from "@/data.json";

const Faqs = () => {
  const faqArray = data.faqs;

  return (
    <section className="w-full h-full mt-16 p-8" id="faqs">
      <div className="col-span-1 flex flex-col justify-center mb-8">
        <p className="uppercase tracking-widest text-brand-red">FAQ</p>
        <h1 className="text-4xl md:text-5xl max-w-lg font-bold mt-1 capitalize">
          Frequently asked questions
        </h1>
      </div>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqArray.map((faq, index) => {
          return <FaqComponent key={index} {...faq} index={index} />;
        })}
      </div>
    </section>
  );
};

const FaqComponent = ({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) => {
  const indexForBackgroundColor = [1, 2, 5, 6, 9, 10];
  return (
    <div
      className={`rounded-lg md:p-8 my-5 mr-5 ${
        indexForBackgroundColor.includes(index)
          ? ""
          : "md:bg-brand-red md:text-background"
      }`}
    >
      <h2 className="text-xl font-semibold mb-2">{question}</h2>
      <p
        className={`${
          indexForBackgroundColor.includes(index) ? "" : "md:text-background"
        } text-muted-foreground`}
      >
        {answer}
      </p>
    </div>
  );
};

export default Faqs;
