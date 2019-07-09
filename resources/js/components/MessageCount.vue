<template>
    <p>Total Message Sent : {{messageCount}}</p>
</template>
<script>
    import store from '../store';
    export default {
        props: ['totalmessage'],

        computed: {
            messageCount: function() {
              return this.getMessageCount();
            }
        },
        created() {
            // this.setMessageCountOnStore();
            // this.messageCount = 0;
            // console.log(this.$store.commit.setMessageCount(10));
            // axios.get('')
        },
        methods:{
            setMessageCountOnStore(){
                store.commit('setMessageCount',this.$props.totalmessage);
            },

            getMessageCount(){
                return store.getters.getMessageCount;
            }

        },
    }
</script>