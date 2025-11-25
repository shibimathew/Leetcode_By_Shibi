/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
    if(password.length<8)return false
   
      if(!password.match(/[a-z]/)){
        return false
      }
       if(!password.match(/[0-9]/)){
        return false
      }
       if(!password.match(/[A-Z]/)){
        return false
      }
      if(!password.match(/[!@#$%^&*()\-\+]/)){
      return false
      }
    //   if(password.match(/(.)\1/)){
    //     return false
    //   }
    for (let i = 0; i < password.length; i++) {
    if (password[i] === password[i +1]) return false;
}
    
        return true
    
};