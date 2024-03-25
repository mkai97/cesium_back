<template>
  <el-container>
    <!-- <el-header>
      <HelloWorld :msg="msg"></HelloWorld>
    </el-header> -->
    <!-- <el-container> -->
      <el-aside width="200px">
      <HelloWorld :msg="msg"></HelloWorld>

        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="selectMenu"
        >
          <el-menu-item
            v-for="(item, index) in menuList"
            :key="index"
            :index="index"
            >{{ item.name }}</el-menu-item
          >
        </el-menu>
      </el-aside>
      <el-main class="tw-bg-gray-100">
        <router-view></router-view>
      </el-main>
    <!-- </el-container> -->
  </el-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import routers from "@/views/CesiumDemo/config/config";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      msg: "CESIUM DEMO",
      menuList: routers,
    };
  },
  mounted() {},
  methods: {
    handleOpen(e){},
    handleClose(e){},
    selectMenu(e) {
      console.log(e);
      this.$router.push({
        path:"/home/" + this.menuList[e].path
      });
    },
  },
};
</script>
