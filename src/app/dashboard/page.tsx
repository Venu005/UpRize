import { Bento } from "@/components/bento";
import React from "react";

const Dashboard = () => {
  return (
    <main className="flex flex-col  justify-center min-h-screen p-4">
      <div className="mb-8">
        <h2>Hello User fullname</h2>
      </div>
      <div className="w-full max-w-5xl mx-auto flex justify-center items-center">
        <Bento />
      </div>
    </main>
  );
};

export default Dashboard;
