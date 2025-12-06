"use client"

interface Props {
    word: string,
    meanings: string,
    etymology: string,
    explanation: string
}

export default function StudyContainer({
    word, meanings, etymology, explanation
}: Props) {
    return (
        <div className="p-8 space-y-8">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold space-y-2 inline-block reactive">
                <div>
                  {word}
                </div>
                <div className="bg-rose-500 h-1 rounded-full"></div>
            </div>
            <div className="py-4 flex flex-col space-y-4">
              <div>
                <div className="font-semibold text-rose-700">뜻</div>
                {meanings}
              </div>
              {etymology && (
                <div>
                  <div className="font-semibold text-rose-700">어원</div>
                  <div>{etymology}</div>
                </div>
              )}
              {explanation && (
                <div>
                  <div className="font-semibold text-rose-700">어원 풀이</div>
                  {explanation}
                </div>
              )}
            </div>
        </div>
    )
}