import './App.css';
import React from 'react'
import { Component } from 'react';



class App extends Component {


  //API CALL START ************************************************************************************
//   constructor() {
//     super() 
//     this.state = {
//       loading: false,
//       character: {}
//     }
//   }

//   componentDidMount() {
//     this.setState({loading:true})
//     fetch("https://swapi.dev/api/people/4")
//       .then(response => response.json())
//       .then(data => {
//         this.setState({
//           loading: false,
//           character: data
//         })
//       })
//   }


//   render() {

//     const text = this.state.loading ? "Loading..." : this.state.character.name
//     return (
//       <div className="App">
//         <h1>
//           {text}
//         </h1>
//       </div>
//     )
//   }

//API CALL FINISH ************************************************************************************


// REACT MY FORM START ************************************************************************************

//   constructor() {
//     super() 
//     this.state = {
//       firstName: "",
//       lastName: "",
//       isFriendly: true,
//       gender: "",
//       favColor: "blue"
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(event) {
//     const {name, value, type, checked} = event.target
//     type === "checkbox" ? this.setState({ [name]: checked })  : this.setState({ [name]: value })
//     }

//   render() {
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <input 
//           type="text" 
//           value={this.state.firstName} 
//           name="firstName" 
//           placeholder="First Name" 
//           onChange={this.handleChange} 
//         />
//         <br />
//         <input 
//           type="text" 
//           value={this.state.lastName} 
//           name="lastName" 
//           placeholder="Last Name" 
//           onChange={this.handleChange} 
//         />
//         <br />
//         <textarea 
//           value="some default value"
//           onChange={this.handleChange}
//         />
//         <br />
//         <input 
//           type="checkbox" 
//           name="isFriendly"
//           checked={this.state.isFriendly}
//           onChange={this.handleChange}
//         />
//           isfriendly?
//         <br />

//         <input 
//           type="radio" 
//           name="gender"
//           value="male"
//           checked={this.state.gender === "male"}
//           onChange={this.handleChange}
//         />
//         Male
//         <br />

//         <input 
//           type="radio" 
//           name="gender"
//           value="female"
//           checked={this.state.gender === "female"}
//           onChange={this.handleChange}
//         />
//         Female
//         <br />

//         <label>Favorite color:</label>
//         <select 
//           name="favColor"
//           value={this.state.favColor}
//           onChange={this.handleChange}
//           >
//             <option value="blue">blue</option>
//             <option value="green">green</option>
//             <option value="red">red</option>
//             <option value="yellow">yellow</option>
//             <option value="orange">orange</option>
//           </select>

//         <h1>{this.state.firstName} {this.state.lastName}</h1>
//         <h2>You are a {this.state.gender}</h2>
//         <h2>Your selected color is: {this.state.favColor}</h2>
//         <button>Submit</button>
//       </form>
//     )
//   }

// }

// export default App;


// REACT MY FORM FINISH ************************************************************************************



// SIR'S FORM CODE START ************************************************************************************

// import React, {Component} from "react"

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             firstName: "",
//             lastName: "",
//             isFriendly: false,
//             gender: "",
//             favColor: "blue"
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
    
//     handleChange(event) {
//         const {name, value, type, checked} = event.target
//         type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
//     }
    
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input 
//                     type="text" 
//                     value={this.state.firstName} 
//                     name="firstName" 
//                     placeholder="First Name" 
//                     onChange={this.handleChange} 
//                 />
//                 <br />
//                 <input 
//                     type="text" 
//                     value={this.state.lastName} 
//                     name="lastName" 
//                     placeholder="Last Name" 
//                     onChange={this.handleChange} 
//                 />
                
//                 {
//                     /**
//                      * Other useful form elements:
//                      * 
//                      *  <textarea /> element
//                      *  <input type="checkbox" />
//                      *  <input type="radio" />
//                      *  <select> and <option> elements
//                      */
//                 }
                
//                 <textarea 
//                     value={"Some default value"}
//                     onChange={this.handleChange}
//                 />
                
//                 <br />
                
//                 <label>
//                     <input 
//                         type="checkbox" 
//                         name="isFriendly"
//                         checked={this.state.isFriendly}
//                         onChange={this.handleChange}
//                     /> Is friendly?
//                 </label>
//                 <br />
//                 <label>
//                     <input 
//                         type="radio" 
//                         name="gender"
//                         value="male"
//                         checked={this.state.gender === "male"}
//                         onChange={this.handleChange}
//                     /> Male
//                 </label>
//                 <br />
//                 <label>
//                     <input 
//                         type="radio" 
//                         name="gender"
//                         value="female"
//                         checked={this.state.gender === "female"}
//                         onChange={this.handleChange}
//                     /> Female
//                 </label>
//                 {/* Formik */}
//                 <br />
                
//                 <label>Favorite Color:</label>
//                 <select 
//                     value={this.state.favColor}
//                     onChange={this.handleChange}
//                     name="favColor"
//                 >
//                     <option value="blue">Blue</option>
//                     <option value="green">Green</option>
//                     <option value="red">Red</option>
//                     <option value="orange">Orange</option>
//                     <option value="yellow">Yellow</option>
//                 </select>
                
//                 <h1>{this.state.firstName} {this.state.lastName}</h1>
//                 <h2>You are a {this.state.gender}</h2>
//                 <h2>Your favorite color is {this.state.favColor}</h2>
//                 <button>Submit</button>
//             </form>
//         )
//     }
// }

// export default App


// SIR'S FORM CODE FINISH ************************************************************************************



// FORM PRACTICE MY CODE START SCRIMBA LESSON 48 **********************************************************





constructor() {
  super()
  this.state = {
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    veg: false,
    student: false,
    firstTime: false,
    ready: false
  }

  this.handleChange = this.handleChange.bind(this)
  this.submitted = this.submitted.bind(this)
}

handleChange(event) {
  const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name] : checked }) : this.setState({ [name] : value })
}


submitted() {
  const info = {
    veg: this.state.veg ? "Vegetarian":"",
    student: this.state.student ? " Student":"",
    firstTime: this.state.firstTime ? " First-time":"",
    ready: this.state.ready ? " Ready":""
  }
  alert("First name: " + this.state.firstName + "\n" +  
        "Last name: " + this.state.lastName + "\n" +
        "Age: " + this.state.age + "\n" +
        "Gender: " + this.state.gender + "\n" +
        "Location: " + this.state.destination + "\n" +
        "Some info: " + info.veg  +  info.student + info.firstTime + info.ready 
        )
}

render() {
  return (
      <main className="box">
          <form>
              <input 
                placeholder="First Name" 
                onChange={this.handleChange} 
                name="firstName" 
                value={this.state.firstName}
              /><br />
              <input 
                placeholder="Last Name" 
                onChange={this.handleChange}
                name="lastName"
                value={this.state.lastName}
              /><br />
              <input 
                placeholder="Age" 
                onChange={this.handleChange}
                name="age"
                value={this.state.age}
              /><br />
              
              {/* Create radio buttons for gender here */}
              <input 
                type="radio" 
                name="gender"
                value="male"
                onChange={this.handleChange}
                checked={this.state.gender === "male"}
              /> <label>Male</label>
              <br />

              <input 
                type="radio" 
                name="gender"
                value="female"
                onChange={this.handleChange}
                checked={this.state.gender === "female"}
              /> <label>Female</label>
              <br />
              
              {/* Create select box for location here */}
              Destination:
              <select 
                name="destination"
                value={this.state.destination}  
                onChange={this.handleChange}
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
                value={this.state.veg}
                name="veg"
                onChange={this.handleChange}
              /> Vegetarian
              <br />
              <input 
                type="checkbox" 
                value={this.state.student}
                name="student"
                onChange={this.handleChange}
              /> Student
              <br />
              <input 
                type="checkbox" 
                value={this.state.firstTime}
                name="firstTime"
                onChange={this.handleChange}
              /> First-time
              <br />
              <input 
                type="checkbox" 
                value={this.state.ready}
                name="ready"
                onChange={this.handleChange}
              /> Ready
              <br />
              
              <button type="submit" onClick={this.submitted}>Submit</button>
          </form>
          <hr />
          <h2>Entered information:</h2>
          <p>Your name: {this.state.firstName} {this.state.lastName}{/* First and last name here */}</p>
          <p>Your age: {this.state.age} {/* Age here */}</p>
          <p>Your gender: {this.state.gender} {/* Gender here */}</p>
          <p>Your destination: {this.state.destination} {/* Destination here */}</p>
          <p>
              Your dietary restrictions: {this.state.veg && "Vegetarian"}{this.state.student && ", Student"}{this.state.firstTime && ", First-time"}{this.state.ready && ", Ready"}
              {/* Dietary restrictions here, comma separated */}
          </p>
      </main>
  )
}
}

export default App

// FORM PRACTICE MY CODE FINISH SCRIMBA LESSON 48 **********************************************************