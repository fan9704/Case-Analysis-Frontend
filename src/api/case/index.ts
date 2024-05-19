import request from "@/server/request";
import type { Case } from "@/interfaces/case";

export function listCase(): Promise<Case[]> {
  return request({
    url: "/case/",
    method: "get",
  });
}

export function getCaseById(id: number): Promise<Case> {
  return request({
    url: `/case/${id}/`,
    method: "get",
  });
} 
