import { ConnectWalletButton } from "@cardano-foundation/cardano-connect-with-wallet";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = () => {
  const onSign = () => {
    console.log("signed!");
  };
  const onConnect = () => {
    console.log("connected!");
  };
  return (
    <div className="fixed top-0 left-0 z-20 w-full">
      <div className="container mx-auto max-w-[1200px]">
        <div className="flex justify-between">
          <div></div>
          <ConnectWalletButton
            message="Please sign Augusta Ada King, Countess of Lovelace"
            onSignMessage={onSign}
            onConnect={onConnect}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
