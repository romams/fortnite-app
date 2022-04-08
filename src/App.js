import './App.css';
import { Route } from 'wouter';
import Navbar from 'components/navbar/navbar';
import ItemsStore from 'pages/itemsStore';
import PlayerStats from 'pages/playerStarts';
import FortniteNews from 'pages/fortniteNews';
import BattlePass from 'pages/battlePass/battlePass';

function App() {

  console.log(process.env.PUBLIC_URL);
  return (
    <div className="App">
      <Navbar />
      
      <div className='container'>
        <Route path={`${process.env.PUBLIC_URL}/fortnite-app/`} component={ItemsStore} />

        <Route path={`${process.env.PUBLIC_URL}/fortnite-app/stats`} component={PlayerStats} />

        <Route path={`${process.env.PUBLIC_URL}/fortnite-app/news`} component={FortniteNews} />

        <Route path={`${process.env.PUBLIC_URL}/fortnite-app/battlepass`} component={BattlePass} />
      </div>

    </div>
  );
}

export default App;
