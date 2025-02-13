import dynamic from "next/dynamic"
import { Suspense } from "react"

const CryptoDashboard = dynamic(() => import("./crypto-dashboard"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
})

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CryptoDashboard />
    </Suspense>
  )
}

