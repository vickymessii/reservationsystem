<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HotelDetail extends Model
{
    protected $table="hotel_details";
    protected $fillable =['name','address','city','state','zip_code','phone_number','email','image'];
}
