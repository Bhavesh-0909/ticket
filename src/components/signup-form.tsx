import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SignupForm() {
  return (
    <Card className="mx-auto md:w-1/2 md:max-w-[50%] max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Sign Up</CardTitle>
        <CardDescription>
          Enter the details for signing up for an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
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
                id="contact"
                type="tel"
                placeholder="9869096087"
                required
                />
            </div>
            <div className="grid gap-2 w-full">
                <Label htmlFor="name">Name</Label>
                <Input
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
                id="password"
                type="password"
                placeholder="********"
                required
                />
            </div>
            <div className="grid gap-2 w-full">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                id="confirmPassword"
                type="password"
                placeholder="********"
                required
                />
            </div>
          </div>
          <Button type="submit" className="w-full">
            Login
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
