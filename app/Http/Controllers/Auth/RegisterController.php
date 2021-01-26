<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{

    use RegistersUsers;

    protected $redirectTo = RouteServiceProvider::HOME;


    public function __construct()
    {
        $this->middleware('guest');
    }

    protected function create(Request $request)
    {
        $request->validate([
            'first_name' => ['required'],
            'last_name' => ['required'],
            'zip' => ['required'],
            'county' => ['required'],
            'city' => ['required'],
            'email' => ['required', 'email', 'unique:users'],
            'password' =>['required', 'min:6', 'confirmed']
        ]);

        User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'county' => $request->county,
            'city' => $request->city,
            'zip' => $request->zip,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);
    }
}
