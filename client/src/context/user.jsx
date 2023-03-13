import React, {useState, useEffect} from 'react';

const UserContext = React.createContext();

function UserProvider({children}){
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch('/api/auth')
    .then(res => {
      if (res.ok){
        res.json().then(currentUser => setUser(currentUser))
      }
    })
  }, []);
  
  return (
      <UserContext.Provider value={{user, setUser}}> 
          {children} 
      </UserContext.Provider> 
  )

}

export { UserContext, UserProvider };



//function UserProvider({ children }) {
//    const [user, setUser] = useState(null);
 //   return (
  //    <UserContext.Provider value={{ user, setUser }}>
    //    {children}
     // </UserContext.Provider>
    //);
  //}