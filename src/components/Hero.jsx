export default function Hero() {
  return (
    <section className='min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden'>
      <div className='absolute w-96 h-96 bg-pink-500/30 blur-[120px] rounded-full top-20 left-20'></div>
      <div className='absolute w-96 h-96 bg-cyan-500/30 blur-[120px] rounded-full bottom-10 right-10'></div>

      <div className='relative z-10 max-w-5xl'>
        <h1 className='text-6xl md:text-8xl font-black leading-tight bg-clip-text text-transparent gradient'>
          Музыканы жаңа деңгейде тыңда
        </h1>

        <p className='mt-6 text-gray-400 text-xl'>
          Premium музыка платформасы. Миллиондаған тректер бір жерде.
        </p>

        <div className='mt-10 flex flex-col md:flex-row justify-center gap-4'>
          <button className='gradient px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition-all'>
            Қазір бастау
          </button>

          <button className='border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/5 transition-all'>
            Demo көру
          </button>
        </div>
      </div>
    </section>
  )
}
