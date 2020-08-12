import React from 'react';
import PropTypes from 'prop-types';
import Goat from '../Goat/Goat';
import goatShape from '../../helpers/propz/goatShape';

class GoatCorral extends React.Component {
  static propTypes = {
    goats: PropTypes.arrayOf(goatShape.goatShape),
    takeAGoat: PropTypes.func,
  }

  render() {
    const { goats, takeAGoat } = this.props;

    const goatCards = goats.map((goat) => (<Goat key={goat.id} goat={goat} takeAGoat={takeAGoat}/>));

    return (
      <div>
        <h2>get your goat</h2>
        { goatCards }
      </div>
    );
  }
}

export default GoatCorral;
