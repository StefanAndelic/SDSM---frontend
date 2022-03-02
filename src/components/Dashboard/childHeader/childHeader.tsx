// @ts-nocheck

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheckCircle,
  faPauseCircle,
  faPlayCircle,
  faUserCircle,
  IconDefinition,
} from '@fortawesome/free-regular-svg-icons'
import { Phase } from '../models/model'

const ChildHeader = (props: Phase) => {
  let color: string
  let iconName: IconDefinition

  if (props.status === 'complete') {
    color = '#4caf50'
    iconName = faCheckCircle
  } else if (props.status === 'inprogress') {
    color = '#2196f3'
    iconName = faPlayCircle
  } else if (props.status === 'incomplete') {
    color = 'grey'
    iconName = faPauseCircle
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'center',
        }}
      >
        {props.teamMembers.map((_, idx) => (
          <span
            style={{ fontSize: '20px', color: 'grey', padding: '0 8px 0 0' }}
            key={idx}
          >
            <FontAwesomeIcon icon={faUserCircle} />
          </span>
        ))}
      </div>
      <div className="child-head">
        <span
          style={{
            textAlign: 'right',
            fontSize: '20px',
            color,
            padding: '0 8px 0 0',
          }}
        >
          <FontAwesomeIcon icon={iconName} />
        </span>
        {props.title}
      </div>
      <div className="child-head-href">
        {props.href && <a href={props.href[1]}> Documentation</a>}
      </div>
      <hr className="child-hr" />
    </>
  )
}

export default ChildHeader
