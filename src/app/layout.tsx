import '../styles/globals.css';
import '../styles/style.css';

export const metadata = {
    title: 'AI Fairy Tale Generator',
    description: 'AI가 만드는 나만의 그림 동화책',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body className="bg-yellow-50 text-slate-800">
                {children}
            </body>
        </html>
    );
}
