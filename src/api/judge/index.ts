import request from "@/server/request";

export function judgeTwoCases(case1_id: number, case2_id: number): Promise<[][]> {
  return request({
    url: `/judge/${case1_id}/${case2_id}/`,
    method: "get",
  });
}

