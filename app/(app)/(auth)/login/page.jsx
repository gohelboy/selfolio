"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { routes } from "@/utils/routes";
import { useLogin } from "../authQueries";

const Login = () => {
  const router = useRouter();
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const { mutate, isPending, data, isSuccess } = useLogin();

  useEffect(() => {
    if (isSuccess && data.status) {
      localStorage.setItem("user", JSON.stringify(data.data));
      router.push(routes.home);
    }
  }, [isSuccess, data, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const register = () => {
    mutate(details);
  };

  return (
    <section className="h-screen flex flex-col gap-2 items-center justify-center">
      <h1 className="text-3xl font-bold">Login</h1>
      <div className="flex flex-col gap-2 ">
        <input
          type="email"
          name="email"
          placeholder="email"
          className="h-10 p-4 rounded-xl"
          value={details.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="h-10 p-4 rounded-xl"
          value={details.password}
          onChange={handleChange}
        />
        <button
          disabled={isPending}
          className="bg-slate-700 text-white p-4 rounded-xl hover:bg-slate-500 transition-all"
          onClick={register}
        >
          {isPending ? "Loading..." : "Submit"}
        </button>
      </div>
      <span>
        Create a new account{" "}
        <Link href={routes.register} className="underline text-blue-700">
          click here
        </Link>
      </span>
    </section>
  );
};

export default Login;
