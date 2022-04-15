
import React, {useEffect} from "react";
import './style.css'
// toster
import { toast } from 'react-toastify';
// redux imports
import { useDispatch, useSelector} from "react-redux";
import {getUsers, onChangeValue, updateUser} from '../Users/actions'
import {selectUsersValue} from './selectors'

// componetes
import DataTable from "../../components/DataTable";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";
import Modal from "../../components/Modal";
import UpdateUser from "../../components/UpdateUser";

const Users = () => {
  // selectors and actionCreator
  const dispatch = useDispatch()
  const fetchData = useSelector(selectUsersValue('userList'))
  const pageSize = useSelector(selectUsersValue('pageSize'))
  const totalCount = useSelector(selectUsersValue('totalCount'))
  const pageNumber = useSelector(selectUsersValue('pageNumber'))
  const loading = useSelector(selectUsersValue('loading'))
  const showUpdateModel = useSelector(selectUsersValue('showUpdateModel'))
  const currentUser = useSelector(selectUsersValue('currentUser'))
  const notify = useSelector(selectUsersValue('notify'))

  useEffect(() => {
    dispatch(getUsers())
  },[dispatch])

  useEffect(() => {
    if (notify) {
      toast[notify.type](notify.message, {
        position: toast.POSITION.TOP_RIGHT
      });
      dispatch(onChangeValue({ target: { id: 'notify', value: null } }))
    }
  },[notify, dispatch])

  const paginate = page => {
    dispatch(onChangeValue({ target: { id: 'pageNumber', value: page } }))
    dispatch(getUsers())
  };

  const setActiveModal = value => {
    dispatch(onChangeValue({ target: { id: 'showUpdateModel', value } }))
  };

  const setCurrentUser = (userObj) => {
    dispatch(onChangeValue({ target: { id: 'currentUser', value: userObj } }))
  };

  const updateCurrentUser = () => {
    dispatch(updateUser())
  };



  return(
    <>
    <header className="header">
      <h4>SERVER SIDE PAGINATION</h4>
    </header>
    <main className="content">
      <div className="container">
        {(loading) ? 
          <Loader/> :
          <div className="content-wrapper">
              <DataTable
                users={(fetchData) ? fetchData : []}
                setCurrentUser= {setCurrentUser}
                setActiveModal={setActiveModal}
              />
              <Pagination
                totalResults={totalCount}
                currentPage={pageNumber}
                pageSize={pageSize}
                paginate={paginate}
              />
          </div>
        }
      </div>
    </main>
    {showUpdateModel && (
        <Modal title="UPDATE USER">
            <UpdateUser
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              setActiveModal={setActiveModal}
              onSubmit={updateCurrentUser}
            />
        </Modal>
    )} 
    </>
  );
};

export default Users;