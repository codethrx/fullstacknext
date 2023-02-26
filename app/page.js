"use client";
import axios from "axios";
export default function Home() {
  return (
    <div>
      <h1
        onClick={async () => {
          const r = await axios.gett("/api/posts/crud");
          console.log(r);
        }}
      >
        Click Me
      </h1>
    </div>
  );
}
