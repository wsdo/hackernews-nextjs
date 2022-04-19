import React, { useEffect } from 'react'
import axios from 'axios';

const Count = (props) => {

  useEffect(() => {
    fetch('/api/base/check').then(res => {
      console.log(res);
    })
  }, [])

  return (
    <div>
      The count is {Math.random()}
    </div>
  )
}

export default Count;
