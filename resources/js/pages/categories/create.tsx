import { Head, useForm } from '@inertiajs/react';
import Heading from '@/components/heading';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/categories');
    };

    return (
        <div className="max-w-2xl p-4 md:p-8">
            <Head title="Crear Categoria" />
            <Heading
                title="Crear Categoria"
                description="Agregar nueva Categoria"
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
                    <Button disabled={processing}>Crear</Button>
                </div>
            </form>
        </div>
    );
}

Create.layout = {
    breadcrumbs: [
        { title: 'Panel de Control', href: '/dashboard' },
        { title: 'Categorias', href: '/categories' },
        { title: 'Crear', href: '/categories/create' },
    ],
};
