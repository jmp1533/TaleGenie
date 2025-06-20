import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

export async function generateStoryFromKeywords(keywords: string) {
    const prompt = `
    다음 키워드를 기반으로 1세~5세 유아용 동화를 만들어주세요.
    
    - 동화는 총 5개의 장면으로 구성합니다. (1장 ~ 3장)
    - 각 장면은 3~5문장으로 구성하며, 서사적 흐름이 자연스럽게 이어지도록 작성해주세요.
    - 이야기 전체에 기승전결이 있도록 구성해주세요.
    - 유아가 이해하기 쉬운 어휘와 짧고 부드러운 문장을 사용해주세요.
    - 각 장면에는 이미지로 표현하기 좋은 묘사도 함께 넣어주세요.
    - 결과는 마크다운 없이 순수 JSON 형식으로만 출력해주세요.
    - 아래 형식을 그대로 따라 주세요:
    {
      "title": "동화 제목",
      "slides": [
        {
          "text": "...",
          "imagePrompt": "..."
        },
        ...
      ]
    }

    키워드: ${keywords}
    `;
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(prompt);
    const cleaned = result.response.text()
        .replace(/```json\s*([\s\S]*?)\s*```/, '$1')
        .trim();

    return JSON.parse(cleaned);
}