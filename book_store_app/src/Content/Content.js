import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Browse from '../Browse/Browse';
import BuyBooks from '../BuyBooks/BuyBooks';
import FavouriteBooks from '../FavouriteBooks/FavouriteBooks';
import Wishlist from '../Wishlist/Wishlist';
import ContentStyle from './Content.css';
import HelpCenter from '../HelpCenter/HelpCenter';
import OurSupport from '../OurSupport/OurSupport';
import Login from '../Header/Login/Login';

const Content = () => (
  <main className={ContentStyle.content}>
    <Switch>
      <Route exact path='/' component={Browse}/>
      <Route path='/buy_books' component={BuyBooks}/>
      <Route path='/favourite_books' component={FavouriteBooks}/>
      <Route path='/wishlist' component={Wishlist}/>
      <Route path='/help' component={HelpCenter}/>
      <Route path='/support' component={OurSupport}/>
    </Switch>
  </main>
)

export default Content