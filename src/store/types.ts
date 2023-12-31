export interface User {
  login: string
  avatar: string
  name: string
  url: string
}

export interface State {
  search: string
  users: Array<User> | null
  repos: Array<Repo> | null
  totalCount: number
  currentPage: number
  loadMore: boolean
  loading: boolean
}

export interface Repo {
  name: string
  avatar_url: string
  description: string
}

