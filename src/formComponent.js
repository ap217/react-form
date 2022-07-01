import React from 'react'

function formComponent (props) {
    return(
        <main className="box">
          <form>
              <input 
                placeholder="First Name" 
                onChange={props.handleChange} 
                name="firstName" 
                value={props.data.firstName}
              /><br />
              <input 
                placeholder="Last Name" 
                onChange={props.handleChange}
                name="lastName"
                value={props.data.lastName}
              /><br />
              <input 
                placeholder="Age" 
                onChange={props.handleChange}
                name="age"
                value={props.data.age}
              /><br />
              
              {/* Create radio buttons for gender here */}
              <input 
                type="radio" 
                name="gender"
                value="male"
                onChange={props.handleChange}
                checked={props.data.gender === "male"}
              /> <label>Male</label>
              <br />

              <input 
                type="radio" 
                name="gender"
                value="female"
                onChange={props.handleChange}
                checked={props.data.gender === "female"}
              /> <label>Female</label>
              <br />
              
              {/* Create select box for location here */}
              Destination:
              <select 
                name="destination"
                value={props.data.destination}  
                onChange={props.handleChange}
              >
                <option value="">--choose one--</option>
                <option value="Aagra">Aagra</option>
                <option value="Paris">Paris</option>
                <option value="Tokyo">Tokyo</option>
                <option value="Berlin">Berlin</option>
                <option value="Palanpur">Palanpur</option>
                <option value="Gandhinagar">Gandhinagar</option>
              </select>
              <br />
              
              {/* Create check boxes for dietary restrictions here */}
              <input 
                type="checkbox" 
                value={props.data.veg}
                name="veg"
                onChange={props.handleChange}
              /> Vegetarian
              <br />
              <input 
                type="checkbox" 
                value={props.data.student}
                name="student"
                onChange={props.handleChange}
              /> Student
              <br />
              <input 
                type="checkbox" 
                value={props.data.firstTime}
                name="firstTime"
                onChange={props.handleChange}
              /> First-time
              <br />
              <input 
                type="checkbox" 
                value={props.data.ready}
                name="ready"
                onChange={props.handleChange}
              /> Ready
              <br />
              
              <button type="submit" onClick={this.submitted}>Submit</button>
          </form>
          <hr />
          <h2>Entered information:</h2>
          <p>Your name: {props.data.firstName} {props.data.lastName}{/* First and last name here */}</p>
          <p>Your age: {props.data.age} {/* Age here */}</p>
          <p>Your gender: {props.data.gender} {/* Gender here */}</p>
          <p>Your destination: {props.data.destination} {/* Destination here */}</p>
          <p>
              Your dietary restrictions: {props.data.veg && "Vegetarian"}{props.data.student && ", Student"}{props.data.firstTime && ", First-time"}{props.data.ready && ", Ready"}
              {/* Dietary restrictions here, comma separated */}
          </p>
      </main>
    )
}

export default formComponent