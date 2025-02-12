import './globals.css'

export const metadata = {
  title: 'Gym Market Data',
  description: 'Tableau de bord des installations sportives',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
