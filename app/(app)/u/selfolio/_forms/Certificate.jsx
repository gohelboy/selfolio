import GrayBlock from "@/app/_components/dashboard/GrayBlock";
import { Button } from "@/components/ui/button";
import {
  Building2,
  CalendarFold,
  Check,
  FileSymlink,
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

const initialValues = { issueBy: "", name: "", year: "" };

const Certificate = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formGroup, setFormGroup] = useState([initialValues]);

  const addNewCertificate = () => {
    setFormGroup([...formGroup, initialValues]);
  };

  const AddNewCertificateDialog = () => {
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
              <AddNewCertificateLayout />
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
          <h1 className="text-xl font-bold text-gray-700">Certificate</h1>
          <p className="text-gray-500 text-sm">Add your achieved certificate</p>
        </div>
        <div className="flex gap-2">
          <AddNewCertificateDialog />
          <Button variant="brown" size="icon">
            <Check size={14} />
          </Button>
        </div>
      </div>

      <GrayBlock>
        <div className="grid grid-cols-3 gap-4">
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
                <span>Issued By</span>
              </div>
              <h3 className="text-md w-[90%] ml-6">Hacker rank</h3>
            </div>
            <div>
              <div className="flex items-center gap-1 font-semibold text-gray-600">
                <FileSymlink size={18} />
                <span>Name</span>
              </div>
              <h3 className="text-md ml-6">ReactJs Crash course</h3>
            </div>
            <div>
              <div className="flex items-center gap-1 font-semibold text-gray-600">
                <CalendarFold size={18} />
                <span>Year</span>
              </div>
              <h3 className="text-md ml-6">2022</h3>
            </div>
          </div>
        </div>
      </GrayBlock>
    </div>
  );
};

export default Certificate;

const AddNewCertificateLayout = () => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="issuedBy" className="text-sm text-gray-500">
            Company
          </label>
          <Input id="issuedBy" placeholder="Oracle" className="bg-white" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm text-gray-500">
            Position
          </label>
          <Input
            id="name"
            placeholder="SQL Server"
            className="bg-white"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="year" className="text-sm text-gray-500">
            Year
          </label>
          <Input id="year" placeholder="2010-2014" className="bg-white" />
        </div>
      </div>
    </div>
  );
};
