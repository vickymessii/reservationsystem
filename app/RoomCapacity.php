<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RoomCapacity extends Model
{
    protected $table="room_capacities";
    protected $fillable =['name'];
}
