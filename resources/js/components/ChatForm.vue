
<template>
    <div class="input-group">
        <input style="margin-top:12px;" id="btn-input" type="text" name="message" class="form-control input-sm" placeholder="Type your message here..." v-model="newMessage" @keyup.enter="sendMessage">

         <input style="margin-top:12px;" id="btn-input2" type="file" @keyup.enter="sendMessage" accept=".jpeg,.png,.jpg"   class="form-control input-sm" v-on:change="imageChange">

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
    import store from '../store';
    export default {
        props: ['user'],

        data() {
            return {
                newMessage: '',
                imageUpload:''
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
                    axios.get('/count-message').then((response)=>{
                        store.commit('setMessageCount',response.data);
                        localStorage.setItem('initialCount',response.data);
                    }).catch((error)=>{
                        console.log(error);
                    });

                    axios.get('/get-current-user').then((response)=>{
                        localStorage.setItem('currentUserId',response.data);
                    }).catch((error)=>{
                        console.log(error);
                    })
                }
                if (!this.isEmptyOrSpaces(this.imageUpload)) {
                    this.$emit('messagesent', {
                        user: this.user,
                        message: this.imageUpload
                    });

                    this.imageUpload = ' ';
                    axios.get('/count-message').then((response)=>{
                        store.commit('setMessageCount',response.data);
                        localStorage.setItem('initialCount',response.data);
                    }).catch((error)=>{
                        console.log(error);
                    });

                    axios.get('/get-current-user').then((response)=>{
                        localStorage.setItem('currentUserId',response.data);
                    }).catch((error)=>{
                        console.log(error);
                    })
                }
            },
            imageChange(e){
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
            },

            createImage(file) {
                let reader = new FileReader();
                let vm = this;
                reader.onload = (e) => {
                    vm.imageUpload = e.target.result;
                };
                reader.readAsDataURL(file);
            },

            isEmptyOrSpaces(str){

                return str === null || str.match(/^ *$/) !== null;
            },
        },
        created(){
            axios.get('/count-message').then((response)=>{
                        localStorage.setItem('initialCount',response.data);
                    }).catch((error)=>{
                        console.log(error);
                    });
        }
    }
</script>