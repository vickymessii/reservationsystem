<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PriceList extends Model
{
    protected $table="price_lists";
    protected $fillable =['hotel_id','room_id'];
}
