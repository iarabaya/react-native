import { useState } from 'react';

export const useForm = <T extends Object>( form: T ) => {

  const [state, setState] = useState( form )

  const onChange = (value: string, input: keyof T ) => {
    setState({
      ...state,
      [input]: value
    })
  }

  return {
    ...state,
    form: state,
    onChange
  }
}
