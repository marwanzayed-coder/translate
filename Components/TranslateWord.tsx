import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import { Button, Container } from "react-bootstrap";

const TranslateWord = (props: any) => {
  let { lang, text } = props;
  let [translate, setTranslate]: [string, any] = useState("");
  let prompt = `Translate this into ${lang}: /n/n ${text}`;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    axios.post("/api/translate", { prompt }).then((response) => {
      setTranslate(response.data.translate);
      setIsLoading(false);
    });
  }, []);
  let [copy, setCopy]: [string, any] = useState("Copy");
  if (isLoading)
    return (
      <svg
        className="animate-spin max-h-5 max-w-5 mx-auto my-1 mx-auto my-1"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );

  return (
    <section>
      <Container>
        <h3 dir="auto" className="my-3">
          {translate}
        </h3>
        <Button
          variant="primary"
          onClick={() => {
            navigator.clipboard.writeText(translate);
            setCopy("Copied");
          }}
        >
          {copy}
        </Button>
      </Container>
    </section>
  );
};

export default TranslateWord;
