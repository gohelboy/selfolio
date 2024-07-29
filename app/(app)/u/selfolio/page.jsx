"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BookOpenCheck,
  BriefcaseBusiness,
  CircleUser,
  Club,
  Globe,
  GraduationCap,
  Languages,
  Link,
  SquareGanttChart,
  User,
} from "lucide-react";
import Education from "./_forms/Education";
import Experience from "./_forms/Experience";
import Me from "./_forms/Me";
import { useState } from "react";
import Certificate from "./_forms/Certificate";
import Hobby from "./_forms/Hobby";
import Language from "./_forms/Language";
import Social from "./_forms/Social";
import Reference from "./_forms/ Reference";
import Projects from "./_forms/Projects";

const forms = [
  { form: "Me", pos: 1, component: <Me />, icon: <User /> },
  {
    form: "Education",
    pos: 2,
    component: <Education />,
    icon: <GraduationCap />,
  },
  {
    form: "Experience",
    pos: 3,
    component: <Experience />,
    icon: <BriefcaseBusiness />,
  },
  {
    form: "Certificate",
    pos: 4,
    component: <Certificate />,
    icon: <BookOpenCheck />,
  },
  { form: "Hobby", pos: 5, component: <Hobby />, icon: <Club /> },
  { form: "Language", pos: 6, component: <Language />, icon: <Languages /> },
  { form: "Me", pos: 7, component: <Social />, icon: <Link /> },
  { form: "Refrence", pos: 8, component: <Reference />, icon: <CircleUser /> },
  {
    form: "Projects",
    pos: 9,
    component: <Projects />,
    icon: <SquareGanttChart />,
  },
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
