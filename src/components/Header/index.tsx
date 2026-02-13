import Button from "../Button";
import Nav from "../Nav";

export default function Header() {
  return (
    <header>
      <div className="
        flex h-18 justify-between items-center
        px-20 py-15
      ">
        {/* Logo */}
        <img src="/lucas-lins-logo-blue.png" alt="Lucas Lins Logo"
          className="
            h-10
          "
        />

        {/* Nav */}
        <Nav firstLinkHighlighted/>

        {/* CTA */}
        <Button
          className="bg-[#0A6ED1] rounded-md text-white font-extrabold"
          text="Contratar-me"
        />
      </div>
    </header>
  );
}