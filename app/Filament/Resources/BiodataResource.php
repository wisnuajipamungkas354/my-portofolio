<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BiodataResource\Pages;
use App\Filament\Resources\BiodataResource\RelationManagers;
use App\Models\Biodata;
use Filament\Forms;
use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class BiodataResource extends Resource
{
    protected static ?string $model = Biodata::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                FileUpload::make('foto_profil')
                    ->label('Foto Profil')
                    ->image()
                    ->imageEditor()
                    ->avatar()
                    ->circleCropper()
                    ->directory('foto-profil')
                    ->visibility('public'),
                FileUpload::make('foto_tambahan')
                    ->label('Foto Tambahan')
                    ->image()
                    ->directory('foto-tambahan')
                    ->visibility('public'),
                TextInput::make('nama')
                    ->label('Nama Lengkap')
                    ->placeholder('Masukkan Nama Lengkap'),
                Select::make('jk')
                    ->label('Jenis Kelamin')
                    ->options(['L' => 'Laki-laki', 'P' => 'Perempuan']),
                TextInput::make('kota_lahir')
                    ->label('Kota Lahir')
                    ->placeholder('Masukkan Kota Lahir'),
                DatePicker::make('tgl_lahir')
                    ->label('Tanggal Lahir'),
                Textarea::make('alamat')
                    ->label('Alamat')
                    ->placeholder('Masukkan Alamat'),
                Textarea::make('deskripsi')
                    ->label('Deskripsi')
                    ->placeholder('Masukkan Deskripsi'),
                TextInput::make('email')
                    ->label('Email')
                    ->type('email')
                    ->placeholder('Masukkan Email'),
                TextInput::make('wa')
                    ->label('WhatsApp')
                    ->placeholder('Masukkan Nomor WhatsApp')
                    ->prefix('+62'),
                TextInput::make('linkedin')
                    ->label('Linkedin')
                    ->prefix('https://www.linkedin.com/in/')
                    ->placeholder('Masukkan Username Linkedin'),
                TextInput::make('github')
                    ->label('GitHub')
                    ->placeholder('Masukkan Profile GitHub')
                    ->prefix('https://www.github.com/'),
                TextInput::make('instagram')
                    ->label('Instagram')
                    ->placeholder('Masukkan Username Instagram')
                    ->prefix('https://www.instagram.com/'),
                FileUpload::make('cv')
                    ->label('Upload CV')
                    ->acceptedFileTypes(['application/pdf'])
                    ->maxSize(2048)
                    ->preserveFilenames()
                    ->disk('public')
                    ->directory('cv')
                    ->visibility('public'),
                Checkbox::make('is_active')
                    ->label('Aktifkan Biodata ini')
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('foto_profil')
                    ->label('Foto Profil'),
                TextColumn::make('nama')
                    ->label('Nama Lengkap'),
                TextColumn::make('jk')
                    ->label('L/P'),
                TextColumn::make('description')
                    ->label('Description'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBiodatas::route('/'),
            'create' => Pages\CreateBiodata::route('/create'),
            'edit' => Pages\EditBiodata::route('/{record}/edit'),
        ];
    }
}
