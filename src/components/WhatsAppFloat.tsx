import { motion } from 'framer-motion';
import { MessageCircleMore } from 'lucide-react';

interface WhatsAppFloatProps {
	phone?: string;
	message?: string;
}

export default function WhatsAppFloat({
	phone = '56933301114',
	message = 'Hola, quiero vender chatarra y necesito cotizacion.',
}: WhatsAppFloatProps) {
	const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

	return (
		<motion.a
			href={href}
			className="whatsapp-float animate-glow"
			aria-label="Cotizar por WhatsApp con Exportandes"
			target="_blank"
			rel="noopener noreferrer"
			animate={{ y: [0, -3, 0] }}
			transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
			whileHover={{ scale: 1.04 }}
		>
			<MessageCircleMore size={20} strokeWidth={1.9} aria-hidden="true" />
			<span className="hidden sm:inline">Cotizar Ahora</span>
		</motion.a>
	);
}
