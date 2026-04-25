import { Check } from 'lucide-react'

export default function Pricing() {
  return (
    <section className='max-w-7xl mx-auto py-24 px-6 grid md:grid-cols-3 gap-6'>
      {['Free', 'Pro', 'Premium'].map((p, i) => (
        <div key={i} className={`glass rounded-3xl p-10 text-center ${i === 1 ? 'scale-105 border-pink-500' : ''}`}>
          <h3 className='text-3xl font-bold'>
            {p}
          </h3>

          <div className='text-5xl font-black mt-6'>
            {i === 0 ? '0₸' : i === 1 ? '3990₸' : '9990₸'}
          </div>

          <div className='mt-8 space-y-4'>
            <div className='flex items-center justify-center gap-2'>
              <Check size={18} /> Unlimited Music
            </div>
            <div className='flex items-center justify-center gap-2'>
              <Check size={18} /> Premium Audio
            </div>
          </div>

          <button className='gradient w-full py-4 rounded-2xl mt-8'>
            Таңдау
          </button>
        </div>
      ))}
    </section>
  )
}
