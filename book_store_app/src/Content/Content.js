import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Browse from '../Browse/Browse';
import BuyBooks from '../BuyBooks/BuyBooks';
import FavouriteBooks from '../FavouriteBooks/FavouriteBooks';
import Wishlist from '../Wishlist/Wishlist'

const Content = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Browse}/>
      <Route path='/buy_books' component={BuyBooks}/>
      <Route path='/favourite_books' component={FavouriteBooks}/>
      <Route path='/wishlist' component={Wishlist}/>
    </Switch>
  </main>
)

export default Content