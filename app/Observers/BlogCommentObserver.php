<?php

namespace App\Observers;

use App\Events\CommentCreated;
use App\Events\CommentDeleted;
use App\Events\CommentUpdated;
use App\Models\BlogComment;
use function broadcast;

class BlogCommentObserver
{
    /**
     * Listen to the BlogComment created event.
     *
     * @param  BlogComment $blogComment
     * @return void
     */
    public function created(BlogComment $blogComment)
    {
        broadcast(new CommentCreated($blogComment))->toOthers();
    }

    /**
     * Listen to the BlogComment created event.
     *
     * @param  BlogComment $blogComment
     * @return void
     */
    public function updated(BlogComment $blogComment)
    {
        broadcast(new CommentUpdated($blogComment))->toOthers();
    }


    /**
     * Listen to the BlogComment deleting event.
     *
     * @param  BlogComment $blogComment
     * @return void
     */
    public function deleting(BlogComment $blogComment)
    {
        broadcast(new CommentDeleted($blogComment))->toOthers();
    }
}