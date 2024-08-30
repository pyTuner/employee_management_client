import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Router from './routes';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ display: 'flex',flexDirection: 'column', minHeight:'100vh'}}>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
