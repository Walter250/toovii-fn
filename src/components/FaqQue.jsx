import questions from "../assets/questions";
import QuestionCard from "./QuestionCard";

export default function FaqQuestions() {
  const questionDivs = questions.map((question, ind) => (
    <QuestionCard
      key={ind}
      question={question.question}
      answer={question.answer}
    />
  ));
  return (
    <article>
      <section className="flex items-end">
        <p className="font-bold text-4xl">{"FAQ's"}</p>
        <div className="w-1/4 h-px bg-mainYellow"></div>
      </section>
      <section className="flex justify-center flex-wrap gap-8 md:flex-col mt-12">
        {questionDivs}
      </section>
    </article>
  );
}
