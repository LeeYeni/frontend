interface ChatBubbleProps {
    content: string
}

export default function ChatBubble({ content }: ChatBubbleProps) {
    return (
        <div className="px-4 py-2 bg-[#15d3fe5b] text-black rounded-tr-none rounded-2xl">
            {content}
        </div>
    )
}