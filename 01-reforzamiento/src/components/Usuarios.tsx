import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { ReqResList, User } from "../interfaces/reqRes"


export const Usuarios = () => {

  const [users, setUsers] = useState<User[]>([]);
  // const [page, setPage ] = useState(1);
  const pageRef = useRef(1);

  useEffect(() => {
    //API call
    loadUsers();
  }, [])


  const loadUsers = async() =>{
    const response = await reqResApi.get<ReqResList>('/users', {
      params: { //mando la configuracion por parametro
        page: pageRef.current //mando el valor de la referencia
      }
    });

    if( response.data.data.length > 0){
      setUsers( response.data.data );
      pageRef.current ++;
    }else{
      alert('There are no more users to show.');
    }
  }

  const renderItem = ({ id, first_name, last_name, email, avatar }: User) =>{
    return(
      <tr key={ id.toString() }>
        <th>
          <img 
            src={ avatar } 
            alt={ first_name } 
            style={{
              width: 50,
              borderRadius: 100
            }}
          />
        </th>
        <th>{ first_name } { last_name }</th>
        <th>{ email }</th>
      </tr>
    )
  }

  return (
    <>
      <h1>Usuarios</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map( user => renderItem(user))
          }
        </tbody>
      </table>

      <button
        className="btn btn-primary"
        onClick={ loadUsers }
      >
        Next
      </button>
      
    </>
  )
}
