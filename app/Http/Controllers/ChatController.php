<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Events\MessageSent;
use App\Message;


class ChatController extends Controller
{
    public function __construct()
    {
    	$this->middleware('auth');
    }

    public function index()
    {
    	return view('chat');
    }

    public function fetchMessages()
    {
    	return Message::with('user')->latest()->get();
    }
    public function sendMessage(Request $request)
    {
    	$user = Auth::user();
        
        if (strpos($request->message, 'image/png;base64')||strpos($request->message, 'image/jpg;base64')||strpos($request->message, 'image/jpeg;base64')) {

        $image = $request->message;
        $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
        \Image::make($request->message)->save(public_path('images/').$name);

        $message = $user->messages()->create(['message'=>$name]);

        
        }else{

        $message = $user->messages()->create(['message'=>$request->message]);  

        } 

    	broadcast(new MessageSent($user,$message))->toOthers();
        return json_encode(array('user'=>auth()->user(),'message'=>$message->message));
    	// $returnedData = $this->getReturnedData($message->message,auth()->user());
    }


    public function getTotalMessage(){

        return Message::where('user_id',auth()->user()->id)->count('message');

    }

    public function getCurrentUser ()
    {
        return auth()->user()->id;
    }
    // public function getReturnedData($message,$user){
    //     $data = echo 
    // }
}
