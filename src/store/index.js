import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        online: false,
        userList: [],
        messageList: []
    },
    mutations: {
        login(state, user) {
            state.user = user
        },
        setOnlineStatus(state, status) {
            state.online = status
        },
        setUserList(state, userList) {
            state.userList = userList
        },
        incrementMessageList(state, data) {
            state.messageList.push(data)
        }
    }
})