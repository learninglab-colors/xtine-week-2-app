'use client'

import React, { useState } from "react";
import TitleOfMySite from "@/components/TitleOfMySite";
import Question1 from "@/components/Question1";
import NameInput from "@/components/NameInput";

export default function Home() {
  const [userName, setUserName] = useState<string | null>(null);
  
  const handleNameSubmit = (name: string) => {
    setUserName(name);
    console.log(`Starting quiz for ${name}`);
  };

  return (
    <div className="md:justify-items-center">
      <h1 className="font-black text-pink-600 text-7xl"><TitleOfMySite /></h1>
      <h2 className="font-black text-pink-600 text-3xl"><Question1 /></h2>
      <NameInput onNameSubmit={handleNameSubmit} />
      {userName && <p>hello, {userName}!!!!!!!!</p>}
    </div>
  );
}