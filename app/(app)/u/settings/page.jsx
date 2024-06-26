import GrayBlock from "@/app/_components/dashboard/GrayBlock";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Eye } from "lucide-react";
import React from "react";

const Settings = () => {
  return (
    <div className="flex flex-col gap-4">
      <TitleMassage />
      <GrayBlock>
        <div className="w-full">
          <h1 className="text-lg font-bold text-gray-700">General</h1>
          <p className="text-gray-500 text-sm">
            Change your selfolio name and URL.
          </p>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <div>
            <label htmlFor="selfolioName" className="text-sm text-gray-500">
              Selfolio Name
            </label>

            <Input
              id="selfolioName"
              placeholder="Ex: My Selfolio"
              className="bg-white"
            />
          </div>
          <div>
            <label htmlFor="selfolioName" className="text-sm text-gray-500">
              Selfolio URL
            </label>
            <div className="relative">
              <Input
                readOnly={true}
                id="selfolioName"
                placeholder="Ex: https://selfolio.vercel.app/myportfolio"
                className="bg-white text-gray-500"
                value={"https://selfolio.vercel.app/myportfolio"}
              />
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-2 top-1/2 -translate-y-1/2 size-6"
              >
                <Copy size={14} />
              </Button>
            </div>
          </div>
        </div>
      </GrayBlock>
      <GrayBlock>
        <div className="w-full">
          <h1 className="text-lg font-bold text-gray-700">Visiblity</h1>
          <p className="text-gray-500 text-sm">
            Set the visiblity of this selfolio.
          </p>
        </div>
        <div className="mt-4">
          <Button variant="brown">
            <span className="flex justify-center items-center gap-1">
              <Eye size={20} />
              Make it public
            </span>
          </Button>
        </div>
      </GrayBlock>
      <GrayBlock>
        <div className="w-full">
          <h1 className="text-lg font-bold text-red-600">Danger Zone</h1>
          <p className="text-gray-500 text-sm">
            The following action are destructive and can not be reversed.
          </p>
        </div>
        <div className="mt-4">
          <Button className="bg-red-600 hover:bg-red-500">
            Delete Selfolio
          </Button>
        </div>
      </GrayBlock>
    </div>
  );
};

const TitleMassage = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold text-gray-700">Settings</h1>
      <p className="text-gray-500 text-sm">
        Configure settings for this application.
      </p>
    </div>
  );
};

export default Settings;
