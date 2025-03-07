'use client'
import { isMobile } from 'react-device-detect';

import { ConnectButton } from '@rainbow-me/rainbowkit';

const Wallet = () => {
  return (
    <div>
        <ConnectButton chainStatus={{ smallScreen: "icon", largeScreen: "icon" }} showBalance={false} accountStatus={isMobile ? 'avatar' : 'full'} />
    </div>
  );
};

export default Wallet;