import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserList from './UserList.jsx';
import * as actions from '../redux/actions';

class UsersManagmentUI extends Component {
  addNewUser = () => {
    const { users, addUser } = this.props;
    const data = {
      id:
        Math.max(
          ...users.map(function(o) {
            return o.id;
          })
        ) + 1,
      name: '',
      grade: 1,
      school: '',
    };
    addUser(data);
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header text-center font-weight-bold">
                Users Registry
              </div>
              <div className="card-body">
                <table className="table table-hover text-center">
                  <thead className="thead-dark">
                    <tr>
                      <th>Name</th>
                      <th>Grade</th>
                      <th>School</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <UserList />
                </table>
                <button
                  type="button"
                  className="btn btn-dark pull-left"
                  onClick={this.addNewUser}
                >
                  Add New
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addUser: actions.addNewUser,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(UsersManagmentUI);
