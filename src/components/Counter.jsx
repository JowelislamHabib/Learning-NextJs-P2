"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("Counter value", count);
  return (
    <div>
      <h3 className="text-5xl">Counter: {count}</h3>
      <button
        onClick={() => setCount(count + 1)}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
