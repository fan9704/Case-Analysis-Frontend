interface Pathology {
  id: number,
  specimen_source: string,
  specimen_type: string,
  specimen_size: string,
  check_description: string,
  summary: string,
  addition_test: string,
  user: number
}
interface CreatePathologyRequestDTO {
  specimen_source: string,
  specimen_type: string,
  specimen_size: string,
  check_description: string,
  summary: string,
  addition_test: string,
  user: number
}

export type { Pathology, CreatePathologyRequestDTO }
