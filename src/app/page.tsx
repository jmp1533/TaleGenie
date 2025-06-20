'use client';

import { useState } from 'react';
import KeywordInput from '@/components/KeywordInput';
import SuggestedKeywords from '@/components/SuggestedKeywords';
import StoryBook from '@/components/StoryBook';

interface Slide {
    text: string;
    imageUrl: string;
}

export default function HomePage() {
    const [slides, setSlides] = useState<Slide[] | null>(null);
    const [title, setTitle] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    return (
        <main className="min-h-screen bg-yellow-50 px-4 py-10 text-center">
            <h1 className="text-4xl font-bold text-indigo-900">AI Fairy Tale Generator</h1>
            <p className="mt-2 text-gray-600">키워드만 입력하면 AI가 동화를 만들어줘요!</p>

            <KeywordInput
                loading={loading}
                onStoryGenerated={(data) => {
                    setSlides(data.slides);
                    setTitle(data.title);
                    setLoading(false);
                }}
                onStartLoading={() => {
                    setSlides(null);
                    setTitle(null);
                    setLoading(true);
                }}
            />

            <SuggestedKeywords />

            {loading ? (
                <div className="mt-10 text-indigo-700 text-lg animate-pulse">
                    <p>🪄 동화를 만들고 있어요...</p>
                    <p className="mt-2 text-sm text-gray-500">AI가 상상력을 발휘하고 있어요!</p>
                </div>
            ) : slides ? (
                <div className="mt-10">
                    <p className="mb-4 text-2xl font-bold text-indigo-800">{title}</p>
                    <StoryBook slides={slides} />
                </div>
            ) : null}
        </main>
    );
}
