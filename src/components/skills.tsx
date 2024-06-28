import { Reveal } from './custom/reveal';

export default function Skills() {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-4 sm:py-32 py-16"
        >
            <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                Skills & Tools
            </h2>
            <p className="leading-7 text-center">
                My primary focus lies in frontend development and backend
                development. Full-stack is the way to go xD.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-start">
                {/* Languages */}
                <Reveal
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4 },
                    }}
                >
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                            Languages
                        </h3>
                        <div className="flex flex-row flex-wrap justify-center gap-4">
                            {/* JavaScript */}
                            <div className="flex flex-col items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="100"
                                    height="100"
                                    viewBox="0 0 48 48"
                                >
                                    <path
                                        fill="#f7df1e"
                                        d="M6,42V6h36v36H6z"
                                    ></path>
                                    <path
                                        fill="#000001"
                                        d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"
                                    ></path>
                                </svg>
                                <p className="text-sm text-muted-foreground">
                                    JavaScript
                                </p>
                            </div>
                            {/* TypeScript */}
                            <div className="flex flex-col items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="100"
                                    height="100"
                                    viewBox="0 0 48 48"
                                >
                                    <rect
                                        width="36"
                                        height="36"
                                        x="6"
                                        y="6"
                                        fill="#1976d2"
                                    ></rect>
                                    <polygon
                                        fill="#fff"
                                        points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
                                    ></polygon>
                                    <path
                                        fill="#fff"
                                        d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
                                    ></path>
                                </svg>
                                <p className="text-sm text-muted-foreground">
                                    TypeScript
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
                {/* Frontend */}
                <Reveal
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, delay: 0.1 },
                    }}
                >
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                            Frontend
                        </h3>
                        <div className="flex flex-row flex-wrap justify-center gap-4">
                            {/* HTML */}
                            <div className="flex flex-col items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="100"
                                    height="100"
                                    viewBox="0 0 48 48"
                                >
                                    <path
                                        fill="#E65100"
                                        d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                                    ></path>
                                    <path
                                        fill="#FF6D00"
                                        d="M24 8L24 39.9 35.2 36.7 37.7 8z"
                                    ></path>
                                    <path
                                        fill="#FFF"
                                        d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
                                    ></path>
                                    <path
                                        fill="#EEE"
                                        d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                                    ></path>
                                </svg>
                                <p className="text-sm text-muted-foreground">
                                    HTML
                                </p>
                            </div>

                            {/* CSS */}
                            <div className="flex flex-col items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="100"
                                    height="100"
                                    viewBox="0 0 100 100"
                                >
                                    <path
                                        d="M51.958,98c-0.58,0-1.16-0.078-1.724-0.232l-27.742-7.702c-2.593-0.72-4.495-3.004-4.735-5.685	l-6.179-69.304c-0.16-1.813,0.451-3.621,1.677-4.962C14.485,8.77,16.233,8,18.053,8h67.895c1.821,0,3.569,0.771,4.798,2.115	c1.225,1.339,1.837,3.147,1.677,4.959L86.236,84.37c-0.24,2.683-2.145,4.967-4.739,5.686l-27.803,7.709	C53.124,97.921,52.542,98,51.958,98z"
                                        opacity=".35"
                                    ></path>
                                    <path
                                        fill="#f2f2f2"
                                        d="M49.958,96c-0.58,0-1.16-0.078-1.724-0.232l-27.742-7.702c-2.593-0.72-4.495-3.004-4.735-5.685	L9.578,13.077c-0.16-1.813,0.451-3.621,1.677-4.962C12.485,6.77,14.233,6,16.053,6h67.895c1.821,0,3.569,0.771,4.798,2.115	c1.225,1.339,1.837,3.147,1.677,4.959L84.236,82.37c-0.24,2.683-2.145,4.967-4.739,5.686l-27.803,7.709	C51.124,95.921,50.542,96,49.958,96z"
                                    ></path>
                                    <polygon
                                        fill="#2b59a1"
                                        points="83.947,12.5 77.762,81.792 49.958,89.5 22.231,81.803 16.053,12.5"
                                    ></polygon>
                                    <path
                                        fill="#40396e"
                                        d="M49.958,91c-0.135,0-0.27-0.019-0.401-0.055L21.83,83.249c-0.602-0.167-1.037-0.689-1.093-1.312	l-6.179-69.303c-0.037-0.419,0.104-0.835,0.388-1.146C15.23,11.177,15.632,11,16.053,11h67.895c0.421,0,0.822,0.177,1.106,0.488	c0.284,0.311,0.425,0.726,0.388,1.146l-6.186,69.292c-0.056,0.622-0.491,1.145-1.094,1.312l-27.804,7.709	C50.228,90.982,50.093,91,49.958,91z M23.634,80.635l26.324,7.309l26.402-7.32L82.308,14H17.692L23.634,80.635z"
                                    ></path>
                                    <polygon
                                        fill="#2785bd"
                                        points="72.467,77.38 77.771,17.957 50,17.957 50,83.608"
                                    ></polygon>
                                    <polygon
                                        fill="#d9eeff"
                                        points="50,43.957 51,47.957 50,51.957 30.94,51.957 30.23,43.957"
                                    ></polygon>
                                    <polygon
                                        fill="#d9eeff"
                                        points="50,26.957 51,30.957 50,34.957 29.441,34.957 28.72,26.957"
                                    ></polygon>
                                    <polygon
                                        fill="#d9eeff"
                                        points="51,69.957 50,74.796 32.55,69.967 31.39,56.957 39.92,56.957 40.5,63.397 50,65.957"
                                    ></polygon>
                                    <path
                                        fill="#f2f2f2"
                                        d="M50,26.957v8h11.969l-0.807,9H50c-0.009-0.002-0.008,8-0.008,8h10.485l-1.027,11.44L50,65.957v8.84	l17.4-4.83l0.12-1.44l2-22.37l0.21-2.29l1.5-16.91H50z"
                                    ></path>
                                </svg>
                                <p className="text-sm text-muted-foreground">
                                    CSS
                                </p>
                            </div>

                            {/* React */}
                            <div className="flex flex-col items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="100"
                                    height="100"
                                    viewBox="0 0 48 48"
                                >
                                    <path
                                        fill="#80deea"
                                        d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
                                    ></path>
                                    <path
                                        fill="#80deea"
                                        d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
                                    ></path>
                                    <path
                                        fill="#80deea"
                                        d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
                                    ></path>
                                    <circle
                                        cx="24"
                                        cy="24"
                                        r="4"
                                        fill="#80deea"
                                    ></circle>
                                </svg>
                                <p className="text-sm text-muted-foreground">
                                    React
                                </p>
                            </div>

                            {/* NextJS */}
                            <div className="flex flex-col items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="100"
                                    height="100"
                                    viewBox="0,0,256,256"
                                >
                                    <g
                                        fill="#ffffff"
                                        fillRule="nonzero"
                                        stroke="none"
                                        strokeWidth="1"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        strokeMiterlimit="10"
                                        strokeDasharray=""
                                        strokeDashoffset="0"
                                        fontFamily="none"
                                        fontWeight="none"
                                        fontSize="none"
                                        textAnchor="none"
                                    >
                                        <g transform="scale(5.33333,5.33333)">
                                            <path d="M18.974,31.5c0,0.828 -0.671,1.5 -1.5,1.5c-0.829,0 -1.5,-0.672 -1.5,-1.5v-14c0,-0.653 0.423,-1.231 1.045,-1.43c0.625,-0.198 1.302,0.03 1.679,0.563l16.777,23.704c5.142,-3.628 8.525,-9.602 8.525,-16.337c0,-11 -9,-20 -20,-20c-11,0 -20,9 -20,20c0,11 9,20 20,20c3.192,0 6.206,-0.777 8.89,-2.122l-13.916,-19.662zM28.974,16.5c0,-0.828 0.671,-1.5 1.5,-1.5c0.829,0 1.5,0.672 1.5,1.5v13.84l-3,-4.227z"></path>
                                        </g>
                                    </g>
                                </svg>
                                <p className="text-sm text-muted-foreground">
                                    NextJS
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
                {/* Backend */}
                <Reveal
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, delay: 0.2 },
                    }}
                >
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                            Backend
                        </h3>
                        <div className="flex flex-row flex-wrap justify-center gap-4">
                            {/* NodeJS */}
                            <div className="flex flex-col items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 136 136"
                                    id="node-js"
                                    width={100}
                                    height={100}
                                >
                                    <path
                                        fill="#83CD29"
                                        d="M112.678 30.334l-44.143-25.605c-2.781-1.584-6.424-1.584-9.227 0l-44.488 25.605c-2.869 1.651-4.82 4.754-4.82 8.073v51.142c0 3.319 1.992 6.423 4.862 8.083l11.729 6.688c5.627 2.772 7.186 2.772 9.746 2.772 8.334 0 12.662-5.039 12.662-13.828v-50.49c.001-.713.446-1.774-.255-1.774h-5.622c-.712 0-2.122 1.061-2.122 1.773v50.49c0 3.896-3.616 7.773-10.202 4.48l-12.122-7.013c-.422-.23-.676-.693-.676-1.181v-51.142c0-.482.463-.966.891-1.213l44.378-25.561c.415-.235 1.002-.235 1.415 0l43.963 25.555c.421.253.354.722.354 1.219v51.142c0 .488.092.963-.323 1.198l-44.133 25.576c-.378.227-.87.227-1.285 0l-11.317-6.749c-.341-.198-.752-.269-1.08-.086-3.145 1.783-3.729 2.02-6.679 3.043-.727.253-1.799.692.408 1.929l14.798 8.754c1.416.82 3.027 1.246 4.647 1.246 1.642 0 3.249-.426 4.666-1.246l43.976-25.582c2.871-1.672 4.322-4.764 4.322-8.083v-51.142c-.001-3.319-1.452-6.414-4.323-8.073zM77.727 81.445c-11.727 0-14.309-3.235-15.17-9.066-.102-.628-.634-1.379-1.274-1.379h-5.73c-.709 0-1.28.86-1.28 1.566 0 7.466 4.06 16.512 23.454 16.512 14.038 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.104 0 12.46 1.954 13.841 8.091.119.577.646.991 1.241.991h5.754c.354 0 .691-.143.939-.396.241-.272.367-.613.336-.979-.893-10.569-7.913-15.494-22.112-15.494-12.632 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.956-3.978 7.067-13.308 7.067z"
                                    ></path>
                                </svg>
                                <p className="text-sm text-muted-foreground">
                                    NodeJS
                                </p>
                            </div>
                            {/* ExpressJs */}
                            <div className="flex flex-col items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 136 136"
                                    id="express"
                                    width={100}
                                    height={100}
                                    className="invert"
                                >
                                    <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7L92.66 62.34 67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21C102.65 49.82 109 41.7 115 33.26c2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57Q1.33 64.78 1.33 61.74zM7.2 60.25H57.63c-.33-16.06-10.33-27.47-24-27.57C18.63 32.56 7.85 43.7 7.2 60.25z"></path>
                                </svg>
                                <p className="text-sm text-muted-foreground">
                                    ExpressJS
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
                {/* Database & Cloud */}
                <Reveal
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, delay: 0.3 },
                    }}
                >
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                            Databases
                        </h3>
                        <div className="flex flex-row flex-wrap justify-center gap-4">
                            {/* MongoDB */}
                            <div className="flex flex-col items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 26 26"
                                    id="mongodb"
                                    width={100}
                                    height={100}
                                >
                                    <path
                                        fill="#FFF"
                                        d="m12.546 24-.639-.218s.078-3.257-1.091-3.491c-.779-.904.125-38.338 2.93-.125 0 0-.966.483-1.138 1.309-.186.811-.062 2.525-.062 2.525z"
                                    ></path>
                                    <path
                                        fill="#A6A385"
                                        d="m12.546 24-.639-.218s.078-3.257-1.091-3.491c-.779-.904.125-38.338 2.93-.125 0 0-.966.483-1.138 1.309-.186.811-.062 2.525-.062 2.525z"
                                    ></path>
                                    <path
                                        fill="#FFF"
                                        d="M12.889 20.852s5.595-3.678 4.286-11.33c-1.262-5.563-4.239-7.387-4.566-8.088-.358-.499-.701-1.371-.701-1.371l.234 15.475c-.001.015-.484 4.737.747 5.314z"
                                    ></path>
                                    <path
                                        fill="#499D4A"
                                        d="M12.889 20.852s5.595-3.678 4.286-11.33c-1.262-5.563-4.239-7.387-4.566-8.088-.358-.499-.701-1.371-.701-1.371l.234 15.475c-.001.015-.484 4.737.747 5.314z"
                                    ></path>
                                    <path
                                        fill="#FFF"
                                        d="M11.58 21.054s-5.252-3.584-4.94-9.896c.296-6.312 4.005-9.413 4.722-9.974.468-.498.483-.685.514-1.184.327.701.265 10.488.312 11.641.14 4.442-.249 8.572-.608 9.413z"
                                    ></path>
                                    <path
                                        fill="#58AA50"
                                        d="M11.58 21.054s-5.252-3.584-4.94-9.896c.296-6.312 4.005-9.413 4.722-9.974.468-.498.483-.685.514-1.184.327.701.265 10.488.312 11.641.14 4.442-.249 8.572-.608 9.413z"
                                    ></path>
                                </svg>
                                <p className="text-sm text-muted-foreground">
                                    MongoDB
                                </p>
                            </div>
                            {/* Firebase */}
                            <div className="flex flex-col items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 26 26"
                                    id="firebase"
                                    width={100}
                                    height={100}
                                >
                                    <path
                                        fill="#FFA000"
                                        d="m14.714 8.669-2.4 2.235-2.228-4.496 1.151-2.585c.291-.516.767-.522 1.058 0l2.419 4.846z"
                                    ></path>
                                    <path
                                        fill="#F57F17"
                                        d="m12.314 10.903-8.979 8.351 6.751-12.846 2.228 4.495z"
                                    ></path>
                                    <path
                                        fill="#FFCA28"
                                        d="M17.346 5.251c.43-.41.873-.271.985.31l2.334 13.58-7.742 4.648c-.272.152-.992.211-.992.211s-.655-.08-.906-.218l-7.689-4.528 14.01-14.003z"
                                    ></path>
                                    <path
                                        fill="#FFA000"
                                        d="m10.086 6.408-6.75 12.846L6.344.477c.113-.582.443-.641.74-.126l3.002 6.057z"
                                    ></path>
                                </svg>
                                <p className="text-sm text-muted-foreground">
                                    Firebase
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
                {/* Tools */}
                <Reveal
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, delay: 0.4 },
                    }}
                >
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                            Tools
                        </h3>
                        <div className="flex flex-row flex-wrap justify-center gap-4">
                            {/* Git */}
                            <div className="flex flex-col items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="100"
                                    height="100"
                                    viewBox="0 0 48 48"
                                >
                                    <path
                                        fill="#F4511E"
                                        d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"
                                    ></path>
                                </svg>
                                <p className="text-sm text-muted-foreground">
                                    Git
                                </p>
                            </div>
                            {/* Figma */}
                            <div className="flex flex-col items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="100"
                                    height="100"
                                    viewBox="0 0 48 48"
                                    className="hover:animate-spin"
                                >
                                    <path
                                        fill="#e64a19"
                                        d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"
                                    ></path>
                                    <path
                                        fill="#7c4dff"
                                        d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"
                                    ></path>
                                    <path
                                        fill="#66bb6a"
                                        d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"
                                    ></path>
                                    <path
                                        fill="#ff7043"
                                        d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"
                                    ></path>
                                    <circle
                                        cx="32"
                                        cy="24"
                                        r="7"
                                        fill="#29b6f6"
                                    ></circle>
                                </svg>
                                <p className="text-sm text-muted-foreground">
                                    Figma
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
