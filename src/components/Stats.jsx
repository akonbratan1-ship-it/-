export default function Stats() {
  return (
    <section className='py-24'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center'>
        <div>
          <h2 className='text-6xl font-black gradient bg-clip-text text-transparent'>
            10M+
          </h2>
          <p className='text-gray-400 mt-3'>Трек</p>
        </div>

        <div>
          <h2 className='text-6xl font-black gradient bg-clip-text text-transparent'>
            2M+
          </h2>
          <p className='text-gray-400 mt-3'>Пайдаланушы</p>
        </div>

        <div>
          <h2 className='text-6xl font-black gradient bg-clip-text text-transparent'>
            99%
          </h2>
          <p className='text-gray-400 mt-3'>Quality</p>
        </div>
      </div>
    </section>
  )
}
