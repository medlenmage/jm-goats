import React from 'react';
import PropTypes from 'prop-types';
import './Goat.scss';
import goatShape from '../../helpers/propz/goatShape';

class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
    takeAGoat: PropTypes.func,
  }

  takeGoatEvent = (e) => {
    e.preventDefault();
    const { goat, takeAGoat } = this.props;
    takeAGoat(goat.id);
  }

  render() {
    const { goat } = this.props;

    // (false) ? 'return this if true' : 'return this'

    return (
      <div className="card">
        <img className="card-img-top" src={goat.imgUrl} alt="" />
        <div className="card-body">
          <h5 className="card-title">{goat.name}</h5>
          <p className="card-text">This goat is {goat.age} years old and described as: {goat.description}</p>
        </div>
        <div className="card-footer">
          {
            goat.isBusy ? (
              <button>FREE THE GOAT</button>
            ) : (
              <button onClick={this.takeGoatEvent}>TAKE THE GOAT</button>
            )
          }
        </div>
      </div>
    );
  }
}

export default Goat;
