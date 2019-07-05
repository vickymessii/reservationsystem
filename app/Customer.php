<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table="customers";
    protected $fillable =['first_name','last_name','address','city','phone_number','fax','email'];
}
