import React from 'react';
import './App.scss';
import goatData from '../helpers/data/goatData';
import GoatCorral from '../components/GoatCorral/GoatCorral';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  takeAGoat = (goatId) => {
    // call our helper/data function
    goatData.takeGoat(goatId);
    // get all updated goats
    const goats = goatData.getGoats();
    // update state
    this.setState({ goats });
  }

  render() {
    const { goats } = this.state;

    return (
      <div className="App">
        <h2>React Goats</h2>
        <GoatCorral goats={goats} takeAGoat={this.takeAGoat}/>
      </div>
    );
  }
}

export default App;
