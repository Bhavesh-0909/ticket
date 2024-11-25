'use client';
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { BrowserProvider, Contract, ethers, keccak256 } from "ethers";
import { contractABI, contractAddress } from "@/config/contract";

export function SignupForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [ethAddress, setEthAddress] = useState(""); 
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (!email || !phone || !displayName || !password || !confirmPassword) {
      setError("Please fill all the fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      setEthAddress(await signer.getAddress());
      const contract = new Contract(contractAddress, contractABI, signer);

      // Using ethers.solidityKeccak256 for hashing the email
      const emailHash = keccak256(ethers.toUtf8Bytes(email));
      const tx = await contract.registerUser(await signer.getAddress(), emailHash, phone);
      await tx.wait();

    } catch (error) {
      console.error(error);
      setError("An error occurred while registering. Please try again.");
    }
  };

  return (
    <Card className="mx-auto md:w-1/2 md:max-w-[50%] max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Sign Up</CardTitle>
        {ethAddress && <CardTitle className="text-lg">
            <Button>{`${ethAddress.slice(0, 4)}...`}</Button>
        </CardTitle>}
        <CardDescription className="flex flex-col gap-2">
          Enter the details for signing up for an account
          <span className="text-red-500">{error ? `${error}`: ""}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="flex justify-between gap-4">
            <div className="grid gap-2 w-full">
                <Label htmlFor="contact">Phone no.</Label>
                <Input
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  id="contact"
                  type="tel"
                  placeholder="9869096087"
                  required
                />
            </div>
            <div className="grid gap-2 w-full">
                <Label htmlFor="name">Name</Label>
                <Input
                  onChange={(e) => setDisplayName(e.target.value)}
                  value={displayName}
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
            </div>
          </div>
          
          <div className="flex justify-between gap-4">
            <div className="grid gap-2 w-full">
                <Label htmlFor="password">Password</Label>
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  id="password"
                  type="password"
                  placeholder="********"
                  required
                />
            </div>
            <div className="grid gap-2 w-full">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  id="confirmPassword"
                  type="password"
                  placeholder="********"
                  required
                />
            </div>
          </div>
          <Button type="submit" className="w-full" onClick={handleRegister}>
            Sign Up
          </Button>
          
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/login" className="underline">
            Log in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
