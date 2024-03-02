import React from 'react'
import InnerBodyHeader from '../InnerBodyHeader/InnerBodyHeader'
import InnerContainer from '../InnerContainer/InnerContainer'

const InnerBody = () => {
  return (
    <>
        <InnerBodyHeader heading='Dashboard'></InnerBodyHeader>
        <InnerContainer></InnerContainer>
    </>
  )
}

export default InnerBody