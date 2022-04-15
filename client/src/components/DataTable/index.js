import React from "react";
// Styles
import "./style.css";


const DataTable = props => {
  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <th>
              <span className="column-sort">
               Name
              </span>
            </th>
            <th>
              <span className="column-sort">
               Email Id
              </span>
            </th>
            <th>
              <span className="column-sort">
               Created At
              </span>
            </th>
            <th>
              <span className="column-sort">
               Updated At
              </span>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {(props.users && props.users.length) ? (
            props.users.map((user, item) => (
              <tr key={item}>
                <td>{user.name}</td>
                <td>{user.emailId}</td>
                <td>{user.createdAt}</td>
                <td>{user.updatedAt}</td>
                <td className="field-actions">
                  <button
                    className="primary-btn"
                    onClick={() => {
                      props.setCurrentUser(user);
                      props.setActiveModal(true)
                    }}>
                    View
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">
                <div className="no-record-message">No Record!</div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
