<template>
  <div class="sendbox">
    <textarea
      v-model="message"
      class="message-input"
      placeholder="请输入聊天内容"
    />
    <el-button @click="sendMessage" type="primary">发送</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    sendMessage() {
      if (!this.message.trim()) return this.$message.error("请输入内容");
      this.$emit("sendMessage", this.message.trim());
      this.message = "";
    },
  },
};
</script>

<style>
.sendbox {
  height: 28%;
  padding: 10px;
  background-color: #fff;
  position: relative;
}
.sendbox .el-button {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
.message-input {
  border: none;
  background: none;
  outline: none;
  resize: none;
  width: 100%;
  height: 100%;
}
</style>