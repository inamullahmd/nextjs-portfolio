import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Inamullah Mohammad',
    default:
      'Inamullah Mohammad - Web developer, coder, and an aspiring data scientist',
  },
  description:
    "I'm Inamullah. Welcome to my little corner of the web! This site is like a dungeon full of my adventures in coding, design, and all things geeky, whether I&lsquo;m weaving spells with data or crafting web wonders. Take a stroll and explore the bits and bytes of my world. Got a quest for me or just want to chat? Let&lsquo;s geek out together!",
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
