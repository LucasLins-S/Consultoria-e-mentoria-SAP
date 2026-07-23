import Nav from "../Nav";
import Social from "../Social";
import Contact from "../ContactInfo";
import Dev from "../Dev";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="h-106.5 py-10 bg-[#e3e3e3] dark:bg-zinc-950">
      <div className="flex justify-center items-center flex-col  space-y-10">

        <Image
          src="/lucas-lins-logo-blue.png"
          alt="Lucas Lins Logo"
          width={160}
          height={40}
          className="h-10 w-auto"
        />

        <Nav className="flex-wrap gap-4 mx-6 justify-center" />

        <Social />

        <Contact className="flex-wrap" />

        <Dev />
      </div>
    </footer>
  );
}