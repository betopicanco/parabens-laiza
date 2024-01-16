"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const [open, setOpen] = useState(false);

    return (
        <main className='flex min-h-screen flex-col items-center justify-between pt-32'>
            <div>
                <div className="text-center">
                    <p>Feliz aniversário meu amor &#10084;</p>
                    <p>Te amo muito</p>
                    <p>Toma um presentinho pra ti</p>
                </div>

                <div className='text-center'>
                    <button
                        className='border-2 border-white py-2 px-4 m-4 rounded-md'
                        onClick={() => setOpen(!open)}
                    >
                        {open ? "Fechar" : "Abrir"}
                    </button>
                </div>

                {open && (
                    <div className='text-center'>
                        <p>Vale 1 tênis</p>
                        <Image
                            src='/tenis-coca.png'
                            width={200}
                            height={200}
                            alt='Picture of the author'
                            className="m-auto pt-4 pb-2"
                        />
                        <span className=" text-xs">* imagem meramente ilustrativa</span>
                    </div>
                )}
            </div>
        </main>
    );
}
