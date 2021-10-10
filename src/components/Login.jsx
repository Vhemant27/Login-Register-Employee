
import React from 'react'
import './login.css'
import logo from './google.png'
// import logo2 from './bgimage.jpg'

export class Login extends React.Component {
  // constructor(props) {
  //   super(props);
  // }


render() {
  return (
    <div className="base-container" ref={this.props.containerRef}>
 
    <div className="content">
      <div className="image">
        <img src={logo} alt="Googleimg"/>
        <div className="header">Login</div>
      </div>
      <div className="form">
      <div className="form-group">
            <label htmlFor="email" >Email</label>
            <input type="text" name="email" placeholder="email" id="email" />
          </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="password" id="password" />
        </div>
      </div>
    </div>
    <div className="footer">

    <button type ="reset" className="btn">Reset</button>
    &nbsp;
      <button type="button" className="btn">
        Login
      </button>
    </div>
  </div>
  );
}
}

export default Login;
