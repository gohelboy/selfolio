import GrayBlock from "@/app/_components/dashboard/GrayBlock";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Delete } from "lucide-react";
import React from "react";

const Hobby = () => {
  return (
    <div class="w-full">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-700">Hobby</h1>
          <p className="text-gray-500 text-sm">Add your Hobbies</p>
        </div>
        <div className="flex gap-2">
          {/* <AddNewExperienceDialog /> */}
          <Button variant="brown" size="icon">
            <Check size={14} />
          </Button>
        </div>
      </div>
      <GrayBlock>
        <div className="grid grid-cols-2 gap-7">
          <div className="flex flex-col gap-1">
            <label htmlFor="hobby" className="text-sm text-gray-500">
              Hobby
            </label>
            <div className="flex items-center">
              <Input
                id="hobby"
                placeholder="SQL Server"
                className="bg-white flex-1"
              />
              <Button className="ml-2" variant="brown">
                Add <ArrowRight size={18} />
              </Button>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-1">
              <div className="text-sm text-gray-500">
                Click to remove a Hobby
              </div>
              <div className="bg-white rounded-lg p-4 flex flex-wrap gap-2">
                <Badge
                  className="group transition-all cursor-pointer"
                  variant="custom"
                >
                  Writing
                  <Delete className="ml-1 hidden group-hover:block" size={16} />
                </Badge>
                <Badge
                  className="group transition-all cursor-pointer"
                  variant="custom"
                >
                  Writing
                  <Delete className="ml-1 hidden group-hover:block" size={16} />
                </Badge>
                <Badge
                  className="group transition-all cursor-pointer"
                  variant="custom"
                >
                  Writing
                  <Delete className="ml-1 hidden group-hover:block" size={16} />
                </Badge>
                <Badge
                  className="group transition-all cursor-pointer"
                  variant="custom"
                >
                  Writing
                  <Delete className="ml-1 hidden group-hover:block" size={16} />
                </Badge>
                <Badge
                  className="group transition-all cursor-pointer"
                  variant="custom"
                >
                  Writing
                  <Delete className="ml-1 hidden group-hover:block" size={16} />
                </Badge>
                <Badge
                  className="group transition-all cursor-pointer"
                  variant="custom"
                >
                  Writing
                  <Delete className="ml-1 hidden group-hover:block" size={16} />
                </Badge>
                <Badge
                  className="group transition-all cursor-pointer"
                  variant="custom"
                >
                  Writing
                  <Delete className="ml-1 hidden group-hover:block" size={16} />
                </Badge>
                <Badge
                  className="group transition-all cursor-pointer"
                  variant="custom"
                >
                  Writing
                  <Delete className="ml-1 hidden group-hover:block" size={16} />
                </Badge>
                <Badge
                  className="group transition-all cursor-pointer"
                  variant="custom"
                >
                  Writing
                  <Delete className="ml-1 hidden group-hover:block" size={16} />
                </Badge>
                <Badge
                  className="group transition-all cursor-pointer"
                  variant="custom"
                >
                  Writing
                  <Delete className="ml-1 hidden group-hover:block" size={16} />
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </GrayBlock>
    </div>
  );
};

export default Hobby;
