<template>
  <div>
    <span class="online-num">当前{{ userList.length }}人在线</span>
    <div class="user-item" v-for="(item, i) in userList" :key="i">
      <el-avatar icon="el-icon-user-solid"></el-avatar>
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userList() {
      return this.$store.state.userList;
    },
  },
};
</script>

<style>
.user-item {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: aliceblue;
}
.el-avatar {
  margin-right: 10px;
}
.online-num {
  padding: 10px;
  display: block;
}
</style>