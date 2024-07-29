"use client";
import GrayBlock from "@/app/_components/dashboard/GrayBlock";
import { Button } from "@/components/ui/button";
import {
  Building2,
  CalendarFold,
  Check,
  Milestone,
  Pencil,
  Plus,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const initialValues = { company: "", position: "", year: "" };

const Experience = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [formGroup, setFormGroup] = useState([initialValues]);

  const addNewExperience = () => {
    setFormGroup([...formGroup, initialValues]);
  };

  const AddNewExperienceDialog = () => {
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
              <AddNewExperienceLayout />
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
          <h1 className="text-xl font-bold text-gray-700">Experience</h1>
          <p className="text-gray-500 text-sm">Add your working experience</p>
        </div>
        <div className="flex gap-2">
          <AddNewExperienceDialog />
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
                <Building2 size={18} />
                <span>Company</span>
              </div>
              <h3 className="text-md w-[90%] ml-6">
                Plutus Technologies PVT LTD.
              </h3>
            </div>
            <div>
              <div className="flex items-center gap-1 font-semibold text-gray-600">
                <Milestone size={18} />
                <span>Position</span>
              </div>
              <h3 className="text-md ml-6">Mern Developer</h3>
            </div>
            <div>
              <div className="flex items-center gap-1 font-semibold text-gray-600">
                <CalendarFold size={18} />
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

export default Experience;

const AddNewExperienceLayout = () => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="company" className="text-sm text-gray-500">
            Company
          </label>
          <Input id="company" placeholder="Google" className="bg-white" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="position" className="text-sm text-gray-500">
            Position
          </label>
          <Input
            id="position"
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
