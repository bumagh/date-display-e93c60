"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setDate(now.toLocaleDateString("zh-CN", { year: "numeric", month: "long", day: "numeric", weekday: "long" }));
      setTime(now.toLocaleTimeString("zh-CN", { hour12: false }));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-400 to-blue-600">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 text-center shadow-2xl">
        <p className="text-white/70 text-lg mb-2">今天是</p>
        <h1 className="text-white text-3xl font-bold mb-6">{date}</h1>
        <div className="text-white text-7xl font-mono font-bold tracking-wider">{time}</div>
        <p className="text-white/50 text-xs mt-8">Auto-deployed by AI Pipeline</p>
      </div>
    </div>
  );
}
