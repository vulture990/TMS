import React,{useState} from "react";
import loginImg from "../../login.svg";
import Axios from 'axios'


export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      usernameReg:'',
      passwordReg:'',
      selectValue:''
    };
  }
   register=() => {
  Axios.post('http://localhost:3001/register',{status:this.selectValue,
  email:this.usernameReg,
  password:this.passwordReg}).then((response)=>{
    console.log(response);
  });
};
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="status">Status</label>
                <select name="status" onChange={(e)=>
                {
                this.setState({selectValue: e.target.value});
                }} >
                    <option value="Eleve">Eleve</option>
                    <option value="Chef d'etablissement">CEdoc</option>
                    <option value="Rapporteur">Rapporteur</option>
                    <option value="Jury">Jury</option>
                </select>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email"  onChange={(e)=>
              {
                this.setState({usernameReg: e.target.value});
              }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" 
              onChange={(e)=>
              {
                this.setState({passwordReg:e.target.value});
              }}
              
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button onClick={this.register} type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}
