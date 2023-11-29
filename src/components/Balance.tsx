"use client";

import { useAccount, useContractRead } from "@starknet-react/core";
import { abi } from "@/utils/abi";

const testAddress =
	"0x05d061a9bf7e4707f39d35bf038fcb754ce62e7e6daf8b486ecffa430a599919s";

const Balance = () => {
	const { address } = useAccount();
	const { data, isLoading, isError } = useContractRead({
		functionName: "balanceOf",
		args: [address as string],
		abi,
		address: testAddress,
		watch: true,
	});

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error...</div>;
	//@ts-ignore
	return <div>{parseFloat(data.balance.low)}n</div>;
}

export default Balance