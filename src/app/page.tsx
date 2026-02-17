import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Timeline from "@/components/Timeline";

export default function Home() {
	return (
		<div className="bg-[#F5F6F7]">
			<Header/>
			<Hero />
			<Services />
			<About />
			<Timeline />
			<Footer	/>
		</div>
	);
}
