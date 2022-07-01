import React from 'react'
import { Component } from 'react'
import formComponent from './formComponent'

class form extends Component {
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
            <formComponent
                handleChange={this.handleChange}
                data={this.state}
            />
            )
        }
        
    
}

export default form