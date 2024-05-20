<script setup lang="ts">
import PathologyItem from '@/components/pathology/pathology.vue';
import { onMounted, ref } from 'vue';
import { listPathology } from '@/api/pathology';
import type { Pathology } from '@/interfaces/pathology';
import VueHorizontal from "vue-horizontal";
import router from "@/router";

const pathologyList = ref<Pathology[]>([]);
const horizontal = ref(null);
const left = ref<number>(0);
const originX = ref<number>(0);
const originLeft = ref<number>(0);

const getData = async () => {
  const res = await listPathology()
  pathologyList.value = res;
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
        <section v-for=" item in pathologyList" :key="item.id" @click="router.push({ path: `/pathology/${item.id}` })">
          <PathologyItem style="height: 50vh;" :id=item.id />
        </section>
      </vue-horizontal>
    </div>

  </v-container>
</template>
