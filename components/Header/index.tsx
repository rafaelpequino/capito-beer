'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {
    Sheet,
    SheetTrigger,
    SheetContent,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import {
    LogOut,
    Headset,
    SquareMenu,
    ChevronDown,
    Menu,
} from "lucide-react"
import { tooltipItems } from "./items"
import {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui/tooltip"

export default function Header() {
    const [open, setOpen] = useState(false)
    const [submenuOpen, setSubmenuOpen] = useState(false)
    const [submenuAvaliacoesOpen, setSubmenuAvaliacoesOpen] = useState(false)

    const outrosProjetosSubitems = [
        { label: "1º semestre", href: "/area-restrita/aluno/outros-projetos/1" },
        { label: "3º semestre", href: "/area-restrita/aluno/outros-projetos/3" },
        { label: "5º semestre", href: "/area-restrita/aluno/outros-projetos/5" },
        { label: "7º semestre", href: "/area-restrita/aluno/outros-projetos/7" },
        { label: "9º semestre", href: "/area-restrita/aluno/outros-projetos/9" },
    ]

    const avaliacoesSubitems = [
        { label: "Banca", href: "/area-restrita/aluno/ver-avaliacoes/banca" },
        { label: "Feira", href: "/area-restrita/aluno/ver-avaliacoes/feira" },
    ]

    return (
        <header className="fixed top-0 z-30 w-full px-4 py-2 border-b bg-[var(--black)] flex items-center justify-between sm:px-6">
            <Image
                src="/Logo_CapitoBeer_png.png"
                alt="Logo dos cursos de Engenharia do Senac Santo Amaro"
                width={70}
                height={0}
            />
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline" className="cursor-pointer">
                        <Menu className="w-5 h-5" />
                        <span className="sr-only">Abrir Sidebar</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-[var(--black)] border-none text-white sm:max-w-xs p-6">
                    <div className="h-full overflow-y-auto pr-1">
                        <nav className="flex flex-col justify-around gap-2 h-full">
                            {tooltipItems.map((item) => {
                                return (
                                    <Link
                                        key={item.id}
                                        href={item.link}
                                        onClick={() => setOpen(false)}
                                        className={`flex items-center gap-4 px-3 py-2 rounded-md text-lg font-medium`}
                                    >
                                        <item.icon className="w-8 h-8 mr-2" />
                                        {item.label}
                                    </Link>
                                )
                            })}
                        </nav>
                    </div>
                </SheetContent>
            </Sheet>
        </header>
    )
}