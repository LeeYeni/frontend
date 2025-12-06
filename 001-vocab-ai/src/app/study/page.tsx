"use client";

import StudyContainer from "../components/StudyContainer";
import { useState, useEffect } from "react"

export default function StudyPage() {
    const [words, setWords] = useState<any[]>([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const wordsString = localStorage.getItem("words");
      if (wordsString) {
        setWords(JSON.parse(wordsString));
      }
    }, []);

    const current = words[index];

    if (!current) {
      return (
        <main className="w-full h-full flex justify-center items-center">
          <div className="text-lg text-gray-500">단어를 불러오는 중...</div>
        </main>
      );
    }

    return (
        <main className="flex flex-row space-x-2 sm:space-x-4 md:space-x-8 justify-center items-center w-full h-full py-8">
            <button
              onClick={() => {if (index > 0) setIndex(index - 1);}}
              className="h-full"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                className="size-6 text-rose-600 hover:text-rose-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>

            </button>
          <div className="flex justify-start px-4 sm:px-8 md:px-12 text-justify shadow rounded-2xl w-full h-full">
              <StudyContainer
                word={words[index].word}
                meanings={words[index].meanings}
                etymology={words[index].root_components}
                explanation={words[index].root_story}
              />
          </div>
          <button
            onClick={() => {if (index < words.length - 1) setIndex(index + 1);}}
            className="h-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            className="size-6 text-rose-600 hover:text-rose-700">
             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
           </svg>

          </button>
        </main>
    )
}