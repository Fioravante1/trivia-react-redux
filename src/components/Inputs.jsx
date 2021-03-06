import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { fetchToken } from '../redux/actions';

class Inputs extends Component {
  constructor() {
    super();
    this.verify = this.verify.bind(this);
  }

  componentDidMount() {
    const { fetchApiToken } = this.props;
    fetchApiToken();
  }

  verify() {
    const { name, email } = this.props;
    let verify = true;
    if (name.length > 0 && email.length) {
      verify = false;
    }
    return verify;
  }

  render() {
    const { handleOnChange,
      name, email, score } = this.props;
    return (
      <div>
        <form action="">
          <label htmlFor="name">
            Name
            <input
              name="name"
              type="text"
              id="name"
              data-testid="input-player-name"
              onChange={ handleOnChange }
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              name="email"
              type="text"
              id="email"
              data-testid="input-gravatar-email"
              onChange={ handleOnChange }
            />
          </label>
          <Link
            to={ {
              pathname: '/game',
              aboutProps: {
                name: { name },
                email: { email },
                score: { score },
              },
            } }
          >
            <button
              data-testid="btn-play"
              type="button"
              disabled={ this.verify() }
              onClick={ () => <Redirect to="game" /> }
            >
              Jogar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchApiToken: () => dispatch(fetchToken()),
});

Inputs.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  fetchApiToken: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Inputs);
