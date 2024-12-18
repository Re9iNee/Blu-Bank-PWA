import Image from "next/image";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import tr from "./translation.json";
import { TbFaceId } from "react-icons/tb";

export default function AppHomepage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <header className="flex w-full items-center justify-between">
        <div />

        <Image alt="Blu logo" width={50} height={50} src={"/blu-bank.png"} />

        <BsFillQuestionCircleFill className="" />
      </header>

      <main className="flex w-full flex-col bg-yellow-200 text-center">
        <section
          aria-labelledby="user info"
          className="bg-red-300 bg-opacity-50"
        >
          <CiUser
            width={400}
            height={400}
            aria-hidden
            className="mx-auto rounded-full border"
          />
          <p aria-labelledby="name">{tr.name}</p>
          <p aria-labelledby="username" dir="ltr">
            @{tr.username}
          </p>
        </section>

        <input type="password" placeholder={tr.password} className="w-full" />

        <button className="flex w-full items-center justify-center gap-2 bg-blue-500">
          <TbFaceId />
          {tr.login}
        </button>
      </main>

      <footer>
        <p>{tr.logout}</p>
      </footer>
    </div>
  );
}
