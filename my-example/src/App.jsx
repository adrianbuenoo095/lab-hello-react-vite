import './App.css';
import Button from './components/Button';
import Icons from './components/Icons';
import Menu from './components/Menu';
const App = () => {
  return (
    <>
      <Menu />
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