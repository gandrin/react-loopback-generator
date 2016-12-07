import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import HelloCard from '../../components/hello-card';

class HomeView extends Component {

  render() {
    return (
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12 col-md-6">
            <HelloCard user={this.props.user} />
          </div>
        </div>
      </div>
    );
  }

}

HomeView.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
  }),
};

function mapStateToProps(state) {
  return {
    user: (state.authentication) ? state.authentication.user : { firstName: 'Anonymous' },
  };
}

export default connect(
  mapStateToProps,
)(HomeView);
