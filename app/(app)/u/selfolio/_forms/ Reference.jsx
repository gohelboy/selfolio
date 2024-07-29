import GrayBlock from "@/app/_components/dashboard/GrayBlock";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Check,
  Mail,
  Milestone,
  Pencil,
  Phone,
  Plus,
  User,
} from "lucide-react";
import { useState } from "react";

const initialValues = { name: "", role: "", email: "", phone: "" };

const Reference = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formGroup, setFormGroup] = useState([initialValues]);

  const AddNewReferenceDialog = () => {
    return (
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger>
          <Button variant="outline" size="icon">
            <Plus size={14} />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Refrence</DialogTitle>
            <DialogDescription>
              <AddNewReferenceLayout />
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
          <h1 className="text-xl font-bold text-gray-700">Reference</h1>
          <p className="text-gray-500 text-sm">Add reference details</p>
        </div>
        <div className="flex gap-2">
          <AddNewReferenceDialog />
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
                <User size={18} />
                <span>Name</span>
              </div>
              <h3 className="text-md w-[90%] ml-6">Clay Jensen</h3>
            </div>
            <div>
              <div className="flex items-center gap-1 font-semibold text-gray-600">
                <Milestone size={18} />
                <span>Role</span>
              </div>
              <h3 className="text-md ml-6">Product Manager</h3>
            </div>
            <div>
              <div className="flex items-center gap-1 font-semibold text-gray-600">
                <Mail size={18} />
                <span>Email</span>
              </div>
              <h3 className="text-md ml-6">clay.jensen@outlook.com</h3>
            </div>
            <div>
              <div className="flex items-center gap-1 font-semibold text-gray-600">
                <Phone size={18} />
                <span>Email</span>
              </div>
              <h3 className="text-md ml-6">+91 87354 36483</h3>
            </div>
          </div>
        </div>
      </GrayBlock>
    </div>
  );
};

export default Reference;

const AddNewReferenceLayout = () => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm text-gray-500">
            Name
          </label>
          <Input id="name" placeholder="Name" className="bg-white" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="role" className="text-sm text-gray-500">
            Role
          </label>
          <Input id="role" placeholder="Role" className="bg-white" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm text-gray-500">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            className="bg-white"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="text-sm text-gray-500">
            Phone
          </label>
          <Input id="phone" placeholder="Phone" className="bg-white" />
        </div>
      </div>
    </div>
  );
};
