import { ConnectButton } from '@rainbow-me/rainbowkit';

export const WalletButton: React.FC = () => {
  return (
    <ConnectButton
      label="连接钱包"
      showBalance={false}
      // accountStatus={{
      //   smallScreen: 'avatar',
      //   largeScreen: 'full'
      // }}
    />
  );
};
