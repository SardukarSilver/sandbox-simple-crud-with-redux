import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions';

class DetailsCard extends Component {
  state = {
    isEdit: false,
    selectedUserIndex: null,
  };

  componentWillMount = () => {
    const index = this.props.users.findIndex(
      x => x.id === this.props.location.state.detail.id
    );
    this.setState({ selectedUserIndex: index });
  };

  editUser = () => {
    this.setState(prevState => ({
      isEdit: !prevState.isEdit,
    }));
  };

  editUserSubmit = () => {
    this.props.updateUser(
      this.props.users[this.state.selectedUserIndex].id,
      this.nameInput.value,
      this.gradeInput.value,
      this.schoolInput.value
    );

    this.setState(prevState => ({
      isEdit: !prevState.isEdit,
    }));
  };

  render() {
    const { name, grade, school } = this.props.users[
      this.state.selectedUserIndex
    ];

    return (
      <div className="DetailsCard container-fluid text-center">
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header font-weight-bold">User details</div>
              <div className="card-body">
                <table className="table table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th>Name</th>
                      <th>Grade</th>
                      <th>School</th>
                      <th>Change Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.isEdit ? (
                      <tr className="bg-warning" key={this.props.index}>
                        <td>
                          <input
                            ref={nameInput => (this.nameInput = nameInput)}
                            defaultValue={name}
                          />
                        </td>
                        <td>
                          <input
                            defaultValue={grade}
                            ref={gradeInput => (this.gradeInput = gradeInput)}
                          />
                        </td>
                        <td>
                          <input
                            ref={schoolInput =>
                              (this.schoolInput = schoolInput)
                            }
                            defaultValue={school}
                          />
                        </td>
                        <td>
                          <i
                            className="far fa-save"
                            onClick={this.editUserSubmit}
                          />
                        </td>
                      </tr>
                    ) : (
                      <tr key={this.props.index}>
                        <td>{name}</td>
                        <td>{grade}</td>
                        <td>{school}</td>
                        <td>
                          <i className="far fa-edit" onClick={this.editUser} />
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
                <Link to="/">
                  <button type="button" className="btn btn-dark">
                    Back
                  </button>
                </Link>
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
      updateUser: actions.updateUser,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DetailsCard);
