import { Button } from "@/components/ui/button";

export default function Welcome() {
    return (
        <section
            className="px-4 relative mt-18 w-full h-[500px] flex items-center justify-center bg-[url('/img/beer.jpg')] bg-cover bg-center overflow-hidden"
        >
            <div className="absolute inset-0 bg-black/60 z-0" />

            <div className="w-full z-10 max-w-[1280px] text-white">
                <div className="w-full max-w-[500px]">
                    <h1 className="font-black">UM BRINDE AO EXTRAORDINÁRIO</h1>
                    <h3 className="mt-2 mb-4">Cerveja com alma, sabor e história</h3>
                    <Button className="bg-[var(--red)] hover:bg-[var(--red)] cursor-pointer">Venha brindar!</Button>
                </div>
            </div>
        </section>
    );
}
