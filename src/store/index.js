import { createStore } from "vuex"

export default createStore({
	state() {
		return {
			user: null,
			songs: [],
			index: 0
		}
	},
	mutations: {
		prev(state) {
			state.index ? state.index-- : state.index = state.songs.length - 1
		},
		next(state) {
			state.index < state.songs.length - 1 ? state.index++ : state.index = 0
		},
		play(state, id) {
			// state.index = state.songs.indexOf(song)

			state.index = state.songs.findIndex(song => song.id == id)
		},
		auth(state, user) {
			state.user = user
		},
		songs(state, songs) {
			state.songs = songs
		}
	}
})