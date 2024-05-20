<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getPathologyById } from '@/api/pathology';
import { getPatientById } from '@/api/patient';
import Hospital from '@/assets/images/hospital.png';
import type { Pathology } from '@/interfaces/pathology';
import type { Patient } from '@/interfaces/patient';
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
})
const pathologyData = ref<Pathology>({
  id: 1,
  specimen_source: "",
  specimen_type: "",
  specimen_size: "",
  check_description: "",
  summary: "",
  addition_test: "",
  user: 1
});
const patientData = ref<Patient>({
  id: 1,
  username: "",
  age: 1,
  sexual: "Man",
  is_valid: true,
})
const getData = async () => {
  let id = props.id;
  const res = await getPathologyById(id)
  pathologyData.value = res
  const patientRes = await getPatientById(res.user)
  patientData.value = patientRes
}

onMounted(() => {
  getData()
})
</script>
<template>
  <page size="A4">
    <v-container>
      <v-row>
        <v-col cols="6">
          <b id="case-title">
            放克醫院-病理報告
          </b>
          <v-img :src="Hospital" id="case-logo"></v-img>
        </v-col>
        <v-col cols="6">
          地址: 台灣苗栗縣銅鑼鄉小二村五權路654號 <br>
          電話: (+886) 9557-456 <br>
          信箱: funk@hospital.com <br>
          網站: www.funk.hospital.com <br>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <hr style="height:2px;border-width:0;color:gray;background-color:gray">
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" id="case-title">

          病理 編號:{{ pathologyData.id }}

        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <b>姓名:</b> {{ patientData.username }}
        </v-col>
        <v-col cols="4">
          <b>性別:</b> {{ patientData.sexual }}
        </v-col>
        <v-col cols="4">
          <b>年齡:</b> {{ patientData.age }}
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="case-text">
          <hr style="height:2px;border-width:0;color:gray;background-color:gray">
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="case-text">

          <b>檢體來源:</b> {{ pathologyData.specimen_source }}

        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="case-text">

          <b>檢體性質:</b> {{ pathologyData.specimen_type }}

        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="case-text">

          <b>檢體大小:</b> {{ pathologyData.specimen_size }}

        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="case-text">

          <b>檢查結果:</b> {{ pathologyData.check_description }}

        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="case-text">

          <b>診斷結果:</b> {{ pathologyData.summary }}

        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="case-text">

          <b>附加測試結果:</b> {{ pathologyData.addition_test }}

        </v-col>
      </v-row>
    </v-container>

  </page>
</template>
<style>
#case-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

#case-logo {
  height: 90px;

}

.case-text {
  font-size: 16px;
  margin-top: 10px;
  overflow-wrap: break-word;
  overflow: hidden;
}

page {
  background: white;
  display: block;
  margin: 1% auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
  padding: 1cm 3cm;
  text-overflow: clip;
}

page[size="A4"] {
  width: 21cm;
  height: 29.7cm;
}
</style>
