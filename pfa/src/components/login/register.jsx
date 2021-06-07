import React,{useState} from "react";
import loginImg from "../../login.svg";



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
                <select name="status" >
                    <option value="Eleve">Eleve</option>
                    <option value="Chef d'etablissement">Chef d'etablissement</option>
                    <option value="Rapporteur">Rapporteur</option>
                    <option value="Jury">Jury</option>
                </select>

              
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}
