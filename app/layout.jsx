// app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'My Security Quiz',
  description: 'セキュリティクイズアプリ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="bg-gray-100 text-gray-900">
        <div className="min-h-screen flex flex-col items-center">
          <header className="w-full bg-blue-600 text-white py-4 shadow-md">
            <h1 className="text-center text-xl font-bold">🔐 セキュリティクイズ</h1>
          </header>
          <main className="flex-1 w-full max-w-2xl p-6">
            {children}
          </main>
          <footer className="w-full text-center text-xs text-gray-500 py-4">
            © 2025 セキュリティ学習Bot
          </footer>
        </div>
      </body>
    </html>
  );
}
