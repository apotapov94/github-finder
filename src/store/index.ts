import { createStore } from 'vuex'
import { User, State, Repo } from './types'
import axios from 'axios'



export const store = createStore({
  state(): State {
    return {
      search: "",
      users: null,
      repos: null,
      totalCount: 0
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
    }
  },
  actions: {
    updateSearch ({ commit }: { commit: Function }, search: string){
      commit('setTitle', search)
    },
    async getUsers ({commit, dispatch}, username: string){
      const config = {
        headers: {
          "Authorization": "token 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"
        }
      }
      axios
        .get(`https://api.github.com/search/users?q=${username}`, config)
        .then(response => {
          console.log(username)
          console.log(response)
          commit('setTotalCount', response.data.total_count)
          //const users: Array<Object> = response.data.filter(elem => elem.login.toLowerCase().indexOf(username) !== -1)
          //console.log(users)
          const users: Array<User> = []
          // commit('setUser', user)
          //dispatch('getRepos', username)
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