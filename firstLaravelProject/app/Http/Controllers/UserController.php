<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function index()
    {
        $data = User::get(['name', 'email', 'created_at']);
        return $data;
        // return view('welcome' , compact('data'));
    }

    public function Register(Request $request)
    {
        $password = $request->password;

        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($password),
        ];

        // Check if email already exists
        if (User::where('email', $data['email'])->exists()) {
            return response()->json(['error' => 'Email already exists'], 400);
        }

        try {
            $user = User::create($data);
            return response()->json(['message' => 'Registration successful']);
        } catch (QueryException $e) {
            return response()->json(['error' => 'Error registering user'], 500);
        }
    }

    public function login(Request $request){
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        $user = User::where('email', $request->email)->first();

        if ($user) {
            if (Hash::check($request->password, $user->password)) {
                return response()->json(['message' => 'Login successful', 'name' => $user->name]);
            } else {
                return response()->json(['error' => 'Incorrect password'], 401);
            }
        } else {
            return response()->json(['error' => 'User not found'], 404);
        }
    }


}
