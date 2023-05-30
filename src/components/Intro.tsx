import { Roboto } from "next/font/google";

const Intro: React.FC = () => {
  return (
    <div className="md:w-96 bg-customIntro md:h-120 px-6 py-4 flex flex-col justify-center items-center">
      <h1 className="text-3xl italic text-white font-roboto mb-12">
        TutorUp: swipe your way to academic success
      </h1>

      <p className="italic text-white font-roboto text-xl ">
        Swipe, Learn, Succeed: Your perfect tutoring match awaits
      </p>
    </div>
  );
};

export default Intro;
