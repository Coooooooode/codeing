import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import ListItem from '../components/ListItem'
import Post from '../components/Post'
import Navbar from '../components/Navbar'

import SideBar from '../components/Sidebar'
import { Listing } from '../data/Listing.seed'
import ConnectContainer from '../components/ConnectContainer'
import Modal from 'react-modal'
import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { infuraProvider } from 'wagmi/providers/infura'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import CreatePostModal from '../components/CreatePostModal'
import { useAppContext } from '../context/context'

Modal.setAppElement('#__next')

const { chains, provider } = configureChains(
  [chain.goerli, chain.localhost],
  [
    infuraProvider({ apiKey: process.env.INFURA_API_KEY, priority: 1 }),
    jsonRpcProvider({
      priority: 2,
      rpc: chain => ({
        http: `HTTP://127.0.0.1:9545`,
      }),
    }),
  ],
)

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#F5F5F5',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(10, 11, 13, 0.75)',
  },
}

const Home = () => {
  const router = useRouter()
  const { posts } = useAppContext()

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <div className='main-container '>
          <Head>
            <title>學習分享平台</title>
            <meta name='description' content='Generated by create next app' />
            <link rel='icon' href='/favicon.ico' />
          </Head>
          <Navbar />
          <div className='app-container'>
            <div className='main-header'>
              <div className='main-avatar-wrap'>
              
              </div>
              <h1 className='text-weight-semibold tab'>列表</h1>

              <div className='flex-1' />
              <span className='text-tab text-weight-medium pr-20 grey-tab tab'>
                <Link href='/?post=1'>
                  <span >發布</span>
                </Link>
              </span>
            </div>
            <aside className='main-nav-wrap'>
              <nav className='main-nav-extended'>
                <div className='main-nav-section'>
                  <ConnectContainer />
                  <SideBar />
              
                </div>
              </nav>
            </aside>
            <main className='main-content'>
              {posts.map((item, index) => {
                return <Post {...item} key={index} />
              })}
            </main>
            <aside className='main-aside'>
           
              {Listing.map((item, index) => {
                return (
                  <article className='trends mb-10' key={index}>
                    <header className='trends-header'>
                      <h2 className='text-bold'>{item.name}</h2>
                      {item.seeAll && (
                        <div className='trend-more text-large'>See All</div>
                      )}
                    </header>
                    <section className='trends-content'>
                      {item?.data?.map(data => {
                        return <ListItem {...data} key={data.title} />
                      })}
                    </section>
                  </article>
                )
              })}
            </aside>
          </div>
        </div>
        <Modal
          isOpen={!!router.query.post}
          onRequestClose={() => router.push('/')}
          style={customStyles}
        >
          <CreatePostModal />
        </Modal>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default Home