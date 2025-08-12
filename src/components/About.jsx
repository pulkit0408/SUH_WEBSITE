const About = () => {
  return (
      <>
      <div className="flex items-center justify-center gap-8 p-8 overflow-hidden lg:flex-row flex-col">
         <div className="flex items-center justify-center gap-3 px-8">
          <div>
            <img src="About1.png" alt="" height={200}/>
          </div>
          <div className="flex items-center justify-center flex-col gap-3">
            <div className="rounded-[8px]">
            <img src="About2.png" alt="" height={222}/>
            </div>
            <div>
            <img src="About3.png" alt=""/>
            </div>
          </div>
         </div>
         <div className="flex items-center justify-center flex-col max-w-[548px] lg:items-start">
           <div className="flex items-center justify-center gap-3 flex-col lg:items-start">
           <p className="text-[22px] font-medium text-center lg:text-left" style={{
             background: 'linear-gradient(90deg, #526EDE 0%, #8E51C5 50%, #CB34AD 100%)',
             backgroundClip: 'text',
             WebkitBackgroundClip: 'text',
             WebkitTextFillColor: 'transparent'
           }}>About Us</p>
            <p className="leading-15 font-bold text-[48px] text-white/95 text-center lg:text-left">Designing the future of your business.</p>
             <p className="text-white/95 font-normal leading-8 text-md text-center lg:text-left">
            At SUH TECH PRIVATE LIMITED, we specialize in delivering innovative technology solutions that drive business success. From product development and digital marketing to game design and startup consultancy, we combine expertise with passion to create impactful results. We value your time — and your vision.
            </p>
           </div>
           <div>2</div>
         </div>
      </div>
      </>
  )
}

export default About
