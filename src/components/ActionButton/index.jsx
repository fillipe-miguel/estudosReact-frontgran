import P from 'prop-types';
import React from 'react';
import Container from './ActionButton.style';

function ActionButton({ icon, action }) {
  return <Container onClick={() => action()}>{icon}</Container>;
}

ActionButton.defaultProps = {
  action: () => {},
};

ActionButton.propTypes = {
  icon: P.node.isRequired,
  action: P.func,
};

export default ActionButton;
