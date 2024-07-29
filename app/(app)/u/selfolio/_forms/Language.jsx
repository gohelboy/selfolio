import GrayBlock from "@/app/_components/dashboard/GrayBlock";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Badge,
  Check,
  ChevronsUpDown,
  Delete,
  Pencil,
  Trash,
} from "lucide-react";
import React from "react";

const languages = [
  {
    value: "Native",
    label: "Native",
  },
  {
    value: "Professional",
    label: "Professional",
  },
  {
    value: "Conversational",
    label: "Conversational",
  },
];

const Language = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  return (
    <div className="w-full">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-700">Language</h1>
          <p className="text-gray-500 text-sm">Add known languages</p>
        </div>
        <div className="flex gap-2">
          <Button variant="brown" size="icon">
            <Check size={14} />
          </Button>
        </div>
      </div>
      <GrayBlock>
        <div className="grid grid-cols-2 gap-7">
          <div className="flex flex-col gap-1">
            <label htmlFor="hobby" className="text-sm text-gray-500">
              Language
            </label>
            <div className="flex items-center gap-2">
              <Input placeholder="English" type="text" className="bg-white" />
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                  >
                    {value
                      ? languages.find((framework) => framework.value === value)
                          ?.label
                      : languages[0].label}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandGroup>
                      <CommandList>
                        <CommandGroup>
                          {languages.map((option) => (
                            <CommandItem
                              key={option.value}
                              value={option.value}
                              onSelect={(currentValue) => {
                                setValue(
                                  currentValue === value ? "" : currentValue
                                );
                                setOpen(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  value === option.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {option.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <Button className="mt-2" variant="brown">
              Add <ArrowRight size={18} />
            </Button>
          </div>

          <div className="w-full">
            <div className="flex flex-col gap-1">
              <div className="text-sm text-gray-500">
                List of Languages you know
              </div>
              <div className="bg-white rounded-lg p-2 flex flex-col gap-2">
                {Array.from({ length: 5 }).map((d, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-3 items-baseline hover:bg-blue-50 p-2 rounded-sm"
                  >
                    <span>Gujarati</span>
                    <span className="text-sm text-gray-500">Native</span>
                    <div className="flex items-center gap-2 justify-end">
                      <Button variant="outline" size="icon" className="size-7">
                        <Pencil className="size-4" />
                      </Button>
                      <Button
                        size="icon"
                        className="size-7 bg-red-600 hover:bg-red-500"
                      >
                        <Trash className="size-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </GrayBlock>
    </div>
  );
};

export default Language;
