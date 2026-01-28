import './globals.css'
import SmartChat from '../components/ui/SmartChat'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <head>
        <title>Goyo Tech - 可擴展 AI 解決方案</title>
        <meta name="description" content="專注營運痛點、提供有效率、自動化的落地服務方案" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <SmartChat />
      </body>
    </html>
  )
}