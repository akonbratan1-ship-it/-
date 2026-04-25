export default function Testimonials() {
  return (
    <section className='max-w-7xl mx-auto py-24 px-6 grid md:grid-cols-3 gap-6'>
      {[1,2,3].map((i)=>(
        <div key={i} className='glass rounded-3xl p-8'>
          <p className='text-gray-300 text-lg'>
            Ең күшті музыка платформаларының бірі.
          </p>

          <div className='mt-6 flex items-center gap-4'>
            <div className='w-14 h-14 rounded-full gradient flex items-center justify-center font-bold'>
              A
            </div>

            <div>
              <h4 className='font-bold'>Arman</h4>
              <p className='text-gray-500 text-sm'>Music Producer</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
