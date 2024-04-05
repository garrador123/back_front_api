<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Post;

class PostSeeder extends Seeder
{
    public function run()
    {
        // Create 10 posts using factory
        Post::factory(10)->create();
    }
}

