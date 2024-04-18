export interface IFilterOption {
  value: string
  label: string
}

export interface IFilterDetailOption {
  title: IFilterOption
  data: IFilterOption[]
}

export interface IFilterType {
  dashboard: IFilterDetailOption
  serviceType: IFilterDetailOption
  sortBy: IFilterDetailOption
}

export interface INoticeTitle {
  title: string
}
