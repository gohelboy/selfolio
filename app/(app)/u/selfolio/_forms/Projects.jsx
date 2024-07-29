import GrayBlock from "@/app/_components/dashboard/GrayBlock";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, ImageUp, Pencil, Plus } from "lucide-react";
import React, { useState } from "react";

const initialValues = { degree: "", institution: "", graduationYear: "" };
const Projects = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formGroup, setFormGroup] = useState([initialValues]);

  const AddNewProjectDialog = () => {
    return (
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger>
          <Button variant="outline" size="icon">
            <Plus size={14} />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Project</DialogTitle>
            <DialogDescription>
              <AddNewProjectLayout />
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
          <h1 className="text-xl font-bold text-gray-700">Projects</h1>
          <p className="text-gray-500 text-sm">Add your projects.</p>
        </div>
        <div className="flex gap-2">
          <AddNewProjectDialog />
          <Button variant="brown" size="icon">
            <Check size={14} />
          </Button>
        </div>
      </div>

      <GrayBlock>
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 4 }).map((card, i) => (
            <ProjectCard key={i} setIsDialogOpen={setIsDialogOpen} />
          ))}
        </div>
      </GrayBlock>
    </div>
  );
};

export default Projects;

const ProjectCard = ({ setIsDialogOpen }) => {
  return (
    <div className="group relative flex flex-col border border-gray-200 p-2 rounded-lg bg-white overflow-hidden">
      <button
        onClick={() => setIsDialogOpen(true)}
        className="flex scale-0 group-hover:scale-100 transition-all duration-200 items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/70 w-full h-full"
      >
        <Pencil />
      </button>
      <div className="h-36 bg-slate-50 rounded-sm"></div>
      <h1 className="text-lg mt-2 text-gray-700">Sample project</h1>
      <p className="text-xs text-gray-500">
        Ensure that Input and Button are correctly imported from...
      </p>
    </div>
  );
};

const AddNewProjectLayout = () => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex flex-col gap-3">
        <div className="h-48 rounded-md bg-gray-100 flex items-center justify-center">
          <ImageUp size={38} />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm text-gray-500">
            Project Name
          </label>
          <Input
            id="name"
            placeholder="Ex: Tracker system"
            className="bg-white"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="description" className="text-sm text-gray-500">
            Description
          </label>
          <Textarea
            rows={5}
            id="description"
            placeholder="Test project description"
            className="bg-white"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="techs" className="text-sm text-gray-500">
            Technologies
          </label>
          <Input id="techs" placeholder="React" className="bg-white" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="link" className="text-sm text-gray-500">
            Link
          </label>
          <Input id="link" placeholder="https://" className="bg-white" />
        </div>
      </div>
    </div>
  );
};
