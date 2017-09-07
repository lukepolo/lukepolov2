<?php

namespace App\Events;

use App\Models\BlogComment;
use Illuminate\Broadcasting\Channel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;

class CommentUpdated implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets;

    public $comment;

    /**
     * Create a new event instance.
     *
     * @param BlogComment $blogComment
     */
    public function __construct(BlogComment $blogComment)
    {
        $this->comment = BlogComment::without('children')->findOrFail($blogComment->id);
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('blog.'.$this->comment->blog_id);
    }
}
