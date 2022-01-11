import React, { Component } from 'react'
import { SaveNewStudent } from './Services/HttpService';

class StudentComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            name:'',
            birthday:'',
            nationalId:'',
            gender:'',
            nationality:'',
            emergencyContact:''
        }

        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeBirthdayHandler=this.changeBirthdayHandler.bind(this);
        this.changeNationalIdHandler=this.changeNationalIdHandler.bind(this);
        this.changeGenderHandler=this.changeGenderHandler.bind(this);
        this.changeNationalityHandler=this.changeNationalityHandler.bind(this);
        this.changeEmergencyContactHandler=this.changeEmergencyContactHandler.bind(this);

        this.saveStudent=this.saveStudent.bind(this);
    }

    changeNameHandler=(event)=>{
        this.setState({name: event.target.value});
    }

    changeBirthdayHandler=(event)=>{
        this.setState({birthday: event.target.value});
    }

    changeNationalIdHandler=(event)=>{
        this.setState({nationalId: event.target.value});
    }

    changeGenderHandler=(event)=>{
        this.setState({gender: event.target.value});
    }

    changeNationalityHandler=(event)=>{
        this.setState({nationality: event.target.value});
    }

    changeEmergencyContactHandler=(event)=>{
        this.setState({emergencyContact: event.target.value});
    }

    saveStudent=(e)=>{
        e.preventDefault();
        let student={
            name: this.state.name,
            birthday: this.state.birthday,
            nationality: this.state.nationality, 
            gender: this.state.gender,
            nationalId: this.state.nationalId,
            emergencyContact: this.state.emergencyContact
        };
        //api call
        console.log('Student=>'+JSON.stringify(student));
        async function fetchMyAPI(){ let result = await SaveNewStudent(student);
            //TODO
            // if (!result)
            // {
            //     setMessage({
            //             show: true, 
            //             type: 'error',
            //             msg: 'Oops,Error'
            //     });
            // }
            //     setMessage({
            //          show: true, 
            //          type: 'success',
            //          msg: 'successful Booking'
            //     });
        }
    }
    cancel(){
        this.props.history.push();
    }

    render(){
        return(
            <div>

            <div className="container">
                <div className="row">
                    <br></br>
                    <h1 className="text-center">Student Registration Form</h1>
                    <br></br>
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Name:</label>
                                    <input placeholder="Name" name="Name" className="form-control"
                                    value={this.state.name} onChange={this.changeNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Birthday:</label>
                                    <input placeholder="Birthday" name="Birthday" className="form-control"
                                    value={this.state.birthday} onChange={this.changeBirthdayHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>NationalId:</label>
                                    <input placeholder="NationalId" name="NationalId" className="form-control"
                                    value={this.state.nationalId} onChange={this.changeNationalIdHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Gender:</label>
                                    <input placeholder="Gender" name="gender" className="form-control"
                                    value={this.state.gender} onChange={this.changeGenderHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Nationality:</label>
                                    <input placeholder="Nationality" name="nationality" className="form-control"
                                    value={this.state.nationality} onChange={this.changeNationalityHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>EmergencyContact:</label>
                                    <input placeholder="EmergencyContact" name="emergencyContact" className="form-control"
                                    value={this.state.emergencyContact} onChange={this.changeEmergencyContactHandler}/>
                                </div>
                                <br></br>
                                <br></br>
                                <button className="btn btn-success" onClick={this.saveStudent}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind} style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default StudentComponent
