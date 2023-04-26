import postAbi from './Post.json'
import factoryAbi from './BlogFactory.json'

const contractAddress = '0x748D990a25EfFCe787bEb775eE35c7f6427191AF'

const blogInstance = (web3Instance, address) => {
  return new web3Instance.eth.Contract(postAbi.abi, address)
}

const factoryInstance = web3Instance => {
  return new web3Instance.eth.Contract(factoryAbi.abi, contractAddress)
}

export { blogInstance, factoryInstance }
