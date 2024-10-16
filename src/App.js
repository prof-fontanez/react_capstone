import './App.css';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';
import "@fontsource/karla"
import "@fontsource/markazi-text";


function App() {
  return (
    <>
      <div className="banner">
        <Header />
        <Nav/>
      </div>
      <Main />
    </>
  );
}

export default App;
