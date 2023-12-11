"use client";

import { useState } from "react";

const Input = () => {
  const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateAge = (e) => {
    e.preventDefault();
    const dob = document.getElementById("dob") as HTMLInputElement;
    const birthDate = new Date(dob.value);
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
    const minutes = ageDate.getUTCMinutes();
    const seconds = ageDate.getUTCSeconds();

    setAge({
      years,
      months,
      days,
      minutes,
      seconds,
    });
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <label htmlFor="dob">Enter DOB</label>
      <input type="date" name="dob" id="dob" />
      <button
        type="submit"
        className="py-1 px-3 rounded bg-blue-400"
        onClick={(e) => {
          calculateAge(e);
        }}
      >
        Submit
      </button>
      <p className="">
        Age is {age.years} years, {age.months} months, {age.days} days,{" "}
        {age.minutes} minutes, and {age.seconds} seconds.
      </p>
    </div>
  );
};

export default Input;
