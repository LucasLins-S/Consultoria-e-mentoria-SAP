import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Timeline from "@/components/Timeline";

export default function Home() {
	return (
		<div className="bg-[#F5F6F7] dark:bg-zinc-950 w-full">
			<Header />
			<Hero />
			<Services />
			<About />
			<Timeline />
			<Contact />
			<Footer />
		</div>
	);
}
