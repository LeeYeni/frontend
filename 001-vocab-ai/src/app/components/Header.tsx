"use client";

import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();

    return (
        <header className="border-b bg-[#FAFAFA] border-gray-500">
            {/* flex: 좌우로 배치 */}
            {/* items-center: 세로축에서 중앙 정렬 */}
            {/* justify-between: 가로축에서 양쪽 끝으로 배치 */}
            <div className="flex items-center justify-between p-3 sm:p-4 md:p-5">
                {/* 로고/서비스명 */}
                <a href="/" className="font-semibold text-lg sm:text-xl md:text-2xl text-gray-800 px-1 select-none racking-tight"
                >
                    영어 단어장
                </a>

                {/* 우측 메뉴 */}
                <nav>
                </nav>
            </div>
        </header>
    )
}