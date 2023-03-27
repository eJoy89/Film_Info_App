import { Component } from '../core/cho'
import Headline from '../components/Headline'
import Search from '../components/Search'
import FilmList from '../components/FilmList'
import FilmListMore from '../components/FilmListMore'



export default class Home extends Component {
  render() {
    const headline = new Headline().el
    const search = new Search().el
    const filmList = new FilmList().el
    const filmListMore = new FilmListMore().el
    
    this.el.classList.add('container')
    this.el.append(
        headline,
        search,
        filmList,
        filmListMore
      )
  }
}