import request from "@/server/request";
import type { Patient } from "@/interfaces/patient";

export function listPatient(): Promise<Patient[]> {
  return request({
    url: '/patient/',
    method: "get",
  });
}

export function getPatientById(id: number): Promise<Patient> {
  return request({
    url: `/patient/${id}`,
    method: "get",
  });
}
