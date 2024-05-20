import Logo from "@/components/common/logo/Logo"

const Home = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section className='flex flex-col items-center mx-5 mt-12 mb-20'>
        <Logo className='text-brand w-24 transition-[width] my-4 lg:w-28'/>
        <h1 className='text-[40px] text-[#23272F] font-[600]'>React</h1>
        <p className='text-[32px] text-center text-[#404756]'>
          The library for web and native user interfaces
        </p>
        <div className='flex gap-2 mt-5'>
          <button className='bg-brand px-6 py-3 text-white text-[17px] font-semibold rounded-full transition-opacity duration-75 hover:opacity-50'>
            Learn React
          </button>
          <button className='border border-[##E5E7EB] px-6 py-3 rounded-full text-[#23272F] font-semibold hover:bg-gray-50/5'>
            API Reference
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home