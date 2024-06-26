import { Button } from "@/components/ui/button";
import { Copy, ExternalLink } from "lucide-react";
import React from "react";

const SelfolioCard = () => {
  return (
    <div className=" h-52 rounded bg-yellow-200 overflow-hidden hover:bg-yellow-200/50 transition-all">
      <div className="flex h-full">
        <div className="bg-gray-300 flex items-end justify-between w-full p-3 self-end">
          <div>
            <h3 className="font-semibold text-gray-700">Dwarkesh</h3>
            <p className=" text-gray-500 text-sm">https://dwarkesh.vercel.app</p>
          </div>
          <div className="relative flex items-center justify-center gap-2">
            <div className="absolute -top-14 bg-gray-300 size-12 rounded-full flex items-center justify-center">
                <strong className="text-2xl">D</strong>
            </div>
            <Button size='icon' className='size-7' variant="outline"><Copy size={16}/></Button>
            <Button size='icon' className='size-7' variant="outline"><ExternalLink size={16}/></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfolioCard;
