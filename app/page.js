"use client";
import axios from "axios";
export default function Home() {
  return (
    <div>
      <h1
        onClick={async () =>
          await axios.post("/api/test/getTest", { content: "Holaa" })
        }
      >
        Click
      </h1>
    </div>
  );
}
