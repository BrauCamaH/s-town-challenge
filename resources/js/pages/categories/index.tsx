import { Head, Link } from '@inertiajs/react';
import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';

export default function Index({ categories }: { categories: any }) {
    return (
        <div className="p-4 md:p-8">
            <Head title="Categories" />
            <div className="mb-6 flex items-center justify-between">
                <Heading
                    title="Categorias"
                    description="Categoriias de Libros"
                />
                <Link href="/categories/create">
                    <Button>Agregar</Button>
                </Link>
            </div>

            <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow dark:border-neutral-800 dark:bg-neutral-900">
                <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-800">
                    <thead className="bg-neutral-50 dark:bg-neutral-800/50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-neutral-500 uppercase">
                                Nombre
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-neutral-500 uppercase">
                                Descripcion
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium tracking-wider text-neutral-500 uppercase">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                        {categories.data.map((category: any) => (
                            <tr key={category.id}>
                                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                    {category.name}
                                </td>
                                <td className="px-6 py-4 text-sm whitespace-nowrap text-neutral-500">
                                    {category.description || '-'}
                                </td>
                                <td className="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
                                    <div className="flex justify-end gap-2">
                                        <Link
                                            href={`/categories/${category.id}/edit`}
                                        >
                                            <Button variant="outline" size="sm">
                                                Editar
                                            </Button>
                                        </Link>
                                        <Link
                                            href={`/categories/${category.id}`}
                                            method="delete"
                                            as="button"
                                        >
                                            <Button
                                                variant="destructive"
                                                size="sm"
                                            >
                                                Eliminar
                                            </Button>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {categories.data.length === 0 && (
                            <tr>
                                <td
                                    colSpan={3}
                                    className="px-6 py-4 text-center text-sm text-neutral-500"
                                >
                                    No categories found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {categories.links.length > 3 && (
                <div className="mt-4 flex flex-wrap gap-1">
                    {categories.links.map((link: any, i: number) => (
                        <Link
                            key={i}
                            href={link.url || '#'}
                            className={`rounded border px-3 py-1 text-sm ${link.active ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900' : 'border-neutral-200 bg-white text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300'} ${!link.url ? 'cursor-not-allowed opacity-50' : 'hover:bg-neutral-50 dark:hover:bg-neutral-800'}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

Index.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Categorias', href: '/categories' },
    ],
};
