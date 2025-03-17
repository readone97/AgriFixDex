
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useToast } from '@/components/ui/use-toast';
import { useWallet } from '@solana/wallet-adapter-react';
import { PublicKey, Transaction, SystemProgram, Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { Loader2 } from 'lucide-react';

interface TokenCardProps {
  name: string;
  symbol: string;
  icon: string;
  description: string;
  price: number;
}

const TokenCard = ({ name, symbol, icon, description, price }: TokenCardProps) => {
  const [amount, setAmount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { publicKey, sendTransaction, connected } = useWallet();

  const incrementAmount = () => setAmount(prev => prev + 1);
  const decrementAmount = () => setAmount(prev => prev > 1 ? prev - 1 : 1);

  const handleMint = async () => {
    if (!connected || !publicKey) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to mint tokens.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      toast({
        title: `Minting ${amount} ${symbol} tokens`,
        description: "Preparing your transaction...",
      });
      
      // Create connection to Solana devnet
      const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
      
      // Create a simple transaction that transfers a small amount of SOL to simulate token minting
      // In a real application, this would call a token minting program
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: publicKey, // Send to self to simulate a token mint
          lamports: 1000, // Very small amount (0.000001 SOL)
        })
      );
      
      // Get the latest blockhash
      const { blockhash } = await connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = publicKey;
      
      // Send transaction
      const signature = await sendTransaction(transaction, connection);
      
      // Wait for transaction confirmation
      toast({
        title: "Transaction sent",
        description: "Waiting for confirmation...",
      });
      
      await connection.confirmTransaction(signature, 'confirmed');
      
      toast({
        title: "Minting successful!",
        description: `${amount} ${symbol} tokens have been added to your wallet.`,
      });
    } catch (error) {
      console.error("Transaction error:", error);
      toast({
        title: "Minting failed",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg card-hover-effect">
      <div className="h-3 agri-gradient"></div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-2">
            <img src={icon} alt={name} className="w-10 h-10 rounded-full" />
            <div>
              <CardTitle className="text-xl text-agri-brown">{name}</CardTitle>
              <CardDescription>{symbol}</CardDescription>
            </div>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                  ${price.toFixed(2)}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Current market price</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
          <Button
            variant="outline"
            size="icon"
            onClick={decrementAmount}
            className="h-8 w-8"
            disabled={isLoading}
          >
            -
          </Button>
          <span className="font-medium text-lg">{amount}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={incrementAmount}
            className="h-8 w-8"
            disabled={isLoading}
          >
            +
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-agri-green hover:bg-agri-green/90 btn-hover-effect" 
          onClick={handleMint}
          disabled={isLoading || !connected}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            `Mint ${amount} ${symbol}`
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TokenCard;
