import { AiFillStar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import JobScope from "./JobScope";
import Image from "next/image";
import GovTech from "../../public/govtech.png";
import Role from "./Role";

interface JobProps {
  companyUrl: string;
  companyName: string;
  rating: string;
  title: string;
  role: string;
  time: string;
  focusArea: string;
  skills: string[];
}
const Job: React.FC<JobProps> = ({
  companyUrl,
  companyName,
  rating,
  title,
  role,
  time,
  focusArea,
  skills,
}) => {
  return (
    <div className="flex-col items-center  bg-white p-6 hover:cursor-pointer hover:bg-blue-100 h-full w-full">
      <div className="flex flex-row justify-between w-full">
        {/* left section */}
        <div>
          <Image src={companyUrl} width={70} height={70} alt="govtech" />
        </div>
        {/* middle section */}
        <div className="flex flex-col md:ml-4 ml-2">
          {/* company name*/}
          <div className="flex items-center ml-4 ">
            <h2 className="mr-2">{companyName}</h2>
            <p className="">{rating}</p>
            <AiFillStar className="h-4 w-4" />
          </div>
          {/* Job title */}
          <div className="ml-4">
            <h1 className="font-bold md:text-xl text-lg">{title}</h1>
            <h1 className="font-bold md:text-xl text-lg">({role})</h1>
          </div>
          {/* Job description */}
          <div className="flex items-center ml-4 justify-start">
            <h1 className="mr-2 md:text-md text-green-400 font-bold">{time}</h1>
            <CiLocationOn className="h-4 w-4" />
            <p className="mr-2 text-gray-400 font-semibold">Singapore</p>
          </div>
        </div>
        {/* right section */}
        <div>
          <Role role={focusArea} />
        </div>
      </div>
      <div className="mt-4 w-full border-t border-gray-200"></div>
      <div className="flex mt-4 gap-2">
        {skills?.map((skill, index) => (
          <JobScope key={index} job={skill} />
        ))}
      </div>
    </div>
  );
};

export default Job;
