import Chatbot from './components/Chatbot';
import Hero from './components/Hero';

export default function Home() {
  return (
<>      
  <nav className="flex fixed top-5 right-32 items-center justify-between px-6 py-4 bg-white/10 shadow-2xl rounded-lg ease-in duration-500 hover:bg-white/80">
    <ul className="flex space-x-6 text-gray-600 font-medium">
    <li><a href="#about" className="hover:text-blue-600">About</a></li>
    <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
    <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
  </ul>
  </nav>

    <main className="min-h-screen bg-blue-100 flex items-center justify-center">

  <div className="text-black space-y-6">
    <Hero />
    <Chatbot />
  </div>
</main>
</>

  )
}
