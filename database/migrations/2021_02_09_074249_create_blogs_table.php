<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBlogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blogs', function (Blueprint $table)
        {
            $table->id();
            $table->string('title');
            $table->string('post');
            $table->string('post_excerpt');
            $table->string('slug')->unique();
            $table->string('featured_image');
            $table->string('meta_description');
            $table->string('views')->default(0);
            $table->timestamps();

            $table
                ->foreignId('user_id')
                ->constrained('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('blogs');
    }
}
