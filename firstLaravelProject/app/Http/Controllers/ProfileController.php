<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Profile;

class ProfileController extends Controller
{
    public function userData(){
        $data = Profile::get();
        return response()->json(['data' => $data]);
        // return $data;
    }
    public function userProfile(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required',
            'address' => 'required',
            'country' => 'required',
            'state' => 'required',
            'pincode' => 'required',
        ]);

        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,
            'country' => $request->country,
            'state' => $request->state,
            'pincode' => $request->pincode,
        ];

        $existingUser = Profile::where('email', $data['email'])->first();

        if ($existingUser) {
            $existingUser->update($data);
            return response()->json(['success' => 'Update Successfully']);
        }

        try {
            // Create a new user profile
            $user = Profile::create($data);
            return response()->json(['success' => 'Register Profile Successfully', 'data' => $data]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Not valid data, please try again'], 500);
        }
    }
}
