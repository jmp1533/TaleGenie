export async function generateImage(prompt: string): Promise<string> {
    try {
        const response = await fetch(
            "https://router.huggingface.co/hf-inference/models/stabilityai/stable-diffusion-3-medium-diffusers",
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${process.env.HF_API_KEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ inputs: prompt }),
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            console.error("❌ HuggingFace 응답 실패:", errorText);
            return "/images/fallback.png";
        }

        const arrayBuffer = await response.arrayBuffer();
        const base64 = Buffer.from(arrayBuffer).toString("base64");
        return `data:image/png;base64,${base64}`;
    } catch (error) {
        console.error("❌ 예외 발생:", error);
        return "/images/fallback.png";
    }
}
