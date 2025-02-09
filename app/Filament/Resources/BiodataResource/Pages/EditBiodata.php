<?php

namespace App\Filament\Resources\BiodataResource\Pages;

use App\Filament\Resources\BiodataResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditBiodata extends EditRecord
{
    protected static string $resource = BiodataResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
