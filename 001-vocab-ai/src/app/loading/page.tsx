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
        <div>
            Loading Page.
        </div>
    )
}