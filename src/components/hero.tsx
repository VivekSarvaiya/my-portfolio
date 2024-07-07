import Image from 'next/image';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from './ui/tooltip';
import Link from 'next/link';
import { Button } from './ui/button';
import { AtSign, Github, Instagram, Linkedin } from 'lucide-react';
import { Reveal } from './custom/reveal';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

export default function Hero() {
    const name = [{ text: 'Vivek' }, { text: 'Sarvaiya' }];

    return (
        <header
            id="hero"
            className="flex flex-col sm:flex-row h-screen w-full justify-center items-center gap-4 mt-16"
        >
            <div className="flex flex-col gap-2 w-full">
                <TypewriterEffectSmooth words={name} />
                <Reveal
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.4 },
                    }}
                >
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        Software Developer
                    </h3>
                </Reveal>
                <Reveal
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.4, delay: 0.2 },
                    }}
                >
                    <p className="leading-7">
                        I plan, design, build, test and deploy things on web. With the help of coffee of course.
                    </p>
                </Reveal>
                <div className="flex gap-4">
                    <TooltipProvider>
                        <Reveal
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.4 },
                            }}
                        >
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href="https://www.linkedin.com/in/vivek-sarvaiya-323602203/"
                                        target="_blank"
                                    >
                                        <Button variant="secondary" size="icon">
                                            <Linkedin />
                                        </Button>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>LinkedIn</p>
                                </TooltipContent>
                            </Tooltip>
                        </Reveal>
                        <Reveal
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.4, delay: 0.2 },
                            }}
                        >
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href="https://github.com/VivekSarvaiya"
                                        target="_blank"
                                    >
                                        <Button variant="secondary" size="icon">
                                            <Github />
                                        </Button>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Github</p>
                                </TooltipContent>
                            </Tooltip>
                        </Reveal>
                        <Reveal
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.4, delay: 0.4 },
                            }}
                        >
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href="mailto:sarvaiyavivek0309@gmail.com"
                                        target="_blank"
                                    >
                                        <Button variant="secondary" size="icon">
                                            <AtSign />
                                        </Button>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Email</p>
                                </TooltipContent>
                            </Tooltip>
                        </Reveal>
                        <Reveal
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.4, delay: 0.4 },
                            }}
                        >
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href="https://www.instagram.com/vikki.here_/"
                                        target="_blank"
                                    >
                                        <Button variant="secondary" size="icon">
                                            <Instagram />
                                        </Button>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Instagram</p>
                                </TooltipContent>
                            </Tooltip>
                        </Reveal>
                    </TooltipProvider>
                </div>
            </div>
            <div className="flex relative w-full h-full">
                <Reveal
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, delay: 0.4 },
                    }}
                >
                    <Image
                        src={'/assets/img/anime.png'}
                        alt="Me"
                        fill
                        style={{ objectFit: 'contain' }}
                        className="rounded-md object-cover"
                    />
                </Reveal>
            </div>
        </header>
    );
}
