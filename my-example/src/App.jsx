import './App.css';
import Button from './components/Button';
import Icons from './components/Icons';
import NavBar from './components/NavBar';
const App = () => {
  return (
    <>
      <NavBar />
      <h1>Say hello to ReactJs</h1>
      <p>You will learn how to use the most popular frontend library, and become a super
        Ninja developer.
      </p>
      <Button />
      <Icons />
    </>
  )
}

export default App;