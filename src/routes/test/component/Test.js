import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

function Test (props) {
  const { a, changea } = props
  const changeHandlerA = () => {
    changea({ a: 1 })
  }
  return (
    <div>
      hello world {a}
      <Button onClick={changeHandlerA}>简单发送一个action</Button>
    </div>
  )
}
Test.propTypes = {
  a: PropTypes.number,
  changea: PropTypes.func,
}
export default Test
