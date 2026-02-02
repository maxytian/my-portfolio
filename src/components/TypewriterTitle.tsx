"use client"; // 必须是客户端组件
import Typewriter from "typewriter-effect";

export default function TypewriterTitle() {
  return (
    <div className="font-mono text-sm text-zinc-500 mt-2 h-6">
      <Typewriter
        options={{
          strings: [
            "Game Programmer @ Tencent",
            "C++ & Python Expert",
            "Indie Game Developer",
            "From UI to Database, Covered."
          ],
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 30,
        }}
      />
    </div>
  );
}