<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { listCase } from '@/api/case';
import type { Case } from '@/interfaces/case';
import { judgeTwoCases } from "@/api/judge";
import swal from 'sweetalert2';

const caseList = ref<Case[]>([]);
const case1 = ref<Case>();
const case2 = ref<Case>();
const waiting = ref<boolean>(false);
const response = ref<string>();
const getData = async () => {
  const res = await listCase()
  caseList.value = res;
}
const itemProps = (item: Case) => {
  return {
    title: item.id,
    subtitle: item.background
  }
}
const submit = async () => {
  if (case1.value && case2.value) {
    waiting.value = true;
    const res = await judgeTwoCases(case1.value.id, case2.value.id)
    waiting.value = false;
    swal.fire({
      title: '分析成功',
      text: "分析成功點擊確定查看結果",
      icon: 'success',
      confirmButtonText: '確定'
    })
    // @ts-ignore
    response.value = res[0][1];
  }

}

onMounted(() => {
  getData();
})
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-select :item-props="itemProps" :items="caseList" label="病例 1" v-model="case1"></v-select>
      </v-col>
      <v-col cols="6">
        <v-select :item-props="itemProps" :items="caseList" label="病例 2" v-model="case2"></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-btn @click="submit" :disabled=waiting>

        分析

      </v-btn>
    </v-row>
    <v-row>
      <v-col cols="12">
        {{ response }}
      </v-col>
    </v-row>
  </v-container>
</template>
