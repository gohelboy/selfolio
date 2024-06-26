import { Button } from "@/components/ui/button";
import { Globe, User } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <TitleMassage />

      <div className="flex gap-4 items-start mt-4">
        <div className="flex flex-col gap-2 cursor-pointer p-1 border border-gray-100 rounded-xl">
          <Button size="icon" variant="ghost">
            <User />
          </Button>
          <Button size="icon" variant="ghost">
            <User />
          </Button>
          <Button size="icon" variant="ghost">
            <User />
          </Button>
          <Button size="icon" variant="ghost">
            <User />
          </Button>
          <Button size="icon" variant="ghost">
            <User />
          </Button>
          <Button size="icon" variant="ghost">
            <User />
          </Button>
          <Button size="icon" variant="ghost">
            <User />
          </Button>
          <Button size="icon" variant="ghost">
            <User />
          </Button>
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-700">Me</h1>
          <p className="text-gray-500 text-sm">Add details about yourself.</p>
        </div>
      </div>
    </div>
  );
};

const TitleMassage = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-700">Selfolio</h1>
        <p className="text-gray-500 text-sm">
          Edit your selfolio details here.
        </p>
      </div>
      <Button variant="brown">
        <span className="flex justify-center items-center gap-1">
          Visit <Globe size={18} />
        </span>
      </Button>
    </div>
  );
};

export default page;
