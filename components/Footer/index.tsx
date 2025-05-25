import Image from "next/image";
import Link from "next/link";
import {
    Facebook,
    Instagram,
    Youtube,
    X as Twitter
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-12 pb-6 px-6 border-t border-white/10">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-start">
                {/* Logo */}
                <div className="flex justify-center md:justify-start ">
                    <div className="w-[100px] ">
                        <Image
                            src="/Logo_CapitoBeer_png.png"
                            alt="Logo da Capito Beer"
                            width={100}
                            height={100}
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Acesso rápido */}
                <div>
                    <h4 className="font-semibold mb-2">Acesso rápido</h4>
                    <ul className="space-y-1 text-sm underline">
                        <li><Link href="#">Sobre nós</Link></li>
                        <li><Link href="#">A cerveja</Link></li>
                        <li><Link href="#">Delivery</Link></li>
                        <li><Link href="#">Contato</Link></li>
                    </ul>
                </div>

                {/* Redes sociais */}
                <div>
                    <h4 className="font-semibold mb-2">Nos siga nas redes sociais</h4>
                    <ul className="space-y-1 text-sm">
                        <li>
                            <Link href="#" className="flex items-center justify-center md:justify-start gap-2 hover:underline">
                                <Instagram size={16} /> Instagram
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center justify-center md:justify-start gap-2 hover:underline">
                                <Facebook size={16} /> Facebook
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center justify-center md:justify-start gap-2 hover:underline">
                                <Twitter size={16} /> X (Twitter)
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center justify-center md:justify-start gap-2 hover:underline">
                                <Youtube size={16} /> YouTube
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-8 text-sm text-white/70">
                © 2025 Capito Beer. Todos os direitos reservados.
            </div>
        </footer>
    );
}
