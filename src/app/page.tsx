"use client";

import WalletBar from "@/components/WalletBar";
import Balance from "@/components/Balance";

import { useBlock } from "@starknet-react/core";
import { BlockNumber } from "starknet";

export default function Home() {
  const { data, isLoading, isError } = useBlock({
    refetchInterval: false,
    blockIdentifier: "latest" as BlockNumber,
  });

  return (
		<main className="flex flex-col items-center justify-center min-h-screen gap-12">
			<WalletBar />
			<p>
				{isLoading
					? "Loading..."
					: isError
					? "Error while fetching the latest block hash"
					: `Latest block hash: ${data?.block_hash}`
        }
			</p>
      <Balance />
		</main>
	);
}
