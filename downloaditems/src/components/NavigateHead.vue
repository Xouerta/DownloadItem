<template>
  <div>
    <p-menubar :model="items" class="p-mb-4" />
  </div>
</template>

<script>
import { Menubar } from 'primevue/menubar';

export default {
  components: {
    'p-menubar': Menubar,
  },
  data() {
    return {
      items: [
        {
          label: '软件下载',
          command: () => {
            this.$router.push({ name: 'download' });
          },
        },
        {
          label: '热门软件排行榜',
          command: () => {
            this.$router.push({ name: 'top-software' });
          },
        },
        {
          label: '管理员登陆',
          command: () => {
            this.$router.push({ name: 'admin-login' });
          },
          align: 'right', // 使用CSS使其靠右
        },
      ],
    };
  },
};
</script>

<style scoped>
/* 通过CSS将管理员登陆按钮放到最右 */
.p-menubar {
  display: flex;
  justify-content: space-between;
}
</style>
