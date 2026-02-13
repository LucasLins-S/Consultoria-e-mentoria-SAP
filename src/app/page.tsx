import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Steps from "@/components/Steps";

export default function Home() {
	return (
		<div className="bg-[#F5F6F7]">
			<Header/>
				<Hero />
				{/* <Steps /> */}
				<Services />
				<About />
			<Footer	/>
		</div>
	);
}
