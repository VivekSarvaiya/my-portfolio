import { Reveal } from "./custom/reveal";

export default function About() {
    return (
        <section className="flex flex-col items-start justify-start gap-4 sm:py-32 py-16">
            <h2 id="about" className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                About Me
            </h2>
            <Reveal
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
            >
                <p className="leading-7">
                    I'm a person who loves making stuff, especially things you can see and interact with. Creating interactive, user-friendly applications is my passion, and I find great joy in seeing my ideas come to life through code.
                    <br />
                    <br />
                    I've successfully earned my Bachelor's degree in Computer Applications from Veer Narmad South Gujarat University. Along the way, I had the privilege of contributing to software development for a startups in Surat. These experiences have provided me with a solid foundation in software developement principles and the ability to adapt to various development environments and team dynamics. Not to mention the countless hours spent on personal projects and competitions, where I honed my problem-solving skills and learned to thrive under pressure.
                    <br />
                    <br />
                    Presently, I am pursuing Master's degree in Computer Applications and my primary focus revolves around mastering the art of building high-quality and scalable software applications. I am dedicated to continuously refining my skills in both frontend and backend development. I have a particular interest in technologies such as JavaScript, React, Node.js, and databases like MySQL and MongoDB. As the saying goes, "Once you go fullstack, you never go back." I believe that understanding the full stack of an application enables me to create more cohesive and efficient solutions.
                    <br />
                    <br />
                    When I'm not coding, you'll find me in the mountains.
                </p>
            </Reveal>
        </section>
    );
}