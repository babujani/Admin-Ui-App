import './index.css'

const UserInfo = props => {
  const {userDetails, deleteUser} = props
  const {id, name, email, role} = userDetails

  const deleteAUser = () => {
    deleteUser(id)
  }

  const changeBackground = () => {
    if (document.getElementById(`check${id}`).checked === true) {
      document.getElementById(`userDetailsId${id}`).classList.add('rowSelected')
    } else {
      document
        .getElementById(`userDetailsId${id}`)
        .classList.remove('rowSelected')
    }
  }

  const editUserDetails = () => {
    document
      .getElementById(`editName${id}`)
      .setAttribute('contentEditable', 'true')
    document
      .getElementById(`editEmail${id}`)
      .setAttribute('contentEditable', 'true')
    document
      .getElementById(`editRole${id}`)
      .setAttribute('contentEditable', 'true')
  }

  return (
    <div id={`userDetailsId${id}`} className="user-info-row-section">
      <input
        id={`check${id}`}
        className="check-box"
        type="checkbox"
        onClick={changeBackground}
      />
      <span id={`editName${id}`} className="row-item ">
        {name}
      </span>
      <span id={`editEmail${id}`} className="row-item ">
        {email}
      </span>
      <span id={`editRole${id}`} className="row-item ">
        {role}
      </span>
      <span>
        <button className="edit-icon" type="button" onClick={editUserDetails}>
          <img
            src="https://raw.githubusercontent.com/google/material-design-icons/master/png/editor/edit_note/materialicons/18dp/1x/baseline_edit_note_black_18dp.png"
            alt="edit"
          />
        </button>
        <button className="button-icon" type="button" onClick={deleteAUser}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </span>
    </div>
  )
}
export default UserInfo
