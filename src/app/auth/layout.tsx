import {Inter} from "next/font/google";

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>
      <div style={{ height: '100ch', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {children}
      </div>
    </body>
    </html>
  )
}