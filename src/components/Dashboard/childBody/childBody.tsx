// //@ts-nocheck

import { Chrono } from 'react-chrono'
import { Phase } from '../models/model'
import './styles/childBody.css'

const ChildBody = (phase: Phase) => {
  if (phase.steps.length) {
    return (
      <div style={{ width: '100%', height: '55%', color: '#0f52ba' }}>
        <Chrono
          items={phase.steps}
          mode="VERTICAL_ALTERNATING"
          allowDynamicUpdate={true}
        />
      </div>
    )
  } else {
    return (
      <div className="chrono">
        <p>n/a</p>
      </div>
    )
  }
}

export default ChildBody
