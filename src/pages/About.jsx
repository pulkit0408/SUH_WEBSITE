import { ArrowRight } from "lucide-react";

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

            <p className="leading-15 font-bold text-[48px] text-white/95 text-center lg:text-left">
              Designing the future of your business.
            </p>

            <p className="text-white/95 font-normal leading-8 text-md text-center lg:text-left">
              At SUH TECH PRIVATE LIMITED, we specialize in delivering innovative technology solutions that drive business success. From product development and digital marketing to game design and startup consultancy, we combine expertise with passion to create impactful results. We value your time — and your vision.
            </p>
          </div>

          {/* Fixed button container with proper alignment */}
          <div className="mt-6 flex justify-center lg:justify-start w-full">
            <button
              className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-white rounded-2xl font-semibold w-full sm:w-56 h-12 sm:h-14 transition-all duration-300 shadow-xl relative overflow-hidden group hover:scale-105 hover:-translate-y-1 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #4B72E1 0%, #8E51C5 50%, #D230A9 100%)'
              }}
            >
              Learn More
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
