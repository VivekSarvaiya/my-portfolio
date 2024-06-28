import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { NavigationBar } from '@/components/custom/nav-bar';
import Link from 'next/link';
import { GeistSans } from 'geist/font/sans';
import { HeroHighlight } from '@/components/ui/hero-highlight';

export const metadata: Metadata = {
    title: 'Vivek Sarviaya',
    description: 'I plan, design, build, test and deploy things on web. With the help of coffee of course.',
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={GeistSans.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <HeroHighlight>
                        <NavigationBar />
                        <main className="container mx-auto">{children}</main>
                        <footer className="container mx-auto py-4">
                            <Link href="https://github.com/VivekSarvaiya" target="_blank">
                                <p className="text-center text-sm text-muted-foreground hover:text-white transition-all">
                                    © Designed & Built by Vivek Sarvaiya · 2024
                                </p>
                            </Link>
                        </footer>
                    </HeroHighlight>
                </ThemeProvider>
            </body>
        </html>
    );
}
