
@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Chats</div>

                <div class="panel-body">
                    <chat-messages :messages="messages"></chat-messages>
                </div>
                <div class="panel-footer">
                    <chat-form
                        v-on:MessageSent="addMessage"
                        :user="{{ Auth::user() }}"
                    ></chat-form>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="user-information">
                <div class="basic-information">
                    <p><u>Your basic Information</u></p>
                    <p>Name : {{auth()->user()->name}}</p>
                    <p>Email : {{auth()->user()->email}}</p>
                    <p>Account created : {{auth()->user()->created_at}}</p>
                </div>
                <div class="activity">
                    <p><u>Activity</u></p>
                    <p>Total Message Sent : {{App\Message::where('user_id',auth()->user()->id)->count('message')}}</p>
                    <p>Last Message : <?php $lastMsg =App\Message::where(['user_id'=>auth()->user()->id])->pluck('message');if($lastMsg!='[]'){ echo $lastMsg[intval(count($lastMsg))-1];} ?> </p>
                    <p><?php if(session('userLoggedIn')!=''){echo 'Last Login : '.session('userLoggedIn');} ?></p>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection