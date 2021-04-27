<template>
  <el-container>
    <el-header>
      <h1>ChatRoom</h1>
      <User @logout="logout" />
    </el-header>
    <el-container class="main-window">
      <el-aside width="200px"><UserList /></el-aside>
      <el-main>
        <Message />
        <SendBox @sendMessage="sendMessage" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import UserList from "../components/UserList";
import Message from "../components/Message";
import SendBox from "../components/SendBox";
import User from "../components/User";
export default {
  name: "Home",
  data() {
    return { ws: null };
  },
  components: { UserList, Message, SendBox, User },
  created() {
    const userName = sessionStorage.getItem("chatroom-username");
    if (!userName) this.$router.replace("/login");
    this.$store.commit("login", userName);
    this.ws = new WebSocket(`ws://172.17.0.88:8989/webchat/${userName}`);
    const { ws } = this;
    ws.onopen = (e) => {
      console.log(`WebSocket 连接状态： ${ws.readyState}`);
      if (ws.readyState == 1) {
        this.$store.commit("setOnlineStatus", true);
      } else {
        this.$store.commit("setOnlineStatus", false);
      }
    };
    ws.onmessage = this.onmessage;
    ws.onclose = this.onclose;
  },
  methods: {
    onmessage(data) {
      const resData = JSON.parse(data.data);
      console.log(resData);
      const { code } = resData;
      switch (code) {
        case 1001:
          this.$store.commit("setUserList", resData.userlist);
          break;
        case 1002:
          this.$store.commit("incrementMessageList", resData);
          break;
      }
    },
    sendMessage(message) {
      this.ws.send(message);
    },
    logout() {
      this.ws.close();
    },
    onclose() {
      console.log("WebSocket连接已关闭");
      this.$store.commit("setOnlineStatus", false);
    },
  },
};
</script>

<style scoped>
.el-header {
  background-color: #409eff;
  color: #fff;
  position: relative;
}
.el-aside {
  background-color: #dedede;
}
.main-window {
  height: 400px;
}
.el-main {
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
</style>
