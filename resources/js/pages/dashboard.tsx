import { Head, Link, usePage } from '@inertiajs/react';
import { BookOpen, Layers } from 'lucide-react';
import Heading from '@/components/heading';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';
import { dashboard } from '@/routes';
import type { Auth } from '@/types';

type PageProps = {
    auth: Auth;
};

export default function Dashboard() {
    const { auth } = usePage<PageProps>().props;

    return (
        <>
            <Head title="Panel de Control" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 md:p-8">
                <Heading
                    title={`¡Hola, ${auth.user.name}!`}
                    description="Bienvenido de nuevo a tu panel de gestión de la biblioteca."
                />

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Link href="/books" className="block">
                        <Card className="cursor-pointer border-sidebar-border/70 transition-colors hover:bg-sidebar-accent/50 dark:border-sidebar-border">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <div className="rounded-lg bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                                        <BookOpen className="size-5" />
                                    </div>
                                    <CardTitle>Libros</CardTitle>
                                </div>
                                <CardDescription className="mt-2 text-sm leading-relaxed">
                                    Gestiona la colección de tu biblioteca,
                                    realiza el seguimiento de los libros
                                    prestados y añade nuevos títulos al sistema.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </Link>

                    <Link href="/categories" className="block">
                        <Card className="cursor-pointer border-sidebar-border/70 transition-colors hover:bg-sidebar-accent/50 dark:border-sidebar-border">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <div className="rounded-lg bg-purple-100 p-2 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                                        <Layers className="size-5" />
                                    </div>
                                    <CardTitle>Categorías</CardTitle>
                                </div>
                                <CardDescription className="mt-2 text-sm leading-relaxed">
                                    Organiza tus libros en categorías para que
                                    sean más fáciles de encontrar y gestionar
                                    por tus usuarios.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </Link>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Panel de Control',
            href: dashboard(),
        },
    ],
};
