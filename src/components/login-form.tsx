'use client';
import { useState } from "react";
import { BrowserProvider } from "ethers";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function LoginForm() {
  
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  // Connect MetaMask
  const connectWallet = async () => {
    if (typeof window.ethereum === "undefined") {
      setError("MetaMask is not installed. Please install it to connect.");
      return;
    }
    try {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner(); // Get the signer
      const address = await signer.getAddress(); // Get the connected wallet address
      if(!address) {
        setError("Failed to connect MetaMask. Please try again.");
        return;
      }
      router.push("/"); 
      setError(null); 
      
    } catch (err) {
      setError("Failed to connect MetaMask. Please try again.");
      alert("Failed to connect MetaMask. Please try again.");
      console.error(err);
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Connect your Ethereum wallet to log in to your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <Button onClick={connectWallet} className="w-full">
            Connect Wallet
          </Button>
          {error && (
            <p className="mt-2 text-sm text-red-500">
              {error}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
