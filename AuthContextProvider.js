import React,{createContext, useState} from 'react';

export const AuthContext = createContext({
  hasUser: false,
  setUser: ()=>{}
})
//change AuthContext to AuthContextProvider at import points
export default function AuthContextProvider (props) {

  const [hasUser, setUser] = useState(false)
  
  return(
    <AuthContext.Provider value={{hasUser, setUser}}>
      {props.children}
    </AuthContext.Provider>
  )
}

