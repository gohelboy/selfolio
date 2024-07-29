import GrayBlock from "@/app/_components/dashboard/GrayBlock";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Check,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import React from "react";

const Social = () => {
  return (
    <div className="w-full">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-700">Social</h1>
          <p className="text-gray-500 text-sm">Add social links</p>
        </div>
        <div className="flex gap-2">
          <Button variant="brown" size="icon">
            <Check size={14} />
          </Button>
        </div>
      </div>
      <GrayBlock>
        <div className="flex flex-col gap-3">
          <div className="relative text-gray-700">
            <Input placeholder="Github" className="bg-white pl-9" />
            <Github className="absolute size-5 top-1/2 left-2 transform -translate-y-1/2" />
          </div>
          <div className="relative text-gray-700">
            <Input placeholder="Linkin" className="bg-white pl-9" />
            <Linkedin className="absolute size-5 top-1/2 left-2 transform -translate-y-1/2" />
          </div>
          <div className="relative text-gray-700">
            <Input placeholder="Twiiter" className="bg-white pl-9" />
            <Twitter className="absolute size-5 top-1/2 left-2 transform -translate-y-1/2" />
          </div>
          <div className="relative text-gray-700">
            <Input placeholder="Instagram" className="bg-white pl-9" />
            <Instagram className="absolute size-5 top-1/2 left-2 transform -translate-y-1/2" />
          </div>
          <div className="relative text-gray-700">
            <Input placeholder="Other" className="bg-white pl-9" />
            <Globe className="absolute size-5 top-1/2 left-2 transform -translate-y-1/2" />
          </div>
        </div>
      </GrayBlock>
    </div>
  );
};

export default Social;
