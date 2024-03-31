import { Footer } from '@/components/landing/Footer'

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex flex-grow flex-col px-0">
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  )
}
