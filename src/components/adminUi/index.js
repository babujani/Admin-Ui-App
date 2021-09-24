import {Component} from 'react'
import UserInfo from '../userInfo'

import './index.css'

const initialUserDetailsList = [
  {
    id: '1',
    name: 'Aaron Miles',
    email: 'aaron@mailinator.com',
    role: 'member',
  },
  {
    id: '2',
    name: 'Aishwarya Naik',
    email: 'aishwarya@mailinator.com',
    role: 'member',
  },
  {
    id: '3',
    name: 'Arvind Kumar',
    email: 'arvind@mailinator.com',
    role: 'admin',
  },
  {
    id: '4',
    name: 'Caterina Binotto',
    email: 'caterina@mailinator.com',
    role: 'member',
  },
  {
    id: '5',
    name: 'Chetan Kumar',
    email: 'chetan@mailinator.com',
    role: 'member',
  },
  {
    id: '6',
    name: 'Jim McClain',
    email: 'jim@mailinator.com',
    role: 'member',
  },
  {
    id: '7',
    name: 'Mahaveer Singh',
    email: 'mahaveer@mailinator.com',
    role: 'member',
  },
  {
    id: '8',
    name: 'Rahul Jain',
    email: 'rahul@mailinator.com',
    role: 'admin',
  },
  {
    id: '9',
    name: 'Rizan Khan',
    email: 'rizan@mailinator.com',
    role: 'member',
  },
  {
    id: '10',
    name: 'Sarah Potter',
    email: 'sarah@mailinator.com',
    role: 'admin',
  },
  {
    id: '11',
    name: 'Keshav Muddaiah',
    email: 'keshav@mailinator.com',
    role: 'member',
  },
  {
    id: '12',
    name: 'Nita Ramesh',
    email: 'nita@mailinator.com',
    role: 'member',
  },
  {
    id: '13',
    name: 'Julia Hunstman',
    email: 'julia@mailinator.com',
    role: 'member',
  },
  {
    id: '14',
    name: 'Juan Alonso',
    email: 'juan@mailinator.com',
    role: 'admin',
  },
  {
    id: '15',
    name: 'Gabriel Montoya',
    email: 'gabriel@mailinator.com',
    role: 'admin',
  },
  {
    id: '16',
    name: 'Beatrice Iglesias',
    email: 'beatrice@mailinator.com',
    role: 'admin',
  },
  {
    id: '17',
    name: 'Sarah Symms',
    email: 'sarah.s@mailinator.com',
    role: 'admin',
  },
  {
    id: '18',
    name: 'Patrick Pinheiro',
    email: 'patrick@mailinator.com',
    role: 'admin',
  },
  {
    id: '19',
    name: 'Anand Patel',
    email: 'anand@mailinator.com',
    role: 'member',
  },
  {
    id: '20',
    name: 'Kishore Kalburgi',
    email: 'kishore@mailinator.com',
    role: 'member',
  },
  {
    id: '21',
    name: 'Rebecca Norris',
    email: 'rebecca@mailinator.com',
    role: 'member',
  },
  {
    id: '22',
    name: 'Özgür Başak',
    email: 'ozgur@mailinator.com',
    role: 'member',
  },
]

class AdminUi extends Component {
  state = {
    searchInput: '',
    updatedUserDetailsList: initialUserDetailsList,
  }

  filterUserList = event => {
    this.setState({searchInput: event.target.value})
  }

  userDelete = id => {
    const {updatedUserDetailsList} = this.state
    const updatedList = updatedUserDetailsList.filter(
      userData => userData.id !== id,
    )
    this.setState({updatedUserDetailsList: updatedList})
  }

  render() {
    const {searchInput, updatedUserDetailsList} = this.state

    const searchDetailsList = updatedUserDetailsList.filter(
      detailsList =>
        detailsList.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        detailsList.email.toLowerCase().includes(searchInput.toLowerCase()) ||
        detailsList.role.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="adminUi-page-background">
        <h1 className="admin-page-header">Details of users</h1>
        <input
          type="search"
          className="admin-search-bar"
          placeholder="Search by name,email or role"
          value={searchInput}
          onChange={this.filterUserList}
        />
        <div className="user-details-section">
          <div className="user-details-column-section">
            <input className="check-box" type="checkbox" />
            <span className="column-head">Name</span>
            <span className="column-head">Email</span>
            <span className="column-head">Role</span>
            <span className="column-head">Action</span>
          </div>
          {searchDetailsList.map(userDetails => (
            <UserInfo
              userDetails={userDetails}
              key={userDetails.id}
              deleteUser={this.userDelete}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default AdminUi
