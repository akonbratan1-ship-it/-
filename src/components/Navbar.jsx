import { Music2 } from 'lucide-react'

export default function Navbar() {
  return (
    <div className='fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10'>
      <div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-4'>
        <div className='flex items-center gap-2 text-2xl font-bold'>
          <Music2 /> MusicWave
        </div>

        <div className='hidden md:flex gap-8 text-gray-300'>
          <a href='#'>Басты</a>
          <a href='#'>Музыка</a>
          <a href='#'>Premium</a>
          <a href='#'>FAQ</a>
        </div>

        <button className='gradient px-5 py-2 rounded-xl'>
          Тыңдау
        </button>
      </div>
    </div>
  )
}
