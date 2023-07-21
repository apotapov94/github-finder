import { createStore } from 'vuex'
import { User, State, Repo } from './types'
import axios from 'axios'

const token = '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'
const perPage = 20

export const store = createStore({
  state(): State {
    return {
      search: "",
      users: null,
      repos: null,
      totalCount: 0,
      currentPage: 1,
      loadMore: false,
      loading: false
    }
  },
  mutations: {
    updateSearch (state: State, search: string){
      state.search = search
    },
    // setUser (state: State, user: User){
    //   state.user = user
    // },
    updateUsers (state: State, users: Array<User>){
      state.users = users
    },
    setRepos (state: State, repos: Array<Repo>){
      state.repos = repos
    },
    setTotalCount (state: State, count: number){
      state.totalCount = count
    },
    updateCurrentPage (state: State){
      state.currentPage = state.currentPage + 1
    }, 
    fetchUsers (state: State, users: Array<User>){
      state.users = [...state.users, ...users]
    },
    changeLoadMore (state: State, value: boolean){
      state.loadMore = value
    },
    resetCurrentPage (state: State){
      state.currentPage = 1
    },
    changeLoading (state: State, value: boolean){
      state.loading = value
    },
  },
  actions: {
    updateSearch ({ commit }: { commit: Function }, search: string){
      commit('setTitle', search)
    },
    async getUsers ({commit, dispatch, state}, username: string){
      commit('changeLoading', true)
      const config = {
        headers: {
          "Authorization": "token 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"
        }
      }
      commit('resetCurrentPage')
      commit('changeLoadMore', false)
      axios
        .get(`https://api.github.com/search/users?q=${username}&per_page=${perPage}&page=${state.currentPage}`, config)
        .then(response => {
          console.log(state.currentPage)
          console.log(response)
          commit('setTotalCount', response.data.total_count)
          const users: Array<User> = []
          response.data.items.forEach((elem) => {
            const user: User = {
              login: elem.login,
              name: elem.name,
              avatar: elem.avatar_url,
              url: elem.url
            }
            users.push(user)
          });
          commit('updateUsers', users)
          commit('updateCurrentPage')
          if(response.data.total_count > 20){
            commit('changeLoadMore', true)
          }
          commit('changeLoading', false)
        })
        .catch(error => {
          console.log(error)
          commit('changeLoading', false)
        });
    },
    async fetchUsers ({commit, dispatch, state}, username: string){
      commit('changeLoading', true)
      const config = {
        headers: {
          "Authorization": `token ${token}`
        }
      }
      axios
        .get(`https://api.github.com/search/users?q=${username}&per_page=${perPage}&page=${state.currentPage}`, config)
        .then(response => {
          console.log(`https://api.github.com/search/users?q=${username}&per_page=${perPage}&page=${state.currentPage}`)
          commit('setTotalCount', response.data.total_count)
          const users: Array<User> = []
          response.data.items.forEach((elem) => {
            const user: User = {
              login: elem.login,
              name: elem.name,
              avatar: elem.avatar_url,
              url: elem.url
            }
            users.push(user)
          });

          const pagesCount: number = Math.ceil(state.totalCount/perPage)

          console.log('всего страниц' + pagesCount, state.currentPage)

          commit('fetchUsers', users)
          if(pagesCount < 1000){
            if(state.currentPage === pagesCount){
              commit('changeLoadMore', false)
            }
          } else {
            if(state.currentPage === 1000){
              commit('changeLoadMore', false)
            }
          }
          commit('updateCurrentPage')
          commit('changeLoading', false)
        })
        .catch(error => console.log(error));
    },
    async getRepos ({commit}, username: string){
      axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then(response => {
          console.log(response.data)
          const repos: Array<Repo> = []
          response.data.forEach((elem) => {
            const repo: Repo = {
              name: elem.name,
              avatar_url: elem.avatar_url,
              description: elem.description
            }
            repos.push(repo)
          });
          commit('setRepos', repos)
        })
        .catch(error => console.log(error));
    }
  },
  getters: {
    getTitle (state: State): string{
      return state.search
    }
  }
})