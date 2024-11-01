import './globals.css'
import Navigation from '../components/Navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-100">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
