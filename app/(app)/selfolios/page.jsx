import Container from "@/app/_components/dashboard/Container";
import Header from "@/app/_components/dashboard/Header";
import Selfolios from "@/app/_components/dashboard/Selfolios";

const page = () => {
  return (
    <main className="flex flex-col items-center">
      <Container>
        <Header />
        <Selfolios />
      </Container>
    </main>
  );
};

export default page;
