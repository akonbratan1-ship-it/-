import { Headphones, Music, Radio } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: <Headphones size={32} />,
      title: 'Hi-Fi Audio',
    },
    {
      icon: <Music size={32} />,
      title: 'Unlimited Tracks',
    },
    {
      icon: <Radio size={32} />,
      title: 'Live Radio',
    },
  ]

  return (
    <section className='max-w-7xl mx-auto py-24 px-6 grid md:grid-cols-3 gap-6'>
      {items.map((item, i) => (
        <div key={i} className='glass rounded-3xl p-8 hover:scale-105 transition-all'>
          <div className='w-16 h-16 gradient rounded-2xl flex items-center justify-center'>
            {item.icon}
          </div>

          <h3 className='text-2xl font-bold mt-6'>
            {item.title}
          </h3>

          <p className='text-gray-400 mt-3'>
            Заманауи музыка тәжірибесі.
          </p>
        </div>
      ))}
    </section>
  )
}
