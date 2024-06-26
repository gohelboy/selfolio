import GrayBlock from "@/app/_components/dashboard/GrayBlock";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <TitleMassage />
      <GrayBlock>
        <div className="w-full">
          <h1 className="text-lg font-bold text-gray-700">Current Plan</h1>
          <p className="text-gray-500 text-sm">
            Manage and view your current plan
          </p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="w-full">
            <h1 className="text-lg text-gray-700">Plan - Free</h1>
            <p className="text-gray-500 text-sm">Expiration - 12 Days</p>
          </div>
          <Button variant="brown">Manage Plan</Button>
        </div>
      </GrayBlock>
      <GrayBlock>
        <div className="w-full">
          <h1 className="text-lg font-bold text-gray-700">Change Plans</h1>
          <p className="text-gray-500 text-sm">
            View available plans and change plan.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="bg-white h-80 rounded-lg p-4">
            <div className="flex flex-col items-center justify-between h-full">
              <h1>Free</h1>
              <Button variant="brown" className="opacity-50" disabled>
                Activated
              </Button>
            </div>
          </div>
          <div className="bg-white h-80 rounded-lg p-4">
            <div className="flex flex-col items-center justify-between h-full">
              <h1>Premium</h1>
              <Button variant="brown">Upgrade</Button>
            </div>
          </div>
        </div>
      </GrayBlock>
    </div>
  );
};

const TitleMassage = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold text-gray-700">Plan & Billing</h1>
      <p className="text-gray-500 text-sm">
        Manage your subscription for selfolio.
      </p>
    </div>
  );
};

export default page;
