<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RoomType extends Model
{
    protected $table="room_types";
    protected $fillable =['name'];
}
