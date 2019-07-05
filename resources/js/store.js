import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// let count = "<?php echo App\\Message::where('user_id',auth()->user()->id)->count('message'); ?>"
 // var count = <?php echo json_encode(App\\Message::where('user_id',auth()->user()->id)); ?>;
 // let count = 23;

export default new Vuex.Store({
    state:{
        messageCount: localStorage.getItem('initialCount')

    },
    getters:{
    	getMessageCount: state=>{
    		return state.messageCount;
    	}
    },
    mutations:{
       setMessageCount:(state,value) => {
      state.messageCount = value
    },
    }
});