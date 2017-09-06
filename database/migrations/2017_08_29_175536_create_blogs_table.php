<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBlogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blogs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('draft');
            $table->string('blog_image')->nullable();
            $table->longText('html');
            $table->longText('preview_text');
            $table->string('link_name');
            $table->timestamps();
        });

        Schema::create('blog_tag', function(Blueprint $table) {
            $table->integer('tag_ig');
            $table->integer('blog_id');
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
        Schema::dropIfExists('blog_tag');
    }
}
