const TimeOpen = () => (
  <div className='timeOpenBackground h-auto md:h-[440px] flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-[100px] p-4 md:p-0'>
    <div className='text-white text-s lg:text-l bg-brownTransparent w-full md:w-[540px] h-[137px] flex flex-col items-center justify-center md:ml-[100px] mb-4 md:mb-0'>
      <h2 className='font-bold mb-2'>GODZINY OTWARCIA</h2>
    </div>
    <div className='grid grid-cols-2 gap-4 text-white text-s lg:text-m '>
      <div className='flex flex-col items-start justify-center'>
        <span>Mon-Thu</span>
        <span>08:00-18:00</span>
      </div>
      <div className='flex flex-col items-start justify-center'>
        <span>Fri</span>
        <span>08:00-19:00</span>
      </div>
      <div className='flex flex-col items-start justify-center'>
        <span>Sat</span>
        <span>9:00-18:00</span>
      </div>
      <div className='flex flex-col items-start justify-center'>
        <span>Sun</span>
        <span>9:00-18:00</span>
      </div>
    </div>
  </div>
)

export default TimeOpen
