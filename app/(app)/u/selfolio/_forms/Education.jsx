import GrayBlock from "@/app/_components/dashboard/GrayBlock";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CalendarClock,
  Check,
  Pencil,
  Plus,
  School,
  ScrollText,
} from "lucide-react";
import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

const initialValues = { degree: "", institution: "", graduationYear: "" };

const Education = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formGroup, setFormGroup] = useState([initialValues]);

  const AddNewEducationDialog = () => {
    return (
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger>
          <Button variant="outline" size="icon">
            <Plus size={14} />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Education</DialogTitle>
            <DialogDescription>
              <AddNewEducationLayout />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="brown" onClick={() => {}}>
              Add
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="w-full">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-700">Education</h1>
          <p className="text-gray-500 text-sm">Add details about education.</p>
        </div>
        <div className="flex gap-2">
          <AddNewEducationDialog />
          <Button variant="brown" size="icon">
            <Check size={14} />
          </Button>
        </div>
      </div>

      <GrayBlock>
        <div className="grid grid-cols-2 gap-4">
          <div className="realtvie flex flex-col gap-4 border border-gray-200 p-3 rounded-lg bg-white">
            <Button
              size="icon"
              variant="outline"
              className="self-end absolute size-7"
              onClick={() => setIsDialogOpen(true)}
            >
              <Pencil size={18} />
            </Button>
            <div>
              <div className="flex items-center gap-1 font-semibold text-gray-600">
                <School size={18} />
                <span>Institution</span>
              </div>
              <h3 className="text-md w-[90%] ml-6">
                N. J. Sonecha Institute of Technology N. J. Sonecha Institute of
                Technology
              </h3>
            </div>
            <div>
              <div className="flex items-center gap-1 font-semibold text-gray-600">
                <ScrollText size={18} />
                <span>Degree</span>
              </div>
              <h3 className="text-md ml-6">Masters of computer application</h3>
            </div>
            <div>
              <div className="flex items-center gap-1 font-semibold text-gray-600">
                <CalendarClock size={18} />
                <span>Year</span>
              </div>
              <h3 className="text-md ml-6">2019</h3>
            </div>
          </div>
        </div>
      </GrayBlock>
    </div>
  );
};

export default Education;

const AddNewEducationLayout = () => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm text-gray-500">
            Degree
          </label>
          <Input
            id="degree"
            placeholder="Bachelor of Science"
            className="bg-white"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm text-gray-500">
            Institution
          </label>
          <Input
            id="institution"
            placeholder="University of California, Berkeley"
            className="bg-white"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm text-gray-500">
            Year
          </label>
          <Input id="year" placeholder="2010-2014" className="bg-white" />
        </div>
      </div>
    </div>
  );
};
