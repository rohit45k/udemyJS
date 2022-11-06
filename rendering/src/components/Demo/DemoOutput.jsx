import React from 'react'
import DemoText from './DemoText';

const DemoOutput = (props) => {
  console.log("Demo Output");
  return (
    <div>
      <p>This is constant Paragraph</p>
      <p>{props.show ? <DemoText /> : ''}</p>
    </div>
  )
}

export default React.memo(DemoOutput)