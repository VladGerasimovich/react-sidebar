import {React, useState} from 'react'
import { GlobalStyle } from './globalStyle'
import Navbar from './comonents/navbar/index'
import Sidebar from './comonents/sidebar/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Reports from './pages/Reports'
import Products from './pages/Products'
import Team from './pages/Team'
import Messages from './pages/Messages'
import Support from './pages/Support'



function App() {

  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () =>{
    setShowMenu(prev => !prev)
  }

  return (
    <Router>
      <Navbar openMenu={openMenu}/>
      <Sidebar showMenu={showMenu} openMenu={openMenu}/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/reports" component={Reports}/>
        <Route path="/products" component={Products}/>
        <Route path="/team" component={Team}/>
        <Route path="/messages" component={Messages}/>
        <Route path="/support" component={Support}/>
      </Switch>
      <GlobalStyle />
    </Router>
  );
}

export default App;
