import { Component, createRouter } from "../core/cho";
import Home from './Home'
import Film from './Film'

export default createRouter([
    { path: '#/', component: Home },
    { path: '#/film', component: Film }
])