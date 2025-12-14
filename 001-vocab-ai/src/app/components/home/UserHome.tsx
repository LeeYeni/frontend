"use client";

import { useRouter } from "next/navigation";
import { useFileStore } from "@/stores/useFileStore";

export default function Home() {
  const router = useRouter();
  const { file, setFile } = useFileStore();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // ?. 있는지 확인만.
    // ?? 있는지 확인. 없으면 다른 값으로 대체.
    setFile(e.target.files ?.[0] ?? null);
  };

  return (
    // function () {
    //     return router.push("/study")
    // }
    <div className="flex flex-col justify-center items-center space-y-8 py-12 sm:py-16 md:py-20">
      <label
        htmlFor="fileInput"
        className={`bg-gray-100 px-16 py-8 flex flex-col justify-center items-center space-y-4 rounded-2xl border-2 border-dashed
          ${file
          ?"border-[#fd3c3c] transition"
          :"border-gray-300 transition"
        }`}
      >
        {/* 숨겨진 input */}
      <input
        id="fileInput"
        type="file"
        className="hidden"
        accept=".png, .jpg"
        onChange={handleFileChange}
      />
      <div
        className={`p-4 rounded-full
        ${file
        ? "bg-rose-200 hover:bg-rose-300 cursor-pointer transition"
        : "bg-gray-200 hover:bg-gray-300 cursor-pointer transition"
        }`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
        className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
      </div>

      <div className="text-gray-500">
        {file ? "파일이 업로드되었습니다." : "PNG 또는 JPG 파일 업로드"}
      </div>
      </label>

      <div className="flex flex-row space-x-8">
        <button
          className={`px-8 py-4 font-bold text-xl rounded-lg shadow-lg transition
          ${file
            ? "bg-[#fd3c3c] text-white hover:bg-rose-600 cursor-pointer"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          onClick={() => {
            if (!file) {
              alert("사진을 업로드해주세요!")
              return;
            }
            router.push("/loading");
          }}
        >
          학습하기
        </button>
      </div>
    </div>
  );
}