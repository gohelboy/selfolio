import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";
import SelfolioCard from "./SelfolioCard";

const Selfolios = () => {
  return (
    <section className=" m-auto flex">
      <div className="w-full flex flex-col gap-5">
        <div className=" flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-gray-700">
              Welcome to selfolio
            </h1>
            <p className="text-gray-500">
              Build your first portfolio site quickly & dynamically.
            </p>
          </div>
          <div>
            <Button size="lg">
              Create
              <Plus className="ml-1" />{" "}
            </Button>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-5">
            <SelfolioCard />
            <SelfolioCard />
            <SelfolioCard />
            <SelfolioCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Selfolios;
