'use client';

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Newsletter() {
    const [consent, setConsent] = useState(false);

    return (
        <section className="bg-black text-white py-20 px-4 w-full flex justify-center overflow-hidden border-b-8 border-[transparent] relative">
            <div className="max-w-[1280px] w-full flex flex-col lg:flex-row justify-between items-center gap-12">
                {/* Texto à esquerda */}
                <div className="max-w-[500px]">
                    <h2 className="text-[2rem] sm:text-[2.5rem] font-extrabold text-[var(--orange)] leading-tight mb-4">
                        Receba novidades <br /> sobre cervejas
                    </h2>
                    <p className="text-[var(--orange)] font-semibold text-base">
                        Assine nossa Newsletter. <span className="font-black">É DE GRAÇA!</span>
                    </p>
                </div>

                {/* Formulário */}
                <form className="w-full max-w-[600px] space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nome completo</Label>
                        <Input id="name" className="bg-[#3a3a3a] border-none text-white" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="nickname">Como você quer ser chamado?</Label>
                        <Input id="nickname" className="bg-[#3a3a3a] border-none text-white" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input id="email" type="email" className="bg-[#3a3a3a] border-none text-white" />
                    </div>

                    <div className="flex items-center space-x-2 pt-2">
                        <Checkbox id="consent" checked={consent} onCheckedChange={(checked) => setConsent(!!checked)} />
                        <Label htmlFor="consent" className="text-[var(--orange)] text-sm">
                            Eu concordo em receber comunicações
                        </Label>
                    </div>

                    <Button
                        type="submit"
                        className="mt-4 w-full bg-[var(--orange)] text-black text-lg font-bold hover:brightness-110 transition"
                    >
                        Assinar
                    </Button>
                </form>
            </div>
        </section>
    );
}
