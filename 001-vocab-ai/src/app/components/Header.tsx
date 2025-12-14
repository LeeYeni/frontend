"use client";

import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();

    return (
        <header className="sticky top-0 z-50 bg-[#fd3c3c] text-[#FAFAFA] border-gray-200">
            {/* flex: 좌우로 배치 */}
            {/* items-center: 세로축에서 중앙 정렬 */}
            {/* justify-between: 가로축에서 양쪽 끝으로 배치 */}
            <div className="flex items-center justify-between p-3 sm:p-4 md:p-5">
                {/* 로고/서비스명 */}
                <a href="/" className="flex flex-row gap-2 font-semibold text-lg sm:text-xl md:text-2xl px-1 select-none racking-tight"
                >
                    <span className=".jua-regular">줍줍</span>
                </a>

                {/* 우측 메뉴 */}
                <nav>
                    <a href="/">로그인</a>
                </nav>
            </div>
        </header>
    )
}