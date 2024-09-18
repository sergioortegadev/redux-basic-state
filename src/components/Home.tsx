import ReduxLogo from "../assets/rx-logo.png";
import BeerLogo from "../assets/beerjs.svg";
import { useDispatch, useSelector } from "react-redux";
import { add, reset, sub } from "../actions/counterActions";
import { show } from "../actions/showLegendActions";

interface State {
  counter: number;
  showLegend: boolean;
}

const Home = () => {
  const counter = useSelector((state: State) => state.counter);
  const showLegendState = useSelector((state: State) => state.showLegend);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(show());
  };

  const handleAdd = () => {
    dispatch(add());
  };
  const handleSub = () => {
    if (counter === 0) return;

    dispatch(sub());
  };
  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className="container">
      <img src={ReduxLogo} className="logo" alt="Beer Js Cba logo" />
      <h1>State Management with Redux</h1>

      <div className="card">
        <h3>Counter {counter}</h3>
        <div className="btns">
          <button onClick={handleAdd}>➕</button>
          <button onClick={handleReset}>RESET</button>
          <button onClick={handleSub}>➖ </button>
        </div>
        <p className={`${showLegendState ? "block" : "hidden"}`}>
          I am very exhausted, <code>too much boilerplate</code>
        </p>
        <img
          onClick={handleClick}
          src={BeerLogo}
          className={`logo beerlogo ${showLegendState ? "grayscale" : "hover:animate-bounce"}`}
          alt="Beer Js Cba logo"
        />
      </div>
    </div>
  );
};

export default Home;
