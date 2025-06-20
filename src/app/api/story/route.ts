import { NextResponse } from 'next/server';
import { generateStoryFromKeywords } from '@/lib/gemini';

export async function POST(req: Request) {
    const { keywords } = await req.json();

    const { title, slides } = await generateStoryFromKeywords(keywords) as {
        title: string;
        slides: { text: string; imagePrompt: string }[];
    };

    const enrichedSlides = await Promise.all(
        slides.map(async ({ text, imagePrompt }) => {
            // const imageUrl = await generateImage(`동화책 스타일 삽화: ${imagePrompt}`);
            const imageUrl = "/images/fallback.png";
            return { text, imageUrl };
        })
    );

    return NextResponse.json({ title, slides: enrichedSlides });
}
