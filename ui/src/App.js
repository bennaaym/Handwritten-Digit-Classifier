import './assets/css/global.css';
import Home from './components/home/Home';
import ClassifierContextProvider from './context/ClassifierContext';

const App = () => {
  return (
    <div className="App">
      <ClassifierContextProvider>
        <Home />
      </ClassifierContextProvider>
    </div>
  );
}

export default App;
