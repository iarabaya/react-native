import { useEffect, useRef, useState } from 'react'
import { reqResApi } from '../api/reqRes';
import { ReqResList, User } from '../interfaces/reqRes';

export const useUsers = () => {
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

  return {
    users,
    loadUsers
  }
}
