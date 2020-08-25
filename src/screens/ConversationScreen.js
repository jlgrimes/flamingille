import React from 'react';

import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../redux/maps';

const ConversationScreen = ({ conversation }) => {
  return (
    <>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ConversationScreen);
