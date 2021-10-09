import { useEffect, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { ReqResList, User } from "../interfaces/reqRes"


export const Usuarios = () => {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    //API call
    getUsers();
  }, [])


  const getUsers = () =>{
    reqResApi.get<ReqResList>('/users')
      .then(res =>{
        setUsers( res.data.data );
      })
      .catch(err => console.log(err))
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
      >
        Next
      </button>
      
    </>
  )
}
