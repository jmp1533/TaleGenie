const keywords = ['공룡', '눈 오는 날', '잃어버린 인형'];

export default function SuggestedKeywords() {
    return (
        <div className="mt-4 flex flex-wrap justify-center gap-2">
            {keywords.map((keyword) => (
                <button
                    key={keyword}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm hover:bg-gray-200"
                >
                    {keyword}
                </button>
            ))}
        </div>
    );
}
