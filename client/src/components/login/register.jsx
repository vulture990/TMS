import React,{useState} from "react";
import loginImg from "../../login.svg";
import Axios from 'axios'

const [usernameReg,setUsernameReg]=useState('');
const [passwordReg,setPasswordReg]=useState('');
const [selectValue, setSelectValue] = useState('');
const register=() => {
  Axios.post('http://localhost:3001/register',{status:selectValue,
  email:usernameReg,
  password:passwordReg}).then((response)=>{
    console.log(response);
  });
};
export class Register extends React.Component {
  constructor(props) {
    super(props);
  }
  
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
                setSelectValue(e.target.value);
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
                setUsernameReg(e.target.value);
              }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" 
              onChange={(e)=>
              {
                setPasswordReg(e.target.value);
              }}
              
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button onClick={register} type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}
