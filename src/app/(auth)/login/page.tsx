"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex justify-center align-middle items-center h-screen">
      <Tabs defaultValue="signup" className="w-[400px] my-5">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
          <TabsTrigger value="signin">Sign In</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <Card>
            <CardHeader>
              <CardTitle className="mb-5">Sign In</CardTitle>
              <Image
                src="/og.png"
                alt="connect"
                width={600}
                height={600}
                className="rounded-md"
              />
              <CardDescription>
                Welcome back! Sign in to your account to continue.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 flex justify-center flex-col">
              <Button
                variant="outline"
                onClick={() => {
                  setLoading(true);
                  signIn("discord");
                }}
                disabled={loading}
              >
                Continue with Discord
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle className="mb-5">Sign Up</CardTitle>
              <Image
                src="/og.png"
                alt="connect"
                width={600}
                height={600}
                className="rounded-md"
              />
              <CardDescription>
                Join the community! Sign up for an account to get started.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 flex justify-center flex-col">
              <Button
                variant="outline"
                onClick={() => {
                  setLoading(true);
                  signIn("discord");
                }}
                disabled={loading}
              >
                Continue with Discord
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
