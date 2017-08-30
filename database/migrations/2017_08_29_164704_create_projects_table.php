<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('url')->nullable();
            $table->date('start_date');
            $table->date('end_date')->nullable();
            $table->longText('html');
            $table->string('project_image')->nullable();
            $table->integer('timeline_id');
            $table->timestamps();
        });

        Schema::create('project_technology', function(Blueprint $table) {
            $table->integer('project_id');
            $table->integer('technology_id');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
        Schema::dropIfExists('project_technology');
    }
}
