import timelessLogo from '../assets/timeless.png'

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.25] justify-center items-center">
        <img src={timelessLogo} alt="logo" className="w-32" />
      </div>

      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">
         
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
         
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          
        </p>
      </div>

      <div className="flex flex-[0.25] justify-center items-center">
        </div>
    </div>
  </div>
)

export default Footer
