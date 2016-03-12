<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

use App\Http\Requests;

class PostController extends Controller
{
    public function get()
    {
        $posts = Post::get();

        return response()->success($posts);
    }
}
