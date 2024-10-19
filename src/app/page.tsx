"use client";
import Navbar from "@/components/NavBar";
import Spline from "@splinetool/react-spline/next";
import { Medal, Users, Search } from "lucide-react";

export default function Home() {
  return (
    <main className="relative">
      <div className="relative w-full h-screen">
        <Spline scene="https://prod.spline.design/Y7V3RXQeQkI1GcCG/scene.splinecode" />
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>
      </div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex items-center justify-center">
        <div className="container px-4 md:px-6 max-w-5xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Medal className="h-12 w-12 text-primary" />
              <h2 className="text-xl font-bold">Real-time Rankings</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Get instant updates on your position in various contests.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <Users className="h-12 w-12 text-primary" />
              <h2 className="text-xl font-bold">Multiple Contests</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Participate and track your rankings in various competitions.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <Search className="h-12 w-12 text-primary" />
              <h2 className="text-xl font-bold">Easy Search</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Quickly find your rankings using contest codes or your username.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Uprize. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 sm:mt-0 sm:ml-auto">
          Made with love by Venu & Aftab
        </p>
      </footer>
    </main>
  );
}
