import './globals.css'

export const metadata = {
  title: 'セキュリティクイズ',
  description: 'クイズで学べるセキュリティ学習Bot',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
