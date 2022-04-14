import './App.css';
import { Route } from 'wouter';
import Navbar from 'components/navbar/navbar';
import Footer from 'components/footer/footer';
import ItemsStore from 'pages/itemsStore';
import PlayerStats from 'pages/playerStarts';
import FortniteNews from 'pages/fortniteNews';
import BattlePass from 'pages/battlePass/battlePass';
import Home from 'pages/home';
import {NewsContextProvider} from 'context/newContext';
import Items from 'pages/items/items';

function App() {

  return (
    <div className="App">
      <Navbar />
      
      <div className='container'>
        
        <NewsContextProvider>
          <Route path={`${process.env.PUBLIC_URL}`} component={Home} />
          <Route path={`${process.env.PUBLIC_URL}/news`} component={FortniteNews} />
        </NewsContextProvider>        

        <Route path={`${process.env.PUBLIC_URL}/stats`} component={PlayerStats} />
        <Route path={`${process.env.PUBLIC_URL}/shop`} component={ItemsStore} />
        <Route path={`${process.env.PUBLIC_URL}/battlepass`} component={BattlePass} />
        <Route path={`${process.env.PUBLIC_URL}/items`} component={Items} />

      </div>
      <Footer />
    </div>
  );
}

export default App;
