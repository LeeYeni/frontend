"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react"
import { useFileStore } from "../store/useFileStore";

export default function LoadingPage() {
    const router = useRouter();
    const { file } = useFileStore();

    useEffect(() => {
        async function fetchWords() {
            console.log("시작")
            if (!file) return;
            console.log("파일" + file)

            const formData = new FormData();
            formData.append("image", file);

            const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

            const response = await fetch(`${baseUrl}/words`, {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            console.log(data)

            localStorage.setItem("words", JSON.stringify(data));

            router.push("/study");
        }

        fetchWords();
    }, [file, router]);


    return (
      <div className="flex flex-col items-center justify-center leading-none">
        <div className="whitespace-pre-wrap font-mono text-yellow-300 animate-pulse">★</div>

        <div className="text-green-700">#</div>
        <div className="text-green-700">
          #
          <span className="text-rose-700 animate-pulse [animation-delay:-0.7s]">#</span>
          #
        </div>
        <div className="text-green-700">
          ###
          <span className="text-orange-300 animate-pulse [animation-delay:-1.3s]">#</span>
          #
        </div>
        <div className="text-green-700">
          #
          <span className="text-sky-300 animate-pulse [animation-delay:-0.3s]">#</span>
          #####
        </div>
        <div className="text-green-700">#########</div>

        <div className="text-amber-900">|||</div>
        <div className="text-amber-900">|||</div>

        <div className="mt-7 flex items-center text-green-700 font-bold tracking-widest">
          LOADING
          <span className="text-rose-500 animate-bounce [animation-delay:-0.3s]">.</span>
          <span className="text-orange-500 animate-bounce [animation-delay:-0.15s]">.</span>
          <span className="text-yellow-500 animate-bounce">.</span>
        </div>
      </div>
    )
}