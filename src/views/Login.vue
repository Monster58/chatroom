<template>
  <div class="login">
    <div class="user-name">
      <el-input v-model="input" placeholder="请输入用户名"></el-input>
    </div>
    <el-button @click="login" size="medium" type="primary" round
      >上线</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    login() {
      const userName = this.input.trim();
      if (this.input.trim()) {
        sessionStorage.setItem("chatroom-username", this.input.trim());
        this.$router.replace("/home");
      } else {
        this.$message.error("请输入用户名");
      }
    },
  },
};
</script>

<style scoped>
.login {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.user-name {
  width: 300px;
  margin: 0 auto;
}
.el-button {
  margin-top: 30px;
}
</style>