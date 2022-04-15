import React, { useState, useEffect } from "react";

const UpdateUser = props => {
  const [user, setUser] = useState({});

  const onInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const cancel = event => {
    event.preventDefault();
    props.setActiveModal(false)
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.setCurrentUser(user);
        props.onSubmit();
      }}
    >
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={(user && user.name) ? user.name : ''}
          onChange={onInputChange}
          disabled
        />
      </div>
      <div className="form-group">
        <label>Email Id</label>
        <input
          type="text"
          name="emailId"
          value={(user && user.emailId) ? user.emailId : ''}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group form-group--actions">
        <button className="primary-btn">Update</button>
        <button className="cancel-btn" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UpdateUser;
