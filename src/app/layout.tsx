import "./globals.css"
import { Mona_Sans as FontSans } from "next/font/google"
import { Roboto_Slab as FontHeading } from "next/font/google"
import { cn } from "@/lib/utils"
import Header from "../components/header"
import Footer from "../components/footer"
import { FloatingForm } from "@/components/floating-form"
import { FloatingActionButton } from "@/components/floating-action-button"
import { Toaster } from "sonner"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontHeading = FontHeading({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata = {
  title: "Futuristic Multi-page Animated Website",
  description: "A visually stunning website with cutting-edge animations and interactive components",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, fontHeading.variable)}>

          <Header />
          <main className="relative">{children}</main>
          <Footer />
          <FloatingForm />
          <FloatingActionButton />
          <Toaster position="top-right" />
      </body>
    </html>
  )
}
