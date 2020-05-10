import Home from './components/Home.vue'
import Movie from './components/Movie.vue'
import Suggestion from './components/Suggestion.vue'
export default [
    { path: '/home', component:Home},
    { path: '/movies', component:Movie},
    { path: '/suggestion', component:Suggestion},
    { path: '/', component:Home},
]