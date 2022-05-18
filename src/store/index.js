import { createStore } from "vuex"

export default createStore({
	state() {
		return {
			songs: [
				{ id: 1, title: "Savage Love", artist: "Jason Derulo", name: "savage-love" },
				{ id: 2, title: "Love not war", artist: "Jason Derulo", name: "love-not-war" },
				{ id: 3, title: "Fight for you", artist: "Jason Derulo", name: "fight-for-you" },
				{ id: 4, title: "Nightmare", artist: "Avenged Sevenfold", name: "avenged-sevenfold" },
				{ id: 5, title: "What hurts the most", artist: "Cascada", name: "what-hurts-the-most" },
				{ id: 6, title: "American idiot", artist: "Green Day", name: "green-day" },
				{ id: 7, title: "Feeling this", artist: "Blink 182", name: "blink-182" },
				{ id: 8, title: "The black swan", artist: "Story of the year", name: "story-of-the-year" },
				{ id: 9, title: "Why don't you get a job", artist: "The offspring", name: "the-offspring" },
				{ id: 10, title: "Give it all", artist: "Rise Against", name: "rise-against" },
				{ id: 11, title: "Take this life", artist: "In Flames", name: "in-flames" },
				{ id: 12, title: "The Nexus", artist: "Amaranthe", name: "amaranthe" },
			],
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
		play(state, song) {
			state.index = state.songs.indexOf(song)
		}
	}
})