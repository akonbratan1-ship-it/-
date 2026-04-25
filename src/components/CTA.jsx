export default function CTA() {
  return (
    <section className='max-w-7xl mx-auto px-6 pb-24'>
      <div className='gradient rounded-[40px] p-14 text-center'>
        <h2 className='text-5xl font-black'>Қазір қосыл</h2>

        <p className='mt-4 text-white/80'>
          Миллиондаған тректер сені күтуде.
        </p>

        <div className='mt-8 flex flex-col md:flex-row gap-4 justify-center max-w-xl mx-auto'>
          <input
            placeholder='Email'
            className='flex-1 px-6 py-4 rounded-2xl text-black outline-none'
          />

          <button className='bg-black px-8 py-4 rounded-2xl'>
            Бастау
          </button>
        </div>
      </div>
    </section>
  )
}
