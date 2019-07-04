<template>
    <ul class="chat">
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
    </ul>
</template>

<script>
  export default {
    props: ['messages','uid'],
      methods:{
        getColor(uid,messagedUserId){
            if (uid != messagedUserId) {
                return 'alert alert-success'
            }
                return 'alert alert-info';
        }
      }
  };
</script>