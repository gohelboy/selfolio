import { cn } from "@/lib/utils";

const Container = ({ className, children }) => {
  return <div className={cn("max-w-[61%] w-full", className)}>{children}</div>;
};

export default Container;
