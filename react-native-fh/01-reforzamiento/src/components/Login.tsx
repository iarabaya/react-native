import { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean,
  token: string | null,
  username: string,
  nombre: string
}

const initialState: AuthState = {
  validando: true,
  token: null,
  username: '',
  nombre: ''
}

type LoginPayload = {
  username: string,
  nombre: string
}

type AuthAction = 
  { type: 'logout' } | { type: 'login', payload: LoginPayload }

const authReducer = ( state: AuthState, action: AuthAction ): AuthState =>{
  
  switch (action.type){
    case 'logout':
      return {
        validando: false,
        token: null,
        nombre: '',
        username: ''
      }
    
      case 'login':
        const { username } = action.payload
        return {
          validando: false,
          token: 'ABC123',
          nombre: action.payload.nombre, 
          username: username //otra forma de pasarlo, tambien se puede dejar solo username,
        }

    default:
      return state;
  }
}


export const Login = () => {

  const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState);

  useEffect(()=>{
    setTimeout(()=>{
      dispatch({ type: 'logout' })
    }
    ,1500);
  }, []);

  const login = ( ) =>{
    dispatch({ 
      type: 'login', 
      payload: { 
        nombre: 'Iara',
        username: 'GreenSmurf'
      } })
  }

  const logout = () =>{
    dispatch({ type: 'logout' })
  }

  if( validando ){
    return (
      <>
       <h1>Login</h1>
        <div className="alert alert-info">
          Validando...
        </div>
      </>
    )
  }

  return (
    <>
     <h1>Login</h1>
     
     {
       ( token ) 
        ? <div className="alert alert-success"> Autenticado como: { nombre } </div>
        : <div className="alert alert-danger"> No autenticado </div>
     }

     {
       ( token )
       ?
       (
        <button
          className="btn btn-danger"
          onClick={ logout }
        >
        Logout
        </button>
       )
       :
       (
        <button
          className="btn btn-primary"
          onClick={ () => login() } //es lo mismo que logout pero completo
        >
          Login
        </button>
       )

     }
      
    </>
  )
}
