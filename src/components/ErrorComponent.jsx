import React from 'react'
import LottiesErrorNetwork from './lottie-components/LottieErrorNetwork';
import LottieErrorGeneric from './lottie-components/LottieErrorGeneric';

const ErrorComponent = ({error}) => {

  console.log(error);

  if(error === 'Network Error') {
    return <LottiesErrorNetwork/>
  }
  
  return (
    <div className='h-full w-full  pt-16 bg-quaternary/50 dark:bg-dark-primary/90 dark:text-dark-quaternary'>
      <LottieErrorGeneric/>
      <p className='text-center p-4 text-3xl'>L'errore in questione è: {error}</p>
    </div>
  )
}

export default ErrorComponent