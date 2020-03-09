import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';

class UserList extends Component {
  render() {
    const trItem = this.props.users.map((item, index) => (
      <UserItem key={index} user={item} index={index} />
    ));
    return <tbody>{trItem}</tbody>;
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(UserList);
