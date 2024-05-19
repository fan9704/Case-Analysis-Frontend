import request from "@/server/request";
import type { Pathology, CreatePathologyRequestDTO } from "@/interfaces/pathology";
import type { Case } from "@/interfaces/case";

export function listPathology(): Promise<Pathology[]> {
  return request({
    url: "/pathology/",
    method: "get",
  });
}
export function convertPathologyToCase(id: number): Promise<Case> {
  return request({
    url: `/pathology/convert/${id}/`,
    method: "get",
  });
}
export function createPathology(data: CreatePathologyRequestDTO): Promise<Pathology> {
  return request({
    url: "/pathology/",
    method: "post",
    data,
  });
}
