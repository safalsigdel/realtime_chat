import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        messageCount: 0

    },mutations:{
        setMessageCount:(state,value)=>{
            state.messageCount = value;
        }
    }
});