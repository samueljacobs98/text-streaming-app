"use client";

import { useEffect, useState } from "react";

const Stream = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:3001/stream");

    eventSource.onmessage = (event) => {
      setText((text) => text + " " + event.data);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <h1>Text Streamer</h1>
      <p>Current Time: {text}</p>
    </div>
  );
};

export default Stream;
