import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <DashboardGreetings />
      <VisitorsChart />
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gray-400 h-48 flex p-3 rounded-xl relative overflow-hidden">
          <h3 className="font-semibold  text-gray-700">Selfolio</h3>
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <h3 className="text-9xl font-bold text-gray-500">2</h3>
          </div>
        </div>
        <div className="bg-gray-400 h-48 flex items-center justify-center rounded-xl col-span-2">
          2
        </div>
        <div className="bg-gray-400 flex items-center justify-center rounded-xl col-start-4 row-start-1 row-end-3">
          3
        </div>
        <div className="bg-gray-400 h-48 flex items-center justify-center rounded-xl col-start-1 col-end-4">
          4
        </div>
      </div>
    </div>
  );
};

const DashboardGreetings = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold text-gray-700">
        Welcome to selfolio👋
      </h1>
      <p className="text-gray-500 text-sm">
        You can see insights and control your selfolio from here.
      </p>
    </div>
  );
};

const VisitorsChart = () => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-2xl font-bold text-gray-700">
        717 <span className="text-base">visitors</span>
      </h2>
      <div className="bg-gray-400 h-72 rounded-xl"></div>
    </div>
  );
};

export default page;
