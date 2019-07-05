<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $table="bookings";
    protected $fillable =['customer_id','hotel_id','room_id'];
}
