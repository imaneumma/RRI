"use client";
import { CheckBox } from "@mui/icons-material";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  function authenticate() {
    router.replace("/dashboard");
  }

  return (
    <div>
      <Card
        color="warning"
        invertedColors={false}
        orientation="vertical"
        size="lg"
        variant="plain"
        className="px-8 py-6"
      >
        <h1 className="text-6xl tracking-wide font-light font-sans uppercase text-center">
          Login
        </h1>
        <div className="grid grid-cols-3 gap-2 items-baseline mt-6">
          <label className="inline-block align-baseline">User name: </label>
          <input className="col-span-2 border p-2"></input>
        </div>
        <div className="grid grid-cols-3 gap-2 items-baseline">
          <label className="inline-block align-baseline">Password: </label>
          <input className="col-span-2 border p-2" type="password"></input>
        </div>
        <div className="flex flex-row gap-2 items-center place-content-center">
          <CheckBox></CheckBox>
          <label>remember me</label>
        </div>
        <div className="flex place-content-center mt-6">
          <Button
            className="bg-amber-900  hover:bg-amber-500 px-8 py-2 font-light text-lg"
            onClick={authenticate}
          >
            Login
          </Button>
        </div>
      </Card>
    </div>
  );
}
