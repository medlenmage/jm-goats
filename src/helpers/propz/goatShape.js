import PropTypes from 'prop-types';

const goatShape = PropTypes.shape({
  id: PropTypes.toString.isRequired,
  name: PropTypes.toString.isRequired,
  age: PropTypes.number.isRequired,
  description: PropTypes.toString.isRequired,
  imgUrl: PropTypes.toString.isRequired,
  isBusy: PropTypes.bool.isRequired,
});

export default { goatShape };
