import React, { useState } from "react";
import axios from "axios";
import { NextPage } from "next";
import Form from "../components/Form";
import Intro from "~/components/Intro";
import Register2 from "~/components/Register2";

const Register: NextPage = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
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
            setName={setName}
            setPassword={setPassword}
            setEmail={setEmail}
            setDOB={setDOB}
            setNumber={setNumber}
            setTutorDone={setTutorDone}
          />
        </div>
      )}

      {tutorDone && (
        <div className="w-full flex items-center justify-center">
          <Register2 />
        </div>
      )}
    </div>
  );
};
export default Register;
