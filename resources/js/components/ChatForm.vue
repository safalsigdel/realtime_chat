
<template>
    <div class="input-group">
        <input style="margin-top:12px;" id="btn-input" type="text" name="message" class="form-control input-sm" placeholder="Type your message here..." v-model="newMessage" @keyup.enter="sendMessage">
        <div>&nbsp;</div>

        <span class="input-group-btn" style="margin-top:12px;">
            <button  class="btn btn-primary bt-md" style="background:#3C5A99" id="btn-chat" @click="sendMessage">
                Send
            </button>
            <div>&nbsp;</div>
        </span>
    </div>
</template>

<script>
    export default {
        props: ['user'],

        data() {
            return {
                newMessage: ''
            }
        },

        methods: {
            sendMessage() {
                if (!this.isEmptyOrSpaces(this.newMessage)) {
                    this.$emit('messagesent', {
                        user: this.user,
                        message: this.newMessage
                    });

                    this.newMessage = ''
                }
            },

            isEmptyOrSpaces(str){

                return str === null || str.match(/^ *$/) !== null;
            }
        },
    }
</script>