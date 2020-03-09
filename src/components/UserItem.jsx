import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions';

class UserItem extends Component {
  deleteUser = () => {
    const r = window.confirm('Do you want to delete this item');
    if (r === true) {
      const { id } = this.props.user;
      this.props.deleteUser(id);
    }
  };

  handleClick = e => {
    e.preventDefault();
    this.props.history.push({
      pathname: `/details/${this.props.user.id}`,
      state: { detail: this.props.user },
    });
  };

  render() {
    const { name, grade, school } = this.props.user;
    return (
      <tr key={this.props.index}>
        <td>{name}</td>
        <td>{grade}</td>
        <td>{school}</td>
        <td>
          <i className="far fa-edit" onClick={this.handleClick} />
        </td>
        <td>
          <i className="fas fa-trash" onClick={this.deleteUser} />
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      deleteUser: actions.deleteUser,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserItem));
