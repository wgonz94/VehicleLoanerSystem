import React from 'react';
import './style.css'


function Signin (){   

return (
<div className='signUpform'>
    <h1>Sign-In</h1>
 <form>
  <div class="form-group">
    <input type="user-id" class="form-control" id="input-userID" placeholder='User-ID'/>
  </div>
  <div class="form-group">
    <input type="password" class="form-control" id="InputPassword" placeholder='Password'/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
)
}

export default Signin;