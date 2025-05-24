
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from 'next/link';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { User, Lock } from "lucide-react";
import { useState } from "react";

// Assuming the image is at src/public/login.png
// The path is relative from src/components/auth/sign-in-form.tsx to src/public/login.png
import loginImageSrc from '../../public/login.png';

// Placeholder for Google Icon
const GoogleIcon = () => (
  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    <path d="M1 1h22v22H1z" fill="none"/>
  </svg>
);

// Placeholder for Facebook Icon
const FacebookIcon = () => (
  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor" color="#1877F2">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89H8.078V12h2.359v-2.11c0-2.329 1.396-3.634 3.518-3.634 1.002 0 1.864.074 2.116.108v2.51h-1.484c-1.136 0-1.358.54-1.358 1.332V12h2.799l-.364 2.89H13.17v7.01A9.932 9.932 0 0022 12z"/>
  </svg>
);


const signInFormSchema = z.object({
  username: z.string().min(3, { message: "Username must be at least 3 characters." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

type SignInFormValues = z.infer<typeof signInFormSchema>;

export function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(data: SignInFormValues) {
    setIsLoading(true);
    console.log("Sign In data:", data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    // In a real app, you'd handle success/error states here
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-poppins">
      <Card className="flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-4xl">
        {/* Left Panel: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2 text-center text-gray-800">LOGIN</h1>
          <p className="text-sm text-gray-600 mb-8 text-center">
            Welcome back! Sign in to access your Jaro Education account.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          type="text"
                          placeholder="Username"
                          {...field}
                          className="pl-10 py-3 bg-purple-50/30 border-purple-200 rounded-lg focus:ring-primary focus:border-primary text-gray-700"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          type="password"
                          placeholder="Password"
                          {...field}
                          className="pl-10 py-3 bg-purple-50/30 border-purple-200 rounded-lg focus:ring-primary focus:border-primary text-gray-700"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-dropdown-hover-gradient hover:opacity-90 text-white font-semibold py-3 rounded-lg"
              >
                {isLoading ? "Logging in..." : "Login Now"}
              </Button>
            </form>
          </Form>

          <div className="my-6 flex items-center">
            <hr className="flex-grow border-gray-300" />
            <span className="px-4 text-sm text-gray-500">Login with Others</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="space-y-3">
            <Button variant="outline" className="w-full flex items-center justify-center py-3 rounded-lg border-gray-300 hover:bg-gray-50 text-gray-700">
              <GoogleIcon />
              Login with Google
            </Button>
            <Button variant="outline" className="w-full flex items-center justify-center py-3 rounded-lg border-gray-300 hover:bg-gray-50 text-gray-700">
              <FacebookIcon />
              Login with Facebook
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-8 text-center">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="text-primary hover:underline font-semibold">
              Sign up
            </Link>
          </p>
        </div>

        {/* Right Panel: Image */}
        <div className="hidden md:flex md:w-1/2 bg-primary-gradient p-12 items-center justify-center relative">
           {/* Decorative wavy lines (simplified) */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="wavyPattern" patternUnits="userSpaceOnUse" width="80" height="80" patternTransform="rotate(45)">
                  <path d="M0 40 Q 20 0 40 40 T 80 40" stroke="white" strokeWidth="2" fill="none"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#wavyPattern)" />
            </svg>
          </div>
          <div className="relative z-10">
            <Image
              src={loginImageSrc}
              alt="Login illustration"
              width={400}
              height={500}
              placeholder="blur"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
