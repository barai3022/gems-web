"use client"
import { useState, useEffect } from "react";

const CurrentDateTime: React.FC = () => {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    // In the browser, setInterval returns a number
    const timer: number = window.setInterval(() => {
      setNow(new Date())
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!now) return null;

  return (
    <div className="flex flex-col items-center justifycenter w-full h-full pt-2 text-white">


      <p className="text-xl">
        {now.toLocaleDateString("en-GB", {
          weekday: "long", // Monday, Tuesday...
          day: "numeric",  // 22
          month: "short",   // December
          year: "numeric", // 2025
        })}
        <span className="ps-2">
          {now.toLocaleTimeString()} </span></p>
    </div>
  );
};

export default CurrentDateTime;

