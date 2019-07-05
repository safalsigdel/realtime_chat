<template>
    <ul class="chat">
        <div v-if="showLess">
        <li class="left clearfix" v-for="message in messages.slice(0,5)">
            <div :class="getColor(uid,message.user.id)">
                <div class="header">
                    <strong class="primary-font">
                        {{ message.user.name }}
                    </strong>
                </div>
                <p>
                    {{ message.message }}
                </p>
            </div>
        </li>
        </div>
        <div v-else>
            <li class="left clearfix" v-for="message in messages">
            <div :class="getColor(uid,message.user.id)">
                <div class="header">
                    <strong class="primary-font">
                        {{ message.user.name }}
                    </strong>
                </div>
                <p>
                    {{ message.message }}
                </p>
            </div>
        </li>
        </div>
        <button class="btn btn-primary" @click.prevent="controlData"> {{buttonName}}</button>
    </ul>
</template>

<script>
  export default {
    props: ['messages','uid'],
    data(){
        return {
            showLess:true,
            buttonName:'Show More'

        }
    },
      methods:{
        getColor(uid,messagedUserId){
            if (uid != messagedUserId) {
                return 'alert alert-success'
            }
                return 'alert alert-info';
        },
        controlData(){
            if (this.showLess) {
                this.buttonName = 'Show Less';
                this.showLess = false;
            }else if(!this.showLess){
                this.buttonName = 'Show More';
                this.showLess = true;
            }
        }
      }
  };
</script>