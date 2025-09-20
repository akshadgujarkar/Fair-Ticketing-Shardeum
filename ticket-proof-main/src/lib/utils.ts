import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function switchToShardeum() {
  try {
    // Try switching to Shardeum Sphinx Testnet
    await (window.ethereum as any).request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0xaa36a7" }], 
    });
  } catch (error: any) {
    // If network is not added, add it
    if (error.code === 4902) {
      await (window.ethereum as any).request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0xaa36a7",
            chainName: "Sepolia Testnet",
            rpcUrls: ["https://1rpc.io/sepolia"],
            blockExplorerUrls: ["https://sepolia.etherscan.io/"],
            nativeCurrency: {
              name: "Ethereum",
              symbol: "ETH",
              decimals: 18,
            },
          },
        ],
      });
    } else {
      console.error("Failed to switch chain:", error);
    }
  }
}
