import Link from "next/link";
import RegisterCredentials from "./app/RegisterCredentials";

export default function Home() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center gap-4"
      dir="ltr"
    >
      Install PWA - or open this application on your phone!
      <Link
        className="rounded-lg bg-black p-4 px-12 text-slate-50"
        href={"/app"}
      >
        launch app
      </Link>
      <RegisterCredentials />
    </div>
  );
}
