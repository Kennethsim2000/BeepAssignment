import React, { useState } from "react";
import axios from "axios";
import { NextPage } from "next";
import Form from "../components/Form";
import Intro from "~/components/Intro";
import RegisterTutor from "~/components/RegisterTutor";

const Register: NextPage = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [school, setSchool] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [dob, setDOB] = useState<string>("");
  const [number, setNumber] = useState<number>(0);
  const [tutorDone, setTutorDone] = useState<Boolean>(false);
  return (
    <div className="w-screen min-h-screen bg-customBg flex flex-col items-center justify-center">
      {!tutorDone && (
        <div className="flex gap-3">
          {/* Content for the first div */}
          <Intro />
          <Form
            name={name}
            password={password}
            email={email}
            dob={dob}
            number={number}
            school={school}
            gender={gender}
            setName={setName}
            setPassword={setPassword}
            setEmail={setEmail}
            setGender={setGender}
            setDOB={setDOB}
            setNumber={setNumber}
            setTutorDone={setTutorDone}
            setSchool={setSchool}
          />
        </div>
      )}

      {tutorDone && (
        <div className="w-full flex items-center justify-center">
          <RegisterTutor
            name={name}
            password={password}
            email={email}
            dob={dob}
            number={number}
            gender={gender}
          />
        </div>
      )}
    </div>
  );
};
export default Register;
