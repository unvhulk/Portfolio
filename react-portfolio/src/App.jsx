import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaBlogger } from "react-icons/fa";
import { useState } from "react";

function App() {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<main className={` ${darkMode ? "dark" : ""} `}>
			<div className='App grid px-10 font-mono bg-white text-black md:px-20 lg:px-40  dark:bg-gray-900 dark:text-white'>
				{/* Navbar and Introduction Section */}
				<section className=' min-h-screen pb-5 dark:bg-gray-900 dark:text-white'>
					<nav className='py-10 mb-12 flex justify-between'>
						<h1 className=' text-md '>developedbyUNV</h1>
						<ul className='flex items-center'>
							<li>
								<BsFillMoonStarsFill
									className=' cursor-pointer text-2xl'
									onClick={() => setDarkMode(!darkMode)}
								/>
							</li>
							<li>
								<a
									href='/assets/UNV_Resume.pdf'
									className=' bg-gradient-to-r
								from-cyan-500 to-teal-300 text-white px-4 py-2 rounded-md ml-8'
									download>
									Resume
								</a>
							</li>
						</ul>
					</nav>
					<div className='text-center p-10 '>
						<h2 className='text-5xl text-teal-600 font-medium md:text-6xl '>
							Uday Narayan Vishwakarma
						</h2>
						<h3 className='text-2xl py-2 md:text-3xl'>
							Frontend Web developer
						</h3>
						<p
							className='text-lg py-5 leading-8 text-gray-800 font-semibold md:text-xl max-w-xl mx-auto
						dark:text-neutral-500'>
							5 projects for NEOGCAMP using React JS, Context API, HTML, CSS,
							Redux, Typescript and Testing.{" "}
						</p>
					</div>
					<div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
						<a href='https://unv.hashnode.dev/'>
							<FaBlogger className='cursor-pointer' />
						</a>
						<a href='https://www.linkedin.com/in/unv/'>
							<AiFillLinkedin className='cursor-pointer' />
						</a>
						<a href='https://github.com/unvhulk'>
							<AiFillGithub className='cursor-pointer' />
						</a>
					</div>
					<div className='relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mx-auto mt-10 overflow-hidden flex justify-center items-center md:h-96 md:w-96'>
						<h1 className=' text-4xl text-current-gradient-to-b from-black'>
							MEMENTO MORI
						</h1>
					</div>
				</section>

				{/* Projects Section */}
				<section>
					<div className='Projects-intro mb-5'>
						<h3 className='text-3xl py-1 font-bold'>Projects I Made</h3>
						<p className='text-md leading-8 text-gray-80'>
							Since the beginning of my journey as a freelance designer and
							developer, I've done remote work for
							<span className='text-teal-500'> startups</span> and collaborated
							with talented people to create products for both business and
							consumer unit.
						</p>
						<p className='text-md leading-8 text-gray-80'>
							I offer from a wide range of services, including brand designing,
							programming and teaching.
						</p>
					</div>
					<div className='Projects-cards mb-10 grid gap-10 lg:grid-cols-2'>
						<div className='text-center shadow-lg p-10 rounded-xl bg-slate-100   dark:bg-slate-800 dark:shadow-lg dark:shadow-slate-600'>
							<img src='' alt='' />
							<h3 className='text-lg font-bold pb-2'>Xero E-commerce</h3>
							<div>
								<a
									href='https://ecomme-react.netlify.app/'
									className='hover:text-teal-500'>
									{"Live Demo "}
								</a>
								|
								<a
									href='https://github.com/unvhulk/Ecommerce-react'
									className='hover:text-teal-500'>
									{" Source Code "}
								</a>
							</div>
							<ul className='py-2 list-disc text-start'>
								An E-commerce app for games with{" "}
								<li className='text-cyan-500'>
									Authentication with form validation and guest login feature
								</li>
								<li className='text-cyan-500'>
									Product listing, Filter and Sort functionalities
								</li>
								<li className='text-cyan-500'>Cart and Wishlist Management</li>
								<li className='text-cyan-500'>Protected Routes</li>
								<li className='text-cyan-500'>404 page for unmatched route</li>
								<li className='text-cyan-500'>Dark Mode Enabled</li>
							</ul>
							<h4 className='py-4 text-teal-600'>Tect Stack</h4>
							<ul className='md:grid md:grid-cols-3'>
								<li className='text-gray-800 dark:text-cyan-200 py-1'>
									React JS
								</li>
								<li className='text-gray-800 dark:text-cyan-200 py-1'>
									React Router{" "}
								</li>
								<li className='text-gray-800 dark:text-cyan-200 py-1'>
									Context API
								</li>
								<li className='text-gray-800 dark:text-cyan-200 py-1'>
									Vanill CSS
								</li>
								<li className='text-gray-800 dark:text-cyan-200 py-1'>
									Mockbee for Backend
								</li>
							</ul>
						</div>
						<div className='text-center shadow-lg p-10 rounded-xl bg-slate-100   dark:bg-slate-800 dark:shadow-lg dark:shadow-slate-600'>
							<img src='' alt='' />
							<h3 className='text-lg font-bold pb-2'>Habit Tracker App</h3>
							<div>
								<a
									href='https://habit-tracker-neog.netlify.app/'
									className='hover:text-teal-500'>
									{"Live Demo "}
								</a>
								|
								<a
									href='https://github.com/unvhulk/habit-tracker'
									className='hover:text-teal-500'>
									{" Source Code "}
								</a>
							</div>
							<ul className='py-2 list-disc text-start'>
								A Habit Tracker app in which we can{" "}
								<li className='text-cyan-500'>
									Create, Edit, Archive, Delete habit
								</li>
								<li className='text-cyan-500'>
									Active, Inactive and Complete Stats
								</li>
								<li className='text-cyan-500'>
									Redux Toolkit for API call handling
								</li>
								<li className='text-cyan-500'>
									Pomodoro feature for every habit
								</li>
								<li className='text-cyan-500'>Managing Labels</li>
								<li className='text-cyan-500'>Handling Empty states</li>
							</ul>
							<h4 className='py-4 text-teal-600'>Tect Stack</h4>
							<ul className='md:grid md:grid-cols-3'>
								<li className='text-gray-800 dark:text-cyan-200 py-1'>
									React JS
								</li>
								<li className='text-gray-800 dark:text-cyan-200 py-1'>Redux</li>
								<li className='text-gray-800 dark:text-cyan-200 py-1'>
									Context API
								</li>
								<li className='text-gray-800 dark:text-cyan-200 py-1'>
									Vanill CSS
								</li>
								<li className='text-gray-800 dark:text-cyan-200 py-1'>
									Mockbee for Backend
								</li>
							</ul>
						</div>
						<div className='text-center shadow-lg p-10 rounded-xl bg-slate-100   dark:bg-slate-800 dark:shadow-lg dark:shadow-slate-600'>
							<img src='' alt='' />
							<h3 className='text-lg font-bold pb-2'>Xero Component Library</h3>
							<div>
								<a
									href='https://xero-cl-netlify.netlify.app/'
									className='hover:text-teal-500'>
									{"Live Demo "}
								</a>
								|
								<a
									href='https://github.com/unvhulk/Xero-CL'
									className='hover:text-teal-500'>
									{" Source Code "}
								</a>
							</div>
							<ul className='py-2 list-disc text-start'>
								A Component library made by using HTML, CSS and Vanilla JS
								<li className='text-cyan-500'>
									10+ Components including 7+ functional components with
									previews
								</li>
								<li className='text-cyan-500'>
									Reusable utility classes with Clean UI
								</li>
							</ul>
							<h4 className='py-4 text-teal-600'>Tect Stack</h4>
							<ul className='md:grid md:grid-cols-3'>
								<li className='text-gray-800 dark:text-cyan-200 py-1'>HTML</li>
								<li className='text-gray-800 dark:text-cyan-200 py-1'>
									Vanilla CSS
								</li>
								<li className='text-gray-800 dark:text-cyan-200 py-1'>JS</li>
							</ul>
						</div>
						<div className='text-center shadow-lg p-10 rounded-xl bg-slate-100   dark:bg-slate-800 dark:shadow-lg dark:shadow-slate-600'>
							<img src='' alt='' />
							<h3 className='text-lg font-bold pb-2'>Pomodoro App</h3>
							<div>
								<a
									href='https://pomodoro-neogcamp.netlify.app/'
									className='hover:text-teal-500'>
									{"Live Demo "}
								</a>
								|
								<a
									href='https://github.com/unvhulk/pomodoro'
									className='hover:text-teal-500'>
									{" Source Code "}
								</a>
							</div>
							<ul className='py-2 list-disc text-start'>
								A Pomodoro app to increase the productivity of your work.
								<li className='text-cyan-500'>
									To Do list for actions with edit, delete and strike through
									design on title when complete
								</li>
								<li className='text-cyan-500'>
									Pomodoro timer with work and break sections including the task
									description
								</li>
							</ul>
							<h4 className='py-4 text-teal-600'>Tect Stack</h4>
							<ul className='md:grid md:grid-cols-3'>
								<li className='text-gray-800 dark:text-cyan-200 py-1'>
									React JS
								</li>
								<li className='text-gray-800 dark:text-cyan-200 py-1'>
									Typescript
								</li>
								<li className='text-gray-800 dark:text-cyan-200 py-1'>
									Testing using JEST
								</li>
								<li className='text-gray-800 dark:text-cyan-200 py-1'>
									React Router
								</li>
								<li className='text-gray-800 dark:text-cyan-200 py-1'>
									Context API
								</li>
							</ul>
						</div>
						<div className='text-center shadow-lg p-10 rounded-xl bg-slate-100   dark:bg-slate-800 dark:shadow-lg dark:shadow-slate-600'>
							<img src='' alt='' />
							<h3 className='text-lg font-bold pb-2'>Quiz App</h3>
							<div>
								<a
									href='https://neog-quiz-app.netlify.app/'
									className='hover:text-teal-500'>
									{"Live Demo "}
								</a>
								|
								<a
									href='https://github.com/unvhulk/quiz-app'
									className='hover:text-teal-500'>
									{" Source Code "}
								</a>
							</div>
							<ul className='py-2 list-disc text-start'>
								A Quiz app to have quizes about your favourite fandom.
								<li className='text-cyan-500'>
									Quiz cards with User Authentication
								</li>
								<li className='text-cyan-500'>Protected Routes</li>
								<li className='text-cyan-500'>Rules page with quiz info</li>
								<li className='text-cyan-500'>Timer for every page</li>
								<li className='text-cyan-500'>
									Results at the end of every Quiz
								</li>
								<li className='text-cyan-500'>Dark Mode Enabled</li>
							</ul>
							<h4 className='py-4 text-teal-600'>Tect Stack</h4>
							<ul className='md:grid md:grid-cols-3'>
								<li className='text-gray-800 dark:text-cyan-200 py-1'>
									React JS
								</li>
								<li className='text-gray-800 dark:text-cyan-200 py-1'>
									Context API
								</li>
								<li className='text-gray-800 dark:text-cyan-200 py-1'>
									Vanilla CSS
								</li>
								<li className='text-gray-800 dark:text-cyan-200 py-1'>HTML</li>
							</ul>
						</div>
					</div>
				</section>
				{/* Blogs Section */}
				<section>
					<div className='Blogs Introduction'>
						<h3 className='text-3xl py-1 font-bold'>Blogs I wrote</h3>
						<p className='text-md leading-8 text-gray-80'>
							I have written 3 blogs related to
							<span className='text-teal-500'> React JS</span> and some hooks
							used in it. I have also written on a bug that I found while using
							dev environment.
						</p>
					</div>
					<div className='Blogs Cards mb-10 gap-10 grid md:grid-cols-2 lg:grid-cols-3'>
						<div className='text-center shadow-lg p-10 rounded-xl bg-slate-100 grid h-80 dark:bg-slate-800 dark:shadow-lg dark:shadow-slate-600'>
							<h3 className='text-lg font-bold  pb-2'>useEffect hook</h3>
							<p className='py-4'>
								What is useEffect? What is dependency array? How to do cleanup
								in useEffect?
							</p>
							<a
								href='https://unv.hashnode.dev/useeffect-hook'
								className='text-teal-600 outline-dashed flex justify-center
								items-center hover:text-white'>
								Go to Blog
							</a>
						</div>
						<div className='text-center shadow-lg p-10 rounded-xl bg-slate-100 grid h-80 dark:bg-slate-800 dark:shadow-lg dark:shadow-slate-600'>
							<h3 className='text-lg font-bold  pb-2'>useRef hook</h3>
							<p className='py-2'>
								What is useRef hook? What is difference between useState and
								useRef? What is it's return type?
							</p>
							<a
								href='https://unv.hashnode.dev/useref-hook'
								className='text-teal-600 outline-dotted flex justify-center
								items-center hover:text-white'>
								Go to Blog
							</a>
						</div>
						<div className='text-center shadow-lg p-10 rounded-xl bg-slate-100 grid h-80 dark:bg-slate-800 dark:shadow-lg dark:shadow-slate-600'>
							<h3 className='text-lg font-bold '>
								Bug found in the wilderness of Development environment
							</h3>
							<p className=''>A bug caused due to double rendering of code.</p>
							<a
								href='https://unv.hashnode.dev/bug-found-in-the-wilderness-of-development-environment'
								className='text-teal-600 outline-dotted flex justify-center
								items-center hover:text-white'>
								Go to Blog
							</a>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}

export default App;
