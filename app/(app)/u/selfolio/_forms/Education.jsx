import GrayBlock from "@/app/_components/dashboard/GrayBlock";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Plus } from "lucide-react";
import React, { useState } from "react";

const Education = () => {
  const [formGroup, setFormGroup] = useState([
    { degree: "", institution: "", graduationYear: "" },
  ]);

  const addNewEducation = () => {
    setFormGroup([
      ...formGroup,
      { degree: "", institution: "", graduationYear: "" },
    ]);
  };

  return (
    <div className="w-full">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-700">Education</h1>
          <p className="text-gray-500 text-sm">Add details about education.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={addNewEducation}>
            <Plus size={14} />
          </Button>
          <Button variant="brown" size="icon" onClick={addNewEducation}>
            <Check size={14} />
          </Button>
        </div>
      </div>
      <GrayBlock>
        <div className="grid grid-cols-2 gap-4">
          {formGroup?.map((form, i) => {
            return (
              <div key={i}>
                <div>
                  <label htmlFor="name" className="text-sm text-gray-500">
                    Degree
                  </label>
                  <Input
                    id="degree"
                    placeholder="Bachelor of Science"
                    className="bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="text-sm text-gray-500">
                    Institution
                  </label>
                  <Input
                    id="institution"
                    placeholder="University of California, Berkeley"
                    className="bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="text-sm text-gray-500">
                    Year
                  </label>
                  <Input
                    id="year"
                    placeholder="2010-2014"
                    className="bg-white"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </GrayBlock>
    </div>
  );
};

export default Education;
