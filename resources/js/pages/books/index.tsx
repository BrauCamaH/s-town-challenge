import { Head, Link } from '@inertiajs/react';
import Heading from '@/components/heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Index({ books }: { books: any }) {
    return (
        <div className="p-4 md:p-8">
            <Head title="Books" />
            <div className="mb-6 flex items-center justify-between">
                <Heading title="Libros" description="Manejar Libreria" />
                <Link href="/books/create">
                    <Button>Agregar</Button>
                </Link>
            </div>

            <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow dark:border-neutral-800 dark:bg-neutral-900">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-800">
                        <thead className="bg-neutral-50 dark:bg-neutral-800/50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-neutral-500 uppercase">
                                    Titulo / Autor
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-neutral-500 uppercase">
                                    Categorias
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-neutral-500 uppercase">
                                    Estatus
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium tracking-wider text-neutral-500 uppercase">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                            {books.data.map((book: any) => (
                                <tr key={book.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                                            {book.name}
                                        </div>
                                        <div className="text-xs text-neutral-500 dark:text-neutral-400">
                                            {book.author}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-wrap gap-1">
                                            {book.categories.map((cat: any) => (
                                                <Badge
                                                    key={cat.id}
                                                    variant="outline"
                                                    className="text-[10px]"
                                                >
                                                    {cat.name}
                                                </Badge>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {book.user_id ? (
                                            <div className="flex flex-col">
                                                <Badge
                                                    variant="destructive"
                                                    className="w-fit"
                                                >
                                                    Prestado
                                                </Badge>
                                                <span className="mt-1 text-[10px] text-neutral-500">
                                                    a {book.borrower?.name}
                                                </span>
                                            </div>
                                        ) : (
                                            <Badge
                                                variant="default"
                                                className="border-green-200 bg-green-100 text-green-800 dark:border-green-800 dark:bg-green-900/30 dark:text-green-400"
                                            >
                                                Disponible
                                            </Badge>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
                                        <div className="flex items-center justify-end gap-2">
                                            {!book.user_id ? (
                                                <div></div>
                                            ) : (
                                                <Link
                                                    href={`/books/${book.id}/return`}
                                                    method="post"
                                                    as="button"
                                                >
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                    >
                                                        Return
                                                    </Button>
                                                </Link>
                                            )}
                                            <Link
                                                href={`/books/${book.id}/edit`}
                                            >
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                >
                                                    Edit
                                                </Button>
                                            </Link>
                                            <Link
                                                href={`/books/${book.id}`}
                                                method="delete"
                                                as="button"
                                            >
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="text-red-600"
                                                >
                                                    Delete
                                                </Button>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {books.data.length === 0 && (
                                <tr>
                                    <td
                                        colSpan={4}
                                        className="px-6 py-4 text-center text-sm text-neutral-500"
                                    >
                                        No books found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {books.links.length > 3 && (
                <div className="mt-4 flex flex-wrap gap-1">
                    {books.links.map((link: any, i: number) => (
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
        { title: 'Libros', href: '/books' },
    ],
};
