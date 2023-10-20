import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className={S.main}>
      <h1 className="text-4xl">Hello World!</h1>
      <Link href="/about">Go to About Page</Link>
    </main>
  );
}
