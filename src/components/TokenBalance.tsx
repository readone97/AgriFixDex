
import { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Connection, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';

interface TokenBalanceProps {
  className?: string;
}

const TokenBalance = ({ className }: TokenBalanceProps) => {
  const { publicKey, connected } = useWallet();
  const [solBalance, setSolBalance] = useState<number | null>(null);
  const [tokenBalances, setTokenBalances] = useState<{[key: string]: number}>({});

  useEffect(() => {
    // Get SOL balance and mocked token balances
    const fetchBalances = async () => {
      if (connected && publicKey) {
        try {
          // Fetch SOL balance
          const connection = new Connection('https://devnet.sonic.game', 'confirmed');
          const balance = await connection.getBalance(publicKey);
          setSolBalance(balance / LAMPORTS_PER_SOL);

          // Get stored token balances from localStorage
          const storedBalances = localStorage.getItem('tokenBalances');
          if (storedBalances) {
            setTokenBalances(JSON.parse(storedBalances));
          }
        } catch (error) {
          console.error("Error fetching balances:", error);
        }
      }
    };

    fetchBalances();
    
    // Set up interval to refresh balances every 30 seconds
    const intervalId = setInterval(fetchBalances, 30000);
    
    return () => clearInterval(intervalId);
  }, [publicKey, connected]);

  if (!connected || !publicKey) {
    return null;
  }

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Wallet Balances</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <div className="flex items-center">
              <span className="text-xl mr-2">◎</span>
              <span>SOL</span>
            </div>
            <div className="font-medium">
              {solBalance !== null ? solBalance.toFixed(4) : "Loading..."}
            </div>
          </div>
          
          {Object.entries(tokenBalances).map(([symbol, balance]) => (
            <div key={symbol} className="flex justify-between items-center py-2 border-b border-gray-100">
              <div className="flex items-center">
                <span className="text-xl mr-2">
                  {symbol === 'MAIZE' ? '🌽' : 
                   symbol === 'SOYA' ? '🫘' : 
                   symbol === 'WHEAT' ? '🌾' : 
                   symbol === 'USDC' ? '💵' : 
                   symbol === 'USDT' ? '💰' : 
                   symbol === 'DAI' ? '🟡' : '💎'}
                </span>
                <span>{symbol}</span>
              </div>
              <div className="font-medium">{Number(balance).toFixed(4)}</div>
            </div>
          ))}
          
          {Object.keys(tokenBalances).length === 0 && (
            <div className="text-gray-500 py-2 text-center">
              No tokens in wallet yet
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TokenBalance;
