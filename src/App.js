import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import NewTransaction from './components/NewTransaction';
import Transactions from './components/Transactions';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <GlobalProvider>
          <Balance />
          <Transactions />
          <NewTransaction />
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
