import React from 'react'

const FinshedScreen = ({points , maxPossible , highscore , dispatch}) => {
    const percentage = (points / maxPossible) * 100;
    let emoji;
    if(percentage === 100) emoji = "🥇"; 
    if(percentage >= 80 && percentage < 100) emoji = "🎉";
    if(percentage >= 50 && percentage < 80) emoji = "😀";
    if(percentage >=0 && percentage < 50) emoji = "🤨";
    if(percentage === 0) emoji = "😂😁😂";
  return (
    <>
    <p className='result'>{emoji}you scored <strong>{points}</strong> out of {maxPossible}({Math.ceil(percentage)})</p>
    <p className='highscore'>(Highscore: {highscore} points)</p>
    <button className='btn btn-ui' onClick={() => dispatch({type: "restart"})}>Restart</button>
    </>
  )
}

export default FinshedScreen
