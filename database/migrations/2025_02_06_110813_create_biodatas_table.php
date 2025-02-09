<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('biodatas', function (Blueprint $table) {
            $table->id();
            $table->string('foto_profil');
            $table->string('foto_tambahan');
            $table->string('nama');
            $table->enum('jk', ['L', 'P']);
            $table->string('kota_lahir');
            $table->date('tgl_lahir');
            $table->text('deskripsi');
            $table->text('alamat');
            $table->string('email');
            $table->string('wa');
            $table->string('linkedin');
            $table->string('github');
            $table->string('instagram');
            $table->text('cv');
            $table->boolean('is_active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('biodatas');
    }
};
