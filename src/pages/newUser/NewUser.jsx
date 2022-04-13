import React from 'react';
import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">

            <div className="newUserItem">
                <label className="newLabel">Username</label>
                <input type="text" placeholder="john" className="newUserInput" />
            </div>


            <div className="newUserItem">
                <label className="newLabel">Full Name</label>
                <input type="text" placeholder="john snow" className="newUserInput" />
            </div>

            <div className="newUserItem">
                <label className="newLabel">Email</label>
                <input type="text" placeholder="user@examle.com" className="newUserInput" />
            </div>

            <div className="newUserItem">
                <label className="newLabel">Passwords</label>
                <input type="text" placeholder="123123" className="newUserInput" />
            </div>

            <div className="newUserItem">
                <label className="newLabel">Phone</label>
                <input type="text" placeholder="+1 123 456 67" className="newUserInput" />
            </div>

            <div className="newUserItem">
                <label className="newLabel">Address</label>
                <input type="text" placeholder="New York | USA" className="newUserInput" />
            </div>

            <div className="newUserItemRadio">

                <div className="newUserLabel">
                <label className="newLabel">Gender</label>
                </div> 

                <div className="newUserOption">
                <input type="radio" name="gender" id="male" value="male" />
                <label for="male">Male</label>

                <input type="radio" name="gender" id="female" value="female" />
                <label for="female">Female</label>

                <input type="radio" name="gender" id="other" value="other" />
                <label for="male">Other</label>
                </div>

            </div>

            <div className="newUserItem">
                <label className="newLabel">Active</label>
                <select className="newUserSelect" name="active" id="active" >
                  <option value="yes">Yes</option>
                  <option value="No">No</option>
                  </select>
            </div>
        </form>


         <div className="newUserItemButton">
             <button type="submit" className="newUserItemBtn">Create</button>
         </div>
         

    </div>
  )
}
