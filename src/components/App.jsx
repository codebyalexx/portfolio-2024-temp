import {Component} from "react";
import MouseGradiant from "./MouseGradiant";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdOutlineArrowOutward, MdArrowForward  } from "react-icons/md";


export default class App extends Component {
    render() {
        return <>
            <span className={'hidden bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 no-scrollbar'}></span>
            <div className={'w-full h-full py-16 pb-0 relative'}>
                <MouseGradiant />
                <div className={'h-full container mx-auto px-64 grid grid-cols-7 gap-10'}>
                    <div className={'flex flex-col justify-between max-h-screen col-span-3 pr-8 lg:sticky lg:top-16'}>
                        <header>
                            <div className={'mb-12'}>
                                <h1 className={'text-4xl font-extrabold mb-2 text-slate-200'}>Alex Development</h1>
                                <p className={'text-lg font-medium mb-2 text-slate-300'}>Experienced Front-End Engineer</p>
                                <span className={'text-base text-gray-400'}>Designs web applications that drive the finished product to success.</span>
                            </div>
                            <nav>
                                <ul>
                                    <li className={'flex items-center group text-sm uppercase font-bold mb-3 text-slate-500 hover:text-white'}>
                                        <span className={'block w-8 h-[1px] bg-slate-500 mr-3 group-hover:bg-white group-hover:w-16 transition-all'}></span>
                                        <a href="#about">About</a>
                                    </li>
                                    <li className={'flex items-center group text-sm uppercase font-bold mb-3 text-slate-500 hover:text-white'}>
                                        <span className={'block w-8 h-[1px] bg-slate-500 mr-3 group-hover:bg-white group-hover:w-16 transition-all'}></span>
                                        <a href="#experiences">Experience</a>
                                    </li>
                                    <li className={'flex items-center group text-sm uppercase font-bold text-slate-500 hover:text-white'}>
                                        <span className={'block w-8 h-[1px] bg-slate-500 mr-3 group-hover:bg-white group-hover:w-16 transition-all'}></span>
                                        <a href="#projects">Projects</a>
                                    </li>
                                </ul>
                            </nav>
                        </header>
                        <ul className={'flex pb-16 mb-16'}>
                            <li className={'mr-3'}>
                                <a href="https://github.com/alexandrelg2022" target={'_blank'} rel="noreferrer">
                                    <AiFillGithub size={30} className={'text-slate-400 transition-all delay-50 hover:text-slate-200'} />
                                </a>
                            </li>
                            <li className={'mr-3'}>
                                <a href="https://www.linkedin.com/in/alexandre-l-904832228/" target={'_blank'} rel="noreferrer">
                                    <AiFillLinkedin size={30} className={'text-slate-400 transition-all delay-50 hover:text-slate-200'} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <article className={'col-span-4'}>
                        <section className={'mb-32'} id={'about'}>
                            <p className={'text-base text-slate-400 mb-4'}>Back in 2017, <span className={'text-slate-200'}>
                            I was 12</span> and passionate with web development and its potential of creativity.
                                This is where all started! My <span className={'text-slate-200'}>curious mind</span> made me learn web development from front end to back end until now.</p>
                            <p className={'text-base text-slate-400 mb-4'}>My main focus these days is building <span className={'text-slate-200'}>powerful apps</span> such as
                                <span className={'text-slate-200'}> Uber Eats clone</span> to build up my future career as <span className={'text-slate-200'}>Front-End Engineer</span> and
                                fill-up my resume. Im really in web development and my goal is to be <span className='text-slate-200'>always better</span>.<br/>

                            </p>
                            <p className={'text-base text-slate-400 mb-4'}>When I’m not at the computer, I’m usually <span className={'text-slate-200'}>lifting weights</span> at the gym,
                                <span className={'text-slate-200'}> hanging out</span> with bros, or doing a chill <span className={'text-slate-200'}>gaming session</span>.
                            </p>
                        </section>
                        <section className={'mb-32'} id={'experience'}>
                            <div className="group/list">
                                <a href="https://unosial.com" className={'block group relative transition-all group-hover/list:opacity-50 hover:!opacity-100 mb-8'} target={'_blank'} rel={'noreferrer'}>
                                    <div className={'absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block group-hover:bg-slate-800/50 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg'}></div>
                                    <div className={'grid grid-cols-6 gap-2'}>
                                        <div className={'col-span-1 z-10'}>
                                            <p className={'pt-1 text-slate-500 uppercase text-xs font-bold'}>2022&nbsp; ̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶ ̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶&nbsp;&nbsp;2023</p>
                                        </div>
                                        <div className={'col-span-5 z-10'}>
                                            <h3 className={'flex text-base font-semibold text-slate-200 group-hover:text-teal-300 mb-1'}>Backend Engineer • Unosial <MdOutlineArrowOutward  className={'ml-1 text-sm font-bold transition-all group-hover:text-lg'} /></h3>
                                            <p className={'text-sm text-slate-400 mb-3'}>
                                                Deliver high-quality code for a diverse array of projects for clients including Webedia content creators, Big french discord communities and some collaborations.
                                            </p>
                                            <ul className={'flex'}>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2'}>NodeJs</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2'}>Redis</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2'}>PostgreSQL</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2'}>Discord.js</li>
                                            </ul>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://unosial.com" className={'block group relative transition-all group-hover/list:opacity-50 hover:!opacity-100 mb-8'} target={'_blank'} rel={'noreferrer'}>
                                    <div className={'absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block group-hover:bg-slate-800/50 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg'}></div>
                                    <div className={'grid grid-cols-6 gap-2'}>
                                        <div className={'col-span-1 z-10'}>
                                            <p className={'pt-1 text-slate-500 uppercase text-xs font-bold'}>2022&nbsp; ̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶ ̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶&nbsp;&nbsp;2023</p>
                                        </div>
                                        <div className={'col-span-5 z-10'}>
                                            <h3 className={'flex text-base font-semibold text-slate-200 group-hover:text-teal-300 mb-1'}>Backend Engineer • Unosial <MdOutlineArrowOutward  className={'ml-1 text-sm font-bold transition-all group-hover:text-lg'} /></h3>
                                            <p className={'text-sm text-slate-400 mb-3'}>
                                                Deliver high-quality code for a diverse array of projects for clients including Webedia content creators, Big french discord communities and some collaborations.
                                            </p>
                                            <ul className={'flex'}>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2'}>NodeJs</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2'}>Redis</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2'}>PostgreSQL</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2'}>Discord.js</li>
                                            </ul>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://unosial.com" className={'block group relative transition-all group-hover/list:opacity-50 hover:!opacity-100 mb-8'} target={'_blank'} rel={'noreferrer'}>
                                    <div className={'absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block group-hover:bg-slate-800/50 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg'}></div>
                                    <div className={'grid grid-cols-6 gap-2'}>
                                        <div className={'col-span-1 z-10'}>
                                            <p className={'pt-1 text-slate-500 uppercase text-xs font-bold'}>2022&nbsp; ̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶ ̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶̶&nbsp;&nbsp;2023</p>
                                        </div>
                                        <div className={'col-span-5 z-10'}>
                                            <h3 className={'flex text-base font-semibold text-slate-200 group-hover:text-teal-300 mb-1'}>Backend Engineer • Unosial <MdOutlineArrowOutward  className={'ml-1 text-sm font-bold transition-all group-hover:text-lg'} /></h3>
                                            <p className={'text-sm text-slate-400 mb-3'}>
                                                Deliver high-quality code for a diverse array of projects for clients including Webedia content creators, Big french discord communities and some collaborations.
                                            </p>
                                            <ul className={'flex'}>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2'}>NodeJs</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2'}>Redis</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2'}>PostgreSQL</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2'}>Discord.js</li>
                                            </ul>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <a href="/resume.pdf" target={'_blank'} rel={'noreferrer'} className={'group flex items-center mt-8 transition-all font-semibold text-base hover:underline decoration-teal-300 underline-offset-4'}>
                                View Full Resume <MdArrowForward className={'transition-all ml-1 group-hover:ml-2'} />
                            </a>
                        </section>
                        <section className={'mb-32'} id={'projects'}>
                            <div className="group/list">
                                <a href="https://v1.alex-development.eu" className={'block group relative transition-all group-hover/list:opacity-50 hover:!opacity-100 mb-8'} target={'_blank'} rel={'noreferrer'}>
                                    <div className={'absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block group-hover:bg-slate-800/50 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg'}></div>
                                    <div className={'grid grid-cols-8 gap-3'}>
                                        <div className={'col-span-2 z-10 pt-1.5'}>
                                            <img src="/Portfolio2022.png" alt="2022 Portfolio Preview" className={'rounded-lg border-2 border-slate-700 group-hover:border-slate-300'}/>
                                        </div>
                                        <div className={'col-span-6 z-10'}>
                                            <h3 className={'flex text-base font-semibold text-slate-200 group-hover:text-teal-300 mb-3'}>Portfolio 2022 <MdOutlineArrowOutward  className={'ml-1 text-sm font-bold transition-all group-hover:text-lg'} /></h3>
                                            <ul className={''}>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2 inline-block'}>React.js</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2 inline-block'}>ESLint</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2 inline-block'}>Express.js</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2 inline-block'}>MySQL</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2 inline-block'}>SCSS</li>
                                            </ul>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://alexandrelg2022.github.io/Reservia/" className={'block group relative transition-all group-hover/list:opacity-50 hover:!opacity-100 mb-8'} target={'_blank'} rel={'noreferrer'}>
                                    <div className={'absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block group-hover:bg-slate-800/50 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg'}></div>
                                    <div className={'grid grid-cols-8 gap-2'}>
                                        <div className={'col-span-2 z-10 pt-1.5'}>
                                            <img src="/Reservia.png" alt="Reservia Website Preview" className={'rounded-lg border-2 border-slate-700 group-hover:border-slate-300'}/>
                                        </div>
                                        <div className={'col-span-6 z-10'}>
                                            <h3 className={'flex text-base font-semibold text-slate-200 group-hover:text-teal-300 mb-1'}>Reservia <MdOutlineArrowOutward  className={'ml-1 text-sm font-bold transition-all group-hover:text-lg'} /></h3>
                                            <p className={'text-sm text-slate-400 mb-3'}>
                                                Reservia is a static web page of an accommodation / accommodation engine. This is the first integration I made during my OpenClassrooms training.
                                            </p>
                                            <ul className={''}>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2 inline-block'}>HTML</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2 inline-block'}>CSS</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2 inline-block'}>Responsive</li>
                                            </ul>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://alexandrelg2022.github.io/FishEye/" className={'block group relative transition-all group-hover/list:opacity-50 hover:!opacity-100 mb-8'} target={'_blank'} rel={'noreferrer'}>
                                    <div className={'absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block group-hover:bg-slate-800/50 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg'}></div>
                                    <div className={'grid grid-cols-8 gap-2'}>
                                        <div className={'col-span-2 z-10 pt-1.5'}>
                                            <img src="/FishEye.png" alt="FishEye Website Preview" className={'rounded-lg border-2 border-slate-700 group-hover:border-slate-300'}/>
                                        </div>
                                        <div className={'col-span-6 z-10'}>
                                            <h3 className={'flex text-base font-semibold text-slate-200 group-hover:text-teal-300 mb-1'}>FishEye <MdOutlineArrowOutward  className={'ml-1 text-sm font-bold transition-all group-hover:text-lg'} /></h3>
                                            <p className={'text-sm text-slate-400 mb-3'}>
                                                FishEye is an accessible and dynamic website listing different photographers, their photos and their prices. This is a project that I realized during my OpenClassrooms course.
                                            </p>
                                            <ul className={''}>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2 inline-block'}>HTML</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2 inline-block'}>CSS</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2 inline-block'}>Design Patterns</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2 inline-block'}>Responsive</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2 inline-block'}>Accessibility</li>
                                            </ul>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://v1.alex-development.eu" className={'block group relative transition-all group-hover/list:opacity-50 hover:!opacity-100 mb-8'} target={'_blank'} rel={'noreferrer'}>
                                    <div className={'absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block group-hover:bg-slate-800/50 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg'}></div>
                                    <div className={'grid grid-cols-8 gap-3'}>
                                        <div className={'col-span-2 z-10 pt-1.5'}>
                                            <img src="/Portfolio2022.png" alt="2022 Portfolio Preview" className={'rounded-lg border-2 border-slate-700 group-hover:border-slate-300'}/>
                                        </div>
                                        <div className={'col-span-6 z-10'}>
                                            <h3 className={'flex text-base font-semibold text-slate-200 group-hover:text-teal-300 mb-3'}>Portfolio 2022 <MdOutlineArrowOutward  className={'ml-1 text-sm font-bold transition-all group-hover:text-lg'} /></h3>
                                            <ul className={''}>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2 inline-block'}>React.js</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2 inline-block'}>ESLint</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2 inline-block'}>Express.js</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2 inline-block'}>MySQL</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2 inline-block'}>SCSS</li>
                                            </ul>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://alexandrelg2022.github.io/Reservia/" className={'block group relative transition-all group-hover/list:opacity-50 hover:!opacity-100 mb-8'} target={'_blank'} rel={'noreferrer'}>
                                    <div className={'absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block group-hover:bg-slate-800/50 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg'}></div>
                                    <div className={'grid grid-cols-8 gap-2'}>
                                        <div className={'col-span-2 z-10 pt-1.5'}>
                                            <img src="/Reservia.png" alt="Reservia Website Preview" className={'rounded-lg border-2 border-slate-700 group-hover:border-slate-300'}/>
                                        </div>
                                        <div className={'col-span-6 z-10'}>
                                            <h3 className={'flex text-base font-semibold text-slate-200 group-hover:text-teal-300 mb-1'}>Reservia <MdOutlineArrowOutward  className={'ml-1 text-sm font-bold transition-all group-hover:text-lg'} /></h3>
                                            <p className={'text-sm text-slate-400 mb-3'}>
                                                Reservia is a static web page of an accommodation / accommodation engine. This is the first integration I made during my OpenClassrooms training.
                                            </p>
                                            <ul className={''}>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2 inline-block'}>HTML</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2 inline-block'}>CSS</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2 inline-block'}>Responsive</li>
                                            </ul>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://alexandrelg2022.github.io/FishEye/" className={'block group relative transition-all group-hover/list:opacity-50 hover:!opacity-100 mb-8'} target={'_blank'} rel={'noreferrer'}>
                                    <div className={'absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block group-hover:bg-slate-800/50 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg'}></div>
                                    <div className={'grid grid-cols-8 gap-2'}>
                                        <div className={'col-span-2 z-10 pt-1.5'}>
                                            <img src="/FishEye.png" alt="FishEye Website Preview" className={'rounded-lg border-2 border-slate-700 group-hover:border-slate-300'}/>
                                        </div>
                                        <div className={'col-span-6 z-10'}>
                                            <h3 className={'flex text-base font-semibold text-slate-200 group-hover:text-teal-300 mb-1'}>FishEye <MdOutlineArrowOutward  className={'ml-1 text-sm font-bold transition-all group-hover:text-lg'} /></h3>
                                            <p className={'text-sm text-slate-400 mb-3'}>
                                                FishEye is an accessible and dynamic website listing different photographers, their photos and their prices. This is a project that I realized during my OpenClassrooms course.
                                            </p>
                                            <ul className={''}>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2 inline-block'}>HTML</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2 inline-block'}>CSS</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2 inline-block'}>Design Patterns</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2 inline-block'}>Responsive</li>
                                                <li className={'rounded-full px-3 py-1 text-xs text-teal-300 bg-teal-400/10 font-medium mr-1.5 mb-2 inline-block'}>Accessibility</li>
                                            </ul>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <a href="/archive" className={'group flex items-center mt-8 transition-all font-semibold text-base hover:underline decoration-teal-300 underline-offset-4'}>
                                View Full Project Arhive <MdArrowForward className={'transition-all ml-1 group-hover:ml-2'} />
                            </a>
                        </section>
                    </article> {/* overflow-y-scroll no-scrollbar */}
                </div>
            </div>
        </>
    }
}