import { motion } from 'framer-motion';
import { Cable, Coins, Factory, Recycle, ScanLine } from 'lucide-react';

type MetalIcon = 'aluminio' | 'cobre' | 'bronce' | 'otros';

interface MetalCardProps {
	title: string;
	description: string;
	bullets: string[];
	icon: MetalIcon;
	badge: string;
}

const iconMap = {
	aluminio: Factory,
	cobre: Cable,
	bronce: Coins,
	otros: Recycle,
} as const;

export default function MetalCard({ title, description, bullets, icon, badge }: MetalCardProps) {
	const Icon = iconMap[icon] ?? ScanLine;

	return (
		<motion.article
			whileHover={{ y: -6, scale: 1.01 }}
			transition={{ type: 'spring', stiffness: 240, damping: 22 }}
			className="metal-card group"
		>
			<div className="mb-5 flex items-start justify-between gap-4">
				<div className="space-y-3">
					<span className="metal-icon-wrap">
						<Icon size={19} strokeWidth={1.8} aria-hidden="true" />
					</span>
					<h3 className="metal-card-title">{title}</h3>
				</div>
				<span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-300">
					{badge}
				</span>
			</div>

			<p className="mb-6 max-w-[42ch] text-sm leading-relaxed text-slate-300">{description}</p>

			<ul className="space-y-2 border-t border-white/10 pt-4">
				{bullets.map((item) => (
					<li key={item} className="metal-list-item flex items-center gap-2">
						<span className="h-1.5 w-1.5 rounded-full bg-accent-green"></span>
						{item}
					</li>
				))}
			</ul>
		</motion.article>
	);
}
