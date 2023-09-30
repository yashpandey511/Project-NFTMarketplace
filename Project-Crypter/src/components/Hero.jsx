import Identicon from 'react-identicons'
import { setGlobalState, useGlobalState, truncate } from '../store'

const Hero = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  const onCreatedNFT = () => {
    setGlobalState('modal', 'scale-100')
  }

  return (
    <>
      <div className="shadow-xl shadow-black md:w-3/5 w-full mt-10 md:mt-0 rounded-md overflow-hidden bg-gray-800 flex flex-col justify-center items-center mx-auto">
        <img
            src="https://source.unsplash.com/1434x956"
            alt="NFT Art"
            className="h-60 w-full object-cover"
        />
        <div className="flex justify-start items-center p-3">
          <Identicon
            string={connectedAccount ? connectedAccount : 'Connect Your Wallet'}
            size={50}
            className="h-10 w-10 object-contain rounded-full mr-3"
          />
          <div>
            <p className="text-white font-semibold">
              {connectedAccount ? truncate(connectedAccount) : 'Connect Your Wallet'}
            </p>
          </div>
        </div>
      </div>

  
      <div className="flex flex-col md:flex-row w-4/5 justify-between items-center mx-auto py-20 ">
        <div className="md:w-3/6 w-full">
          <div>
            <h1 className="text-white text-5xl font-bold">
              Buy and Sell <br /> Digital Arts, <br />
              <span className="text-gradient">NFTs</span> Collections
            </h1>
          </div>
  
          <div className="flex flex-row mt-5">
            <button
              className="shadow-xl shadow-black text-white
              bg-[#e32970] hover:bg-[#bd255f]
              rounded-full cursor-pointer p-2"
              onClick={onCreatedNFT}
            >
              Create NFT
            </button>
          </div>
  
          <div className="w-3/4 flex justify-between items-center mt-5">
            <div>
              <p className="text-white font-bold">276k</p>
              <small className="text-gray-300">Users</small>
            </div>
            <div>
              <p className="text-white font-bold">138k</p>
              <small className="text-gray-300">Artworks</small>
            </div>
            <div>
              <p className="text-white font-bold">69k</p>
              <small className="text-gray-300">Artists</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero
