<template>
    <p>Total Message Sent : {{messageCount}}</p>
</template>
<script>
    import {mapMutations} from 'vuex';
    export default {
        props: ['totalmessage'],
        data(){
            return {
                messageCount: this.$props.totalmessage
            }
        },
        created() {
            // this.messageCount =
        },
        methods:{
            ...mapMutations([
                'setMessageCount'
            ])
        }
    }
</script>