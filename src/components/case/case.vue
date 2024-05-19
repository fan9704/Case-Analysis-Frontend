<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getCaseById } from '@/api/case';
import { getPatientById } from '@/api/patient';
import Hospital from '@/assets/images/hospital.png';
import type { Case } from '@/interfaces/case';
import type { Patient } from '@/interfaces/patient';
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
})
const caseData = ref<Case>({
  id: 1,
  background: "",
  clinical_findings: "",
  diagnostic_process: "",
  intervention_and_treatment: "",
  outcome: "",
  discuss: "",
  pathology: "",
  user: 1,
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
  const res = await getCaseById(id)
  caseData.value = res
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
          <v-text id="case-title">
            放克醫院
          </v-text>


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

          病歷 編號:{{ caseData.id }}

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
        <v-col cols="12">
          <hr style="height:2px;border-width:0;color:gray;background-color:gray">
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">

          <b>病歷背景:</b> {{ caseData.background }}

        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">

          <b>臨床發現:</b> {{ caseData.clinical_findings }}

        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">

          <b>診斷過程:</b> {{ caseData.diagnostic_process }}

        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">

          <b>干預與治療:</b> {{ caseData.intervention_and_treatment }}

        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">

          <b>結果:</b> {{ caseData.outcome }}

        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">

          <b>討論:</b> {{ caseData.discuss }}

        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">

          <b>原始病理:</b> {{ caseData.pathology }}

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
