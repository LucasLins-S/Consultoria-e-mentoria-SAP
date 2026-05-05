import { TfiEmail } from "react-icons/tfi";
import { FaSquarePhone } from "react-icons/fa6";

export default function Contact({ className = "" }: { className?: string }) {
	return (
		<div className={`flex justify-center gap-10 ${className}`}>
			<div className="flex items-center gap-2">
				<TfiEmail size={22}/>

				<span className="font-bold text-xl">
					contato@lucas-lins.com
				</span>
			</div>
			
			<div className="flex items-center gap-2">
				<FaSquarePhone size={22}/>

				<span className="font-bold text-xl">
					+55 11 99499 7625
				</span>
			</div>
			
		</div>
	);
}