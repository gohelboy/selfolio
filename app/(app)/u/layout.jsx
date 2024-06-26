import Container from "@/app/_components/dashboard/Container";
import Header from "@/app/_components/dashboard/Header";
import Sidebar from "@/app/_components/dashboard/Sidebar";

import React from "react";

const layout = ({ children }) => {
  return (
    <main className="flex flex-col items-center h-screen">
      <Container>
        <Header />
        <div className="flex gap-2">
          <Sidebar />
          <section className="overflow-hidden w-full p-2 pt-0">
            {children}
          </section>
        </div>
      </Container>
    </main>
  );
};

export default layout;
