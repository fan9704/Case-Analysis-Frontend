<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { listCase } from '@/api/case';
import type { Case } from '@/interfaces/case';
import CaseItem from '@/components/case/case.vue';
import { judgeTwoCases } from "@/api/judge";
import swal from 'sweetalert2';
import router from '@/router';

const caseList = ref<Case[]>([]);
const case1 = ref<Case>();
const case2 = ref<Case>();
const waiting = ref<boolean>(false);
const show = ref<boolean>(true);
const response = ref<string>();

watch(case1, () => {
  show.value = false;
  setTimeout(() => {
    show.value = true;
  }, 500)
})
watch(case2, () => {
  show.value = false;
  setTimeout(() => {
    show.value = true;
  }, 500)
})

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
const goToRoute = (id: number) => {
  router.push({
    path: `/case/${id}`
  })
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
      <v-col cols=2> <v-btn width="100%" @click="submit" :disabled=waiting>
          分析
        </v-btn></v-col>
      <v-col cols="10" id="analysis-response">
        {{ response }}
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" xs=12 sm=12 md=6 v-if="case1?.id && show">
        <CaseItem @click="goToRoute(case1.id)" style="max-width: 100%;" :id=case1.id />
      </v-col>
      <v-col cols="6" xs=12 sm=12 md=6 v-if="case2?.id && show">
        <CaseItem @click="goToRoute(case2.id)" style="max-width: 100%;" :id=case2.id />
      </v-col>
    </v-row>

  </v-container>
</template>
<style scoped>
#analysis-response {
  width: 100%;
  border: 1px dashed black;
}
</style>
