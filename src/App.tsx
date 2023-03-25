import './App.css'
import { WagmiConfig, createClient, configureChains, mainnet } from 'wagmi'
import { Profile } from "./components/Profile";
import { publicProvider } from 'wagmi/providers/public'

import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, provider, webSocketProvider } = configureChains(
    [mainnet],
    [publicProvider()],
)

// Set up client
const client = createClient({
    autoConnect: true,
    connectors: [
        new MetaMaskConnector({ chains }),
    ],
    provider,
    webSocketProvider,
})

// Pass client to React Context Provider
export default function App() {
    return (
        <WagmiConfig client={client}>
            <Profile />
        </WagmiConfig>
    )
}
