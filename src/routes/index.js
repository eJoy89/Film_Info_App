import { Component, createRouter } from "../core/cho";
import Home from './Home';
import Film from './Film';
import About from './About';
import NotFound from './NotFound'

export default createRouter([
    { path: '#/', component: Home },
    { path: '#/film', component: Film },
    { path: '#/about', component: About },
    { path: '.*', component: NotFound }
])