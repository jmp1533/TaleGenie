'use client';

import { useState } from 'react';

interface Props {
    onStoryGenerated: (data: { title: string; slides: { text: string; imageUrl: string }[] }) => void;
    onStartLoading: () => void;
    loading: boolean;
}

export default function KeywordInput({ onStoryGenerated, onStartLoading, loading }: Props) {
    const [keywords, setKeywords] = useState('');

    const handleSubmit = async () => {
        if (!keywords.trim() || loading) return;

        onStartLoading();

        try {
            const res = await fetch('/api/story', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ keywords }),
            });

            const data = await res.json();
            onStoryGenerated(data);
        } catch (error) {
            console.error('동화 생성 중 오류:', error);
        }
    };

    return (
        <div className="mt-6 flex justify-center gap-2">
            <input
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="예: 용감한 고양이, 우주 여행"
                disabled={loading}
                className="w-full max-w-md p-3 border rounded-full shadow-sm"
            />
            <button
                onClick={handleSubmit}
                disabled={loading}
                className={`px-4 py-2 rounded-full text-white transition ${
                    loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-500 hover:bg-indigo-600'
                }`}
            >
                {loading ? '동화 생성 중...' : '동화 만들기'}
            </button>
        </div>
    );
}
