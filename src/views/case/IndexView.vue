<script setup lang="ts">
import CaseItem from '@/components/case/case.vue';
import { onMounted, ref } from 'vue';
import { listCase } from '@/api/case';
import type { Case } from '@/interfaces/case';
import VueHorizontal from "vue-horizontal";
import router from "@/router";

const caseList = ref<Case[]>([]);
const horizontal = ref(null);
const left = ref<number>(0);
const originX = ref<number>(0);
const originLeft = ref<number>(0);

const getData = async () => {
  const res = await listCase()
  caseList.value = res;
}

const onScroll = (e: MouseEvent) => {
  left.value = e.detail;
}
const onMouseDown = (e: MouseEvent) => {
  originX.value = e.pageX;
  originLeft.value = left.value;
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}

const onMouseMove = (e: MouseEvent) => {

  const offset = e.pageX - originX.value;
  const newLeft = originLeft.value - offset;
  // @ts-ignore
  horizontal.value?.scrollToLeft(newLeft, 'auto');
}

const onMouseUp = () => {
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
}

onMounted(() => {
  getData();
})
</script>
<template>
  <v-container fluid>
    <div @mousedown.left="onMouseDown">
      <vue-horizontal responsive :button=false scroll ref="horizontal" class="horizontal">
        <section v-for=" item in caseList" :key="item.id" @click="router.push({ path: `/case/${item.id}` })">
          <CaseItem style="height: 50vh;" :id=item.id />
        </section>
      </vue-horizontal>
    </div>

  </v-container>

</template>
<style scoped>
section {
  padding: 16px 24px;
  background: #f5f5f5;
}

.horizontal {
  cursor: move;
  user-select: none;
}
</style>
