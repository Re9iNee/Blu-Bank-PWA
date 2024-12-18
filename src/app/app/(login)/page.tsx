import Image from "next/image";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import tr from "../translation.json";
import { TbFaceId } from "react-icons/tb";

export default function AppHomepage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-3">
      <header className="flex w-full items-center justify-between">
        <div />

        <Image alt="Blu logo" width={100} height={40} src={"/blu-bank.png"} />

        <BsFillQuestionCircleFill className="text-blue-500" />
      </header>

      <main className="flex w-full flex-col items-center gap-6 text-center">
        <section aria-labelledby="user info" className="">
          <div className="grid place-items-center rounded-full border p-6">
            <CiUser aria-hidden className="text-4xl text-blue-400" />
          </div>
          <p
            aria-labelledby="name"
            className="text-xl font-bold text-slate-700"
          >
            {tr.name}
          </p>
          <p aria-labelledby="username" dir="ltr" className="text-slate-400">
            @{tr.username}
          </p>
        </section>

        <input
          type="password"
          placeholder={tr.password}
          className="w-full rounded-sm bg-slate-100 p-3 placeholder:text-lg placeholder:font-medium placeholder:text-slate-300"
        />

        <button className="flex w-full items-center justify-center gap-2 bg-blue-500 text-lg font-medium text-white">
          <TbFaceId />
          {tr.login}
        </button>
      </main>

      <footer>
        <p className="text-blue-400">{tr.logout}</p>
      </footer>
    </div>
  );
}
