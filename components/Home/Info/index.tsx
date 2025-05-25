import { Beer, Medal, Truck } from "lucide-react";

export default function Info() {
    return (
        <section className="bg-[var(--orange)] flex items-center justify-center py-6">
            <div className="w-full max-w-[1280px] grid grid-cols-1 sm:grid-cols-3">
                <div className="w-full flex gap-4 items-center justify-center sm:justify-start">
                    <Medal className="w-15 h-20" />
                    <span className="text-lg">A melhor cerveja de São Paulo</span>
                </div>
                <div className="w-full flex gap-4 items-center justify-center sm:justify-center">
                    <Truck className="w-15 h-20" />
                    <span className="text-lg">Entrega para todo o Brasil</span>
                </div>
                <div className="w-full flex gap-4 items-center justify-center sm:justify-end">
                    <Beer className="w-15 h-15" />
                    <span className="text-lg">Experiência... sabor... cerveja...</span>
                </div>
            </div>
        </section>
    );
}
