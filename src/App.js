import './App.css';
import { Route } from 'wouter';
import Navbar from 'components/navbar/navbar';
import ItemsStore from 'pages/itemsStore';
import PlayerStats from 'pages/playerStarts';
import FortniteNews from 'pages/fortniteNews';
import BattlePass from 'pages/battlePass/battlePass';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className='container'>
        <Route path='/' component={ItemsStore} />

        <Route path='/stats' component={PlayerStats} />

        <Route path='/news' component={FortniteNews} />

        <Route path='/battlepass' component={BattlePass} />
      </div>

    </div>
  );
}

export default App;
