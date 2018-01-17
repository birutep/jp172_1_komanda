import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Footeris from './FooterPvz/Footeris'
import Mygtukas from './MygtukoPvz/Mygtukas'
import Bendras from './Bendras/Bendras';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Footeris}/>
      <Route path='/mygtukas' component={Mygtukas}/>
      <Route path='/bendras' component={Bendras}/>
    </Switch>
  </main>
)

export default Main