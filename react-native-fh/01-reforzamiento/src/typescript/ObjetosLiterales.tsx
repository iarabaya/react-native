
interface Persona {
  nombreCompleto: string,
  edad: number,
  direccion: Direccion
} 

interface Direccion {
  pais: string,
  casaNro: number
}


export const ObjetosLiterales = () => {

  const persona: Persona = {
    nombreCompleto: 'iara',
    edad: 24,
    direccion: {
      pais: 'Argentina',
      casaNro: 3029
    }
  }

  return (
    <>
     <h3>Objetos literales</h3> 
     <code>
       <pre>
        { JSON.stringify(persona, null, 2) };
       </pre>
     </code>
    </>
  )
}