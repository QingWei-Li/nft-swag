import { ConnectButton } from '@rainbow-me/rainbowkit';

export const WalletButton: React.FC = () => {
  return (
    <ConnectButton
      showBalance={false}
      // accountStatus={{
      //   smallScreen: 'avatar',
      //   largeScreen: 'full'
      // }}
    />
  );
};
