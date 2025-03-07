'use client'
import {
  useAccount,
  useChainId,
  useGasPrice,
} from 'wagmi';

export default function FeatRainbowkit() {
  
  const {address} = useAccount();
  const chainId = useChainId();
  const gasPrice = useGasPrice();

  return (
    <section className="space-y-2">
      <div>wallet:{address || '~'}</div>
      <div>chainId:{chainId || '~'}</div>
      <div>gasPrice:{gasPrice.data ? Number(gasPrice.data) : '~'}</div>
    </section>
  );
}
