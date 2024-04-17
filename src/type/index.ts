import type { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

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
