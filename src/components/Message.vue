<template>
  <div class="message-box">
    <div v-for="(item, i) in messageList" :key="i">
      <div v-if="item.flag !== 1" class="message-item">
        <span class="message-time">{{ item.sendtime }}</span>
        <div class="message-info">
          <div class="user-name">{{ item.user }}</div>
          <div class="message-content">{{ item.msg }}</div>
        </div>
      </div>
      <div v-else class="message-item">
        <span class="message-time">{{ item.sendtime }}</span>
        <div class="message-info current-user">
          <div class="user-name">{{ item.user }}</div>
          <div class="message-content">{{ item.msg }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    messageList() {
      return this.$store.state.messageList;
    },
  },
};
</script>

<style scoped>
.message-box {
  background-color: rgb(238, 238, 238);
  height: 260px;
  padding: 10px;
  overflow-y: auto;
}
.message-info {
  display: flex;
}
.current-user {
  flex-direction: row-reverse;
}
.current-user .message-content {
  background-color: #b6daff;
}
.user-name {
  transform: translateY(19%);
  min-width: 63px;
}
.message-time {
  padding: 4px 0;
  display: block;
  color: rgb(175, 175, 175);
}
.message-content {
  background-color: #fff;
  padding: 8px;
  border-radius: 6px;
}
</style>