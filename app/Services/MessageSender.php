<?php

namespace App\Services;

use App\Models\Book;
use App\Models\User;
use Illuminate\Support\Facades\Log;

class MessageSender
{
    public function notifyAvailability(Book $book, User $user): void
    {
        if ($book->isAvailable()) {
            $message = "El Libro'{$book->name}' de {$book->author} esta disponible ahora!.";
            $this->sendMessage($user, $message);
        }
    }

    protected function sendMessage(User $user, string $message): void
    {
        Log::info("Simulación de Mensage", [
            'to' => $user->name,
            'email' => $user->email,
            'message' => $message,
            'channels' => ['WhatsApp', 'Telegram', 'Facebook Messenger'],
            'sent_at' => now()->toDateTimeString(),
        ]);
    }
}
