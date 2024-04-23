export interface ICategoryOption {
  value: string | number
  label: string
}

export interface ICategoryItemOption {
  title: ICategoryOption
  data: ICategoryOption[]
  totalCount: number
}

export interface ICategoryList {
  join: ICategoryItemOption
  combination: ICategoryItemOption
  serviceUse: ICategoryItemOption
  currentSituation: ICategoryItemOption
  beforeChange: ICategoryItemOption
  termination: ICategoryItemOption
  benefits: ICategoryItemOption
  voc: ICategoryItemOption
  etc: ICategoryItemOption
}

export interface ICategoryTotalList {
  categoryTotal: number
  data: ICategoryList[]
}
