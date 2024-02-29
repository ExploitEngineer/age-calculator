"use client";

import { useState, FormEvent } from "react";
import icon from "../components/icon-arrow.svg";
import Image from "next/image";

const Calculator = () => {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState({
    years: "--",
    months: "--",
    days: "--",
  });

  const calculateAge = (e: FormEvent) => {
    e.preventDefault();
    if (!dob) {
      alert("Please enter a valid date of birth");
      return;
    }
    const birthDate = new Date(dob);
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    const years = (ageDate.getUTCFullYear() - 1970).toString();
    const months = ageDate.getUTCMonth().toString();
    const days = (ageDate.getUTCDate() - 1).toString();

    setAge({
      years,
      months,
      days,
    });
  };

  return (
    <div className="w-full max-w-3xl flex flex-col gap-2 border bg-white px-6 mx-2 rounded-3xl py-8 rounded-br-[100px] overflow-hidden relative shadow-md md:shadow-xl shadow-zinc-200">
      <label className="md:text-sm px-2 text-xs text-zinc-500" htmlFor="dob">
        Enter DOB
      </label>
      <input
  className="border max-w-lg mb-4 h-10 px-3 rounded-lg border-purple-200 accent-violet-500"
  type="date"
  required
  name="dob"
  id="dob"
  value={dob}
  max={new Date().toISOString().split("T")[0]}
  onChange={(e) => setDob(e.target.value)}
/>
      <button
        title="Calculate Age"
        type="submit"
        className="py-3 hover:scale-105 active:scale-95 transition-all px-3 w-fit rounded-full bg-purple-800 absolute right-2 md:right-8 top-28 md:top-20 z-10 active:rotate-3"
        onClick={calculateAge}
      >
        <Image
          src={icon}
          alt="arrow"
          className="h-5 w-5 md:h-10 md:w-10 lg:h-16 lg:w-16"
        />
      </button>
      <div className="h-[0.5px] w-full max-w-2xl bg-zinc-300 mb-4"></div>
      <p className="text-4xl md:text-7xl font-bold tracking-tight italic">
        <span className="text-purple-600">{age.years} </span> years
      </p>
      <p className="text-4xl md:text-7xl font-bold tracking-tight italic">
        <span className="text-purple-600">{age.months} </span> months
      </p>
      <p className="text-4xl md:text-7xl font-bold tracking-tight italic">
        <span className="text-purple-600">{age.days} </span> days
      </p>
    </div>
  );
};

export default Calculator;
