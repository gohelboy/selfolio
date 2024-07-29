import GrayBlock from "@/app/_components/dashboard/GrayBlock";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";
import React from "react";
import { useToast } from "@/components/ui/use-toast";

const Me = () => {
  const { toast } = useToast();

  const save = () => {
    const time = new Date();
    const currentTime =
      time.getDate() + "/" + (time.getMonth() + 1) + "/" + time.getFullYear();

    toast({
      description: `Information Updated on ${currentTime}`,
    });
  };

  return (
    <div className="w-full">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-700">Me</h1>
          <p className="text-gray-500 text-sm">Add details about yourself</p>
        </div>
        <div className="flex gap-2">
          <Button variant="brown" size="icon" onClick={save}>
            <Check size={14} />
          </Button>
        </div>
      </div>

      <GrayBlock>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="text-sm text-gray-500">
              Full Name
            </label>
            <Input
              id="name"
              placeholder="Jack Gyllenhaal"
              className="bg-white"
            />
          </div>
          <div>
            <label htmlFor="name" className="text-sm text-gray-500">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="jack.gyllenhaal@me.com"
              className="bg-white"
            />
          </div>
          <div>
            <label htmlFor="name" className="text-sm text-gray-500">
              Phone Number
            </label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="(123) 456-7890"
              className="bg-white"
            />
          </div>
          <div>
            <label htmlFor="name" className="text-sm text-gray-500">
              Occupation
            </label>
            <Input
              id="occupation"
              placeholder="Software Engineer"
              className="bg-white"
            />
          </div>
          <div>
            <label htmlFor="name" className="text-sm text-gray-500">
              Tagline
            </label>
            <Input
              id="tagline"
              placeholder="Ex: Making Possibilities into reality."
              className="bg-white"
            />
          </div>
          <div>
            <label htmlFor="name" className="text-sm text-gray-500">
              About Me
            </label>
            <Textarea
              id="aboutMe"
              placeholder="Ex: I am a passionate, creative, and multitasker."
              className="bg-white"
              rows={5}
            />
          </div>
        </div>
      </GrayBlock>
    </div>
  );
};

export default Me;
