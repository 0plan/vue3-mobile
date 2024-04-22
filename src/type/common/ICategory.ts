export interface ICategoryOption {
  value: string | number
  label: string
}

export interface ICategoryItemOption {
  title: ICategoryOption
  data: ICategoryOption[]
}

export interface ICategoryList {
  join: ICategoryItemOption
  combination: ICategoryItemOption
  serviceUse: ICategoryItemOption
  currentSituation: ICategoryItemOption
}
