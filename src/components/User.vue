<template>
  <div class="user-info">
    <el-avatar size="small" icon="el-icon-user-solid"></el-avatar>
    <el-dropdown>
      <span class="user-name"
        >{{ $store.state.user }} <i class="el-icon-arrow-down"></i
      ></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><span @click="offline">下机</span></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span
      class="online-status"
      :class="$store.state.online ? 'online' : 'offline'"
    ></span>
  </div>
</template>

<script>
export default {
  methods: {
    offline() {
      this.$router.replace("/login");
      this.$emit("logout");
    },
  },
};
</script>

<style scoped>
.user-info {
  position: absolute;
  top: 50%;
  right: 4%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user-name {
  margin: 0 10px;
  color: #fff;
  cursor: pointer;
}
.el-avatar {
  margin-right: 2px;
}
.online-status {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.online {
  background-color: #7be247;
}
.offline {
  background-color: rgb(224, 92, 92);
}
</style>