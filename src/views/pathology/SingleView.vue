<script setup lang="ts">
import PathologyItem from '@/components/pathology/pathology.vue';
import { ref } from 'vue';
import { convertPathologyToCase } from '@/api/pathology';
import swal from 'sweetalert2';
import router from '@/router';

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
})
const waiting = ref<boolean>(false);
const convertToCase = async () => {
  waiting.value = true;
  const res = await convertPathologyToCase(props.id);
  waiting.value = false;
  swal.fire({
    title: ' 產生病例成功',
    text: "分析成功點擊確定查看產生結果",
    icon: 'success',
    confirmButtonText: '確定'
  })
  router.push({
    path: `/case/${res.id}`
  })
}
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="9" v-if="props.id">
        <PathologyItem style="max-width: 100%;" :id=props.id />
      </v-col>
      <v-col cols="3">
        <v-btn @click="convertToCase" :disabled=waiting> 轉換成病例</v-btn>
      </v-col>
    </v-row>

  </v-container>
</template>
