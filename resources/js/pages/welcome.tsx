import { Head, Link, usePage } from '@inertiajs/react';
import { BookOpen, Layers, Users } from 'lucide-react';
import { dashboard, login, register } from '@/routes';
import type { Auth } from '@/types';

type PageProps = {
    auth: Auth;
};

export default function Welcome() {
    const { auth } = usePage<PageProps>().props;

    return (
        <>
            <Head title="Bienvenido" />
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Panel de Control
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Iniciar sesión
                                </Link>
                                <Link
                                    href={register()}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Registrarse
                                </Link>
                            </>
                        )}
                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row">
                        <div className="flex-1 rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-tl-lg lg:rounded-br-none lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                            <h1 className="mb-1 text-xl font-medium">
                                Gestiona tu biblioteca con facilidad
                            </h1>
                            <p className="mb-6 text-sm leading-relaxed text-[#706f6c] dark:text-[#A1A09A]">
                                Library Manager te ayuda a organizar tu
                                colección, hacer un seguimiento de los libros
                                prestados y administrar tu comunidad de lectores
                                en una sola interfaz sencilla.
                            </p>
                            <ul className="mb-8 flex flex-col gap-4">
                                <li className="flex items-start gap-4">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                                        <BookOpen className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-[#1b1b18] dark:text-[#EDEDEC]">
                                            Controla tu colección
                                        </h3>
                                        <p className="text-xs text-[#706f6c] dark:text-[#A1A09A]">
                                            Mantén un inventario detallado de
                                            todos tus libros y su
                                            disponibilidad.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400">
                                        <Layers className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-[#1b1b18] dark:text-[#EDEDEC]">
                                            Organiza por categorías
                                        </h3>
                                        <p className="text-xs text-[#706f6c] dark:text-[#A1A09A]">
                                            Agrupa los libros en categorías
                                            lógicas para que sean más fáciles de
                                            encontrar.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                                        <Users className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-[#1b1b18] dark:text-[#EDEDEC]">
                                            Gestiona los lectores
                                        </h3>
                                        <p className="text-xs text-[#706f6c] dark:text-[#A1A09A]">
                                            Mantén una base de datos de usuarios
                                            y sabe exactamente quién tiene cada
                                            libro.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <ul className="flex gap-3 text-sm leading-normal">
                                <li>
                                    <Link
                                        href={auth.user ? dashboard() : login()}
                                        className="inline-block rounded-sm border border-black bg-[#1b1b18] px-8 py-2 text-sm font-medium text-white transition-colors hover:bg-black dark:border-[#eeeeec] dark:bg-[#eeeeec] dark:text-[#1C1C1A] dark:hover:bg-white"
                                    >
                                        Comenzar
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="relative -mb-px aspect-[335/364] w-full shrink-0 overflow-hidden rounded-t-lg bg-[#f5f3ff] lg:mb-0 lg:-ml-px lg:aspect-auto lg:w-[438px] lg:rounded-t-none lg:rounded-r-lg dark:bg-[#1e1b4b]">
                            <div className="absolute inset-0 flex items-center justify-center opacity-20 dark:opacity-10">
                                <BookOpen className="size-64 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                                <div className="rounded-2xl border border-white/20 bg-white/80 p-4 shadow-2xl backdrop-blur-sm dark:bg-black/40">
                                    <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg">
                                        <BookOpen className="size-8" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-indigo-950 dark:text-indigo-50">
                                        Library Manager
                                    </h2>
                                    <p className="mt-1 text-sm text-indigo-800 dark:text-indigo-200">
                                        Gestión inteligente de colecciones
                                    </p>
                                </div>
                            </div>
                            <div className="absolute inset-0 rounded-t-lg shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-t-none lg:rounded-r-lg dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]"></div>
                        </div>
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
