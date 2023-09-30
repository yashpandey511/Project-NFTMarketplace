const crypter = artifacts.require('Crypter')

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts()

  await deployer.deploy(crypter, 'Cypter', 'TNT', 10, accounts[1])
}
