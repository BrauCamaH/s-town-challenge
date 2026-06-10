import { Head, useForm } from '@inertiajs/react';
import Heading from '@/components/heading';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Create({ categories }: { categories: any[] }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        author: '',
        published_date: '',
        category_ids: [] as number[],
    });

    const submit = (e) => {
        e.preventDefault();
        post('/books');
    };

    const toggleCategory = (id: number) => {
        const newIds = data.category_ids.includes(id)
            ? data.category_ids.filter((i) => i !== id)
            : [...data.category_ids, id];
        setData('category_ids', newIds);
    };

    return (
        <div className="max-w-2xl p-4 md:p-8">
            <Head title="Crear Libro" />
            <Heading title="Crear Libro" description="Agregar Nuevo Libro" />

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="name">Titulo</Label>
                    <Input
                        id="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        autoFocus
                    />
                    <InputError message={errors.name} />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="author">Autor</Label>
                    <Input
                        id="author"
                        value={data.author}
                        onChange={(e) => setData('author', e.target.value)}
                        required
                    />
                    <InputError message={errors.author} />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="published_date">Dia de publicacion</Label>
                    <Input
                        id="published_date"
                        type="date"
                        value={data.published_date}
                        onChange={(e) =>
                            setData('published_date', e.target.value)
                        }
                        required
                    />
                    <InputError message={errors.published_date} />
                </div>

                <div className="space-y-2">
                    <Label>Categorias</Label>
                    <div className="grid grid-cols-2 gap-2 rounded-md border p-3 md:grid-cols-3 dark:border-neutral-800">
                        {categories.map((cat) => (
                            <label
                                key={cat.id}
                                className="flex cursor-pointer items-center gap-2"
                            >
                                <input
                                    type="checkbox"
                                    checked={data.category_ids.includes(cat.id)}
                                    onChange={() => toggleCategory(cat.id)}
                                    className="rounded border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800"
                                />
                                <span className="text-sm">{cat.name}</span>
                            </label>
                        ))}
                    </div>
                    <InputError message={errors.category_ids} />
                </div>

                <div className="flex items-center gap-4">
                    <Button disabled={processing}>Crear</Button>
                </div>
            </form>
        </div>
    );
}

Create.layout = {
    breadcrumbs: [
        { title: 'Panel de Control', href: '/dashboard' },
        { title: 'Libros', href: '/books' },
        { title: 'Crear', href: '/books/create' },
    ],
};
