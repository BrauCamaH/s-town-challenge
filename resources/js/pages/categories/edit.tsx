import { Head, useForm } from '@inertiajs/react';
import Heading from '@/components/heading';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Edit({ category }: { category: any }) {
    const { data, setData, patch, processing, errors } = useForm({
        name: category.name,
        description: category.description || '',
    });

    const submit = (e) => {
        e.preventDefault();
        patch(`/categories/${category.id}`);
    };

    return (
        <div className="max-w-2xl p-4 md:p-8">
            <Head title="editar categoria" />
            <Heading
                title="editar categoria"
                description="Infomacion de Categoria"
            />

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
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
                    <Label htmlFor="description">Descripcion</Label>
                    <Input
                        id="description"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                    />
                    <InputError message={errors.description} />
                </div>

                <div className="flex items-center gap-4">
                    <Button disabled={processing}>Editar</Button>
                </div>
            </form>
        </div>
    );
}

Edit.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Categorias', href: '/categories' },
        { title: 'Editar', href: '#' },
    ],
};
