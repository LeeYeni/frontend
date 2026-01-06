import ActionButton from "@/components/ActionButton";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <ActionButton
        label="1분 자기소개 영상 보기 →"
        href="https://yeni-lab.org"
      />

      <ActionButton
        label="노션 이력서 보기 →"
        href="https://yeni-lab.org"
      />

      <ActionButton
        label="챗봇에게 물어보기 →"
        href="/chatbot"
      />
    </div>
  )
}