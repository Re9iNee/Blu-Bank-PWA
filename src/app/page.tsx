import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      Install PWA - or open this application on your phone!
      <Link
        className="p-4 bg-black rounded-lg text-slate-50 px-12"
        href={"/app"}
      >
        launch app
      </Link>
    </div>
  );
}
