
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { ArrowDown, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useWallet } from '@solana/wallet-adapter-react';
import { 
  PublicKey, 
  Transaction, 
  SystemProgram, 
  Connection,
  LAMPORTS_PER_SOL
} from '@solana/web3.js';

// Mock token data
const tokens = [
  { id: 'maize', name: 'Maize Token', symbol: 'MAIZE', icon: '🌽', price: 2.34 },
  { id: 'soya', name: 'Soya Token', symbol: 'SOYA', icon: '🫘', price: 3.12 },
  { id: 'wheat', name: 'Wheat Token', symbol: 'WHEAT', icon: '🌾', price: 2.67 },
  { id: 'usdc', name: 'USD Coin', symbol: 'USDC', icon: '💵', price: 1.00 },
  { id: 'usdt', name: 'Tether', symbol: 'USDT', icon: '💰', price: 1.00 },
  { id: 'dai', name: 'Dai', symbol: 'DAI', icon: '🟡', price: 1.00 },
];

const SwapCard = () => {
  const [fromToken, setFromToken] = useState('maize');
  const [toToken, setToToken] = useState('usdc');
  const [fromAmount, setFromAmount] = useState('1');
  const [toAmount, setToAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { publicKey, sendTransaction, connected } = useWallet();

  // Get token details
  const fromTokenDetails = tokens.find(t => t.id === fromToken);
  const toTokenDetails = tokens.find(t => t.id === toToken);

  // Calculate exchange rate and update to amount when from amount or tokens change
  const updateToAmount = (amount: string) => {
    if (!amount || isNaN(Number(amount))) {
      setToAmount('');
      return;
    }
    
    const fromTokenPrice = fromTokenDetails?.price || 0;
    const toTokenPrice = toTokenDetails?.price || 1;
    const convertedAmount = (Number(amount) * fromTokenPrice) / toTokenPrice;
    setToAmount(convertedAmount.toFixed(6));
  };

  // Handle from amount change
  const handleFromAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFromAmount(value);
    updateToAmount(value);
  };

  // Handle token selection change
  const handleFromTokenChange = (value: string) => {
    if (value === toToken) {
      // Swap the tokens if the same token is selected
      setToToken(fromToken);
    }
    setFromToken(value);
    updateToAmount(fromAmount);
  };

  const handleToTokenChange = (value: string) => {
    if (value === fromToken) {
      // Swap the tokens if the same token is selected
      setFromToken(toToken);
    }
    setToToken(value);
    updateToAmount(fromAmount);
  };

  // Handle swap button click
  const handleSwapTokens = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
    
    // Recalculate the amounts
    const fromTokenPrice = toTokenDetails?.price || 0;
    const toTokenPrice = fromTokenDetails?.price || 1;
    const convertedAmount = (Number(fromAmount) * fromTokenPrice) / toTokenPrice;
    setToAmount(fromAmount);
    setFromAmount(convertedAmount.toFixed(6));
  };

  // Handle swap submission - now with actual Solana transaction
  const handleSwap = async () => {
    if (!connected || !publicKey) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to swap tokens.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    if (!fromAmount || Number(fromAmount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount to swap.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    setIsLoading(true);
    
    toast({
      title: "Swap initiated",
      description: `Swapping ${fromAmount} ${fromTokenDetails?.symbol} to ${toAmount} ${toTokenDetails?.symbol}...`,
      duration: 5000,
    });

    try {
      // Create connection to Solana devnet
      const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
      
      // Since we don't have actual token programs for our mock tokens,
      // we'll simulate a transaction by sending a very small amount of SOL to demonstrate
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: publicKey, // Send to self to simulate a token swap
          lamports: 100, // Very small amount (0.0000001 SOL)
        })
      );
      
      // Get the latest blockhash
      const { blockhash } = await connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = publicKey;
      
      // Send transaction
      const signature = await sendTransaction(transaction, connection);
      
      // Wait for transaction confirmation
      await connection.confirmTransaction(signature, 'confirmed');
      
      toast({
        title: "Swap successful!",
        description: `You've successfully swapped ${fromAmount} ${fromTokenDetails?.symbol} to ${toAmount} ${toTokenDetails?.symbol}.`,
        duration: 5000,
      });

      // Add the swapped token balance to localStorage to simulate having tokens in the wallet
      const currentBalances = JSON.parse(localStorage.getItem('tokenBalances') || '{}');
      currentBalances[toTokenDetails?.symbol || ''] = (currentBalances[toTokenDetails?.symbol || ''] || 0) + Number(toAmount);
      localStorage.setItem('tokenBalances', JSON.stringify(currentBalances));
      
    } catch (error) {
      console.error("Transaction error:", error);
      toast({
        title: "Swap failed",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md shadow-xl animate-fade-in">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold text-agri-brown">Swap Tokens</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* From Token */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">From</span>
            <span className="text-gray-500">Balance: 0.00</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex-grow">
              <Input
                type="number"
                value={fromAmount}
                onChange={handleFromAmountChange}
                placeholder="0.0"
                className="w-full text-lg"
                disabled={isLoading}
              />
            </div>
            <div className="w-1/3">
              <Select 
                value={fromToken} 
                onValueChange={handleFromTokenChange}
                disabled={isLoading}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select token" />
                </SelectTrigger>
                <SelectContent>
                  {tokens.map((token) => (
                    <SelectItem key={token.id} value={token.id}>
                      <div className="flex items-center">
                        <span className="mr-2">{token.icon}</span>
                        <span>{token.symbol}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Swap Direction Button */}
        <div className="flex justify-center">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={handleSwapTokens}
            className="rounded-full h-10 w-10 bg-gray-50 hover:bg-gray-100"
            disabled={isLoading}
          >
            <ArrowDown size={20} />
          </Button>
        </div>

        {/* To Token */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">To</span>
            <span className="text-gray-500">Balance: 0.00</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex-grow">
              <Input
                type="text"
                value={toAmount}
                readOnly
                placeholder="0.0"
                className="w-full text-lg bg-gray-50"
              />
            </div>
            <div className="w-1/3">
              <Select 
                value={toToken} 
                onValueChange={handleToTokenChange}
                disabled={isLoading}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select token" />
                </SelectTrigger>
                <SelectContent>
                  {tokens.map((token) => (
                    <SelectItem key={token.id} value={token.id}>
                      <div className="flex items-center">
                        <span className="mr-2">{token.icon}</span>
                        <span>{token.symbol}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Exchange Rate */}
        {fromAmount && toAmount && (
          <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded-md">
            <div className="flex justify-between">
              <span>Exchange Rate:</span>
              <span>
                1 {fromTokenDetails?.symbol} = {(toTokenDetails?.price || 0) / (fromTokenDetails?.price || 1)} {toTokenDetails?.symbol}
              </span>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-agri-green text-white hover:bg-agri-green/90 h-12 text-lg btn-hover-effect" 
          onClick={handleSwap}
          disabled={isLoading || !connected}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing Swap...
            </>
          ) : (
            "Swap"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SwapCard;
