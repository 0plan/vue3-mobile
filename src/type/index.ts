import type { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface IFilterOption {
  value: string
  label: string
}

export interface IFilterType {
  dashboard: IFilterOption[]
  serviceType: IFilterOption[]
  sortBy: IFilterOption[]
}
