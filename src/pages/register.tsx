import React, { useState } from "react";
import axios from "axios";
import { NextPage } from "next";
import TagInput from "react-tag-input";
import { RxCross1 } from "react-icons/rx";
import Form from "../components/Form";
import Intro from "~/components/Intro";

const Register: NextPage = () => {
  return (
    <div className="w-screen h-screen bg-neutral-400 flex flex-col items-center justify-center">
      <div className="flex gap-3">
        <Intro />
        <Form />
      </div>
    </div>
  );
};
export default Register;
