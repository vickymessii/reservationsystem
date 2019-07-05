<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RoomManager extends Model
{
    protected $table="room_managers";
    protected $fillable =['name','room_type_id','room_capacity_id','image'];
}
