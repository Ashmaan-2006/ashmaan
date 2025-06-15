import Chatbot from './components/Chatbot';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

export default function Home() {
  return (
<>      
  <nav className="flex fixed top-5 right-32 items-center justify-between px-6 py-4 bg-white/10 shadow-2xl rounded-lg ease-in duration-500 hover:bg-white/80 hover:scale-105">
    <ul className="flex space-x-6 text-gray-600 font-medium">
    <li><a href="#about" className="hover:text-blue-600">About</a></li>
    <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
    <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
  </ul>
  </nav>

    <main className="bg-white flex items-center justify-center">

  <div className="text-black space-y-6">
    <Hero />
    <div className="">
    <Chatbot />
    </div>
    <Navbar />
    <div className='py-52'>
      d
      s
      d
      s
      d
      s
      d
      s
      d
      s
      d
      s
      d
      s
      d
      s
      d
      s
    </div>
  </div>
</main>
</>

  )
}
