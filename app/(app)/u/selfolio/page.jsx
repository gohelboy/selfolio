"use client";
import { Button } from "@/components/ui/button";
import { Globe, GraduationCap, User } from "lucide-react";
import React, { useState } from "react";
import Me from "./_forms/Me";
import Education from "./_forms/Education";
import { cn } from "@/lib/utils";

const forms = [
  { form: "Me", pos: 1, component: <Me />, icon: <User /> },
  {
    form: "Education",
    pos: 2,
    component: <Education />,
    icon: <GraduationCap />,
  },
  { form: "Me", pos: 3, component: <Me />, icon: <User /> },
  { form: "Me", pos: 4, component: <Me />, icon: <User /> },
  { form: "Me", pos: 5, component: <Me />, icon: <User /> },
  { form: "Me", pos: 6, component: <Me />, icon: <User /> },
  { form: "Me", pos: 7, component: <Me />, icon: <User /> },
  { form: "Me", pos: 8, component: <Me />, icon: <User /> },
];

const Page = () => {
  const [currentOpenedForm, setCurrentOpenedForm] = useState(forms[0]);

  return (
    <div className="flex flex-col gap-4">
      <TitleMassage />

      <div className="flex gap-4 items-start mt-4">
        <div className="flex flex-col gap-2 cursor-pointer p-1 border border-gray-100 rounded-xl">
          {forms.map((form) => (
            <Button
              key={form.pos}
              size="icon"
              variant="ghost"
              className={cn(
                "active:scale-95",
                form.pos === currentOpenedForm.pos && "bg-gray-100"
              )}
              onClick={() => setCurrentOpenedForm(form)}
            >
              {form.icon}
            </Button>
          ))}
        </div>
        <div className="w-full">{currentOpenedForm.component}</div>
      </div>
    </div>
  );
};

const TitleMassage = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-700">Selfolio</h1>
        <p className="text-gray-500 text-sm">
          Edit your selfolio details here.
        </p>
      </div>
      <Button variant="brown">
        <span className="flex justify-center items-center gap-1">
          Visit <Globe size={18} />
        </span>
      </Button>
    </div>
  );
};

export default Page;
