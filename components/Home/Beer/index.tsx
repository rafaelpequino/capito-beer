import Image from "next/image";


export default function Beer() {
    return (
        <section className="bg-[var(--black)] flex items-center justify-center py-16">
            <div className="w-full max-w-[1280px] text-[var(--white)] flex gap-6 items-center">
                <div className="">
                    <h2 className="font-black mb-4">Capito Beer</h2>
                    <p>A cerveja é uma das bebidas mais antigas da humanidade, com registros que remontam a mais de 7.000 anos. Seu surgimento aconteceu de forma quase acidental, quando os povos da Mesopotâmia perceberam que cereais deixados na água fermentavam naturalmente, criando uma bebida saborosa e levemente alcoólica.</p>
                    <p>Os egípcios aperfeiçoaram a produção, tornando a cerveja parte essencial da sua cultura e até um item de pagamento para trabalhadores das pirâmides. Já os monges medievais trouxeram inovações, como o uso do lúpulo, responsável pelo sabor e aroma característicos da cerveja moderna.</p>
                    <p>Com a Revolução Industrial, a produção se expandiu, tornando a cerveja acessível ao mundo todo. Hoje, ela é sinônimo de tradição, arte e celebração, conquistando apaixonados por diferentes estilos e sabores em cada canto do planeta.</p>
                </div>
                <div className="min-w-[500px]">
                    <Image 
                        src="/beer2.jpg"
                        alt="Foto de um brinde com copos de cerveja"
                        width={500}
                        height={0}
                    />
                </div>
            </div>
        </section>
    );
}
