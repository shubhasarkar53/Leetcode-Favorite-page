import React from 'react'

function LevelSquare({level="easy",totalQuestionCount=0,submittedQuestionCount=0}) {

    const baseStyles = "font-medium  capitalize"
    const easyStyle = "text-green-primary"
    const medStyle = "text-yellow-primary"
    const hardStyle = "text-red-primary"
  return (
    <div className='py-[0.65rem] px-8 bg-black-light text-xs rounded-md text-white flex flex-col items-center justify-center'>
        <div className={`${level=="easy"&&easyStyle || level=="med"&&medStyle || level=="hard"&&hardStyle || ""} ${baseStyles}`}>{level}</div>
        {totalQuestionCount==0 || totalQuestionCount == null ? <div>0</div> : <div>{submittedQuestionCount}/{totalQuestionCount}</div>}
    </div>
  )
}

export default LevelSquare