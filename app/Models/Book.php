<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

#[Fillable(['name', 'author', 'published_date', 'user_id'])]
class Book extends Model
{
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class);
    }

    public function borrower(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'published_date' => 'date',
        ];
    }

    public function isAvailable(): bool
    {
        return is_null($this->user_id);
    }

    public function borrowBy(User $user): void
    {
        $this->user_id = $user->id;
        $this->save();
    }

    public function makeAvailable(): void
    {
        $this->user_id = null;
        $this->save();
    }
}
