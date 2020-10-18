import React, { Component } from 'react';

class Seeker extends React.Component {
    constructor(){
        super();
        this.state = {
          isSeekerClicked:false
        };
      }


      handleForm = (e) => {
          e.preventDefault();
       this.setState({isSeekerClicked:true})
      }
    render() {
        const{isSeekerClicked} = this.state;

        return (
            isSeekerClicked?
            <form className="job-form">
            <input id="job-seeker" type="text" placeholder="Name" required />
            <input id="job-seeker" type="text" placeholder="Email" required />
            <input id="job-seeker"  type="text" placeholder="Phone"  />
            <h3>Work Experience</h3>
            <input type="radio" id="fresher" value="Fresher" name="Work Experience"/>
            <label for="Fresher">Fresher</label><br></br>
            <input type="radio" id="experience" value="experince" name="Work Experience"/>
            <label for="experince">Experience</label>

            <div >
          
            
            <select  class="input-field-location" name="City" id="City">
                <option selected>Job Search Location</option> 
             <option value="India">Banglore</option>
             <option value="Australia">Gurgram</option>
             <option value="England">Chennai</option>
              <option value="Bangladesh">Noida</option>
              </select>
             <div> <input placeholder="Upload Resume" id="resume"/></div>
             <button id="broadcast-btn">Broadcast</button>
        </div>
 
          </form>:<a href=""onClick={this.handleForm}>Job Seeker</a>
        );
    }
}

export default Seeker;