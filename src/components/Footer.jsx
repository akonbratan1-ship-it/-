import { Music2, Instagram, Github, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='border-t border-white/10 py-16 px-6'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-4 gap-10'>
        <div>
          <div className='flex items-center gap-2 text-2xl font-bold'>
            <Music2 /> MusicWave
          </div>

          <p className='mt-4 text-gray-500'>
            Modern music platform.
          </p>
        </div>

        <div>
          <h4 className='font-bold mb-4'>Navigation</h4>
          <div className='space-y-2 text-gray-500'>
            <p>Home</p>
            <p>Music</p>
            <p>Premium</p>
          </div>
        </div>

        <div>
          <h4 className='font-bold mb-4'>Company</h4>
          <div className='space-y-2 text-gray-500'>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>

        <div>
          <h4 className='font-bold mb-4'>Social</h4>
          <div className='flex gap-4 text-gray-400'>
            <Instagram />
            <Github />
            <Twitter />
          </div>
        </div>
      </div>

      <div className='text-center text-gray-600 mt-16'>
        © 2026 MusicWave
      </div>
    </footer>
  )
}
