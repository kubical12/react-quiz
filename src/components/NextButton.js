import React from 'react'

const NextButton = ({dispatch , answer , numQuestions , index}) => {
  //it will only show next button only if answer is not null.(it means if the user selects one of the options)
    if(answer === null) return null;
    //if the questionis not alast question then next button will show.
    if(index < numQuestions - 1)
  return (
    <button className='btn btn-ui' onClick={() => dispatch({type: "nextQuestion"})}>
        Next
    </button>
  )
  // if the question number is last then it will show finished
  if(index === numQuestions - 1)
  return (
    <button className='btn btn-ui' onClick={() => dispatch({type: "finished"})}>
        Finished
    </button>
  )
}

export default NextButton
