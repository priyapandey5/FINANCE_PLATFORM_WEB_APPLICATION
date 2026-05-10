import DashboardPage from "./page";
import { BarLoader } from "react-spinners";
import { Suspense } from "react";
import React from "react";

const Layout = () => {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between mb-5">
        <h1 className="mt-24 text-6xl font-bold tracking-tight gradient-title">
  Dashboard
</h1>
      </div>
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        <DashboardPage />
      </Suspense>
    </div>
  );
};

export default Layout;