import timelessLogo from '../assets/timeless.png'
import { connectWallet } from '../Blockchain.Services'
import { useGlobalState, truncate } from '../store'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  return (
    <nav className="w-4/5 flex md:justify-between justify-center items-center py-4 mx-auto">
  <div className="flex-initial justify-center items-center">
    <img
      className="w-32 cursor-pointer"
      src={timelessLogo}
      alt="CrypterLogo"
    />
  </div>

  <div className="flex-initial">
    {connectedAccount ? (
      <button
        className="shadow-xl shadow-black text-white
          bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
          rounded-full cursor-pointer"
      >
        {truncate(connectedAccount, 4, 4, 11)}
      </button>
    ) : (
      <button
        className="shadow-xl shadow-black text-white
          bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
          rounded-full cursor-pointer"
        onClick={connectWallet}
      >
        Connect Wallet
      </button>
    )}
  </div>
</nav>

  )
}

export default Header
