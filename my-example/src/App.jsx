import Button from './components/Button';
import Icons from './components/Icons';
import NavBar from './components/NavBar';
import './global.css';

const App = () => {
  return (
    <>
      <div className="header">
        <NavBar />
        <h1>Say hello to ReactJs</h1>
        <p>You will learn how to use the most popular frontend library, and become a super
          Ninja developer.
        </p>
      </div>
      <Button label="Awesome!" />
      <Icons />
    </>
  )
}

export default App;