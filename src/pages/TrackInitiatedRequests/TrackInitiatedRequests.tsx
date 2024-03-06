import React from 'react'
import InnerBodyHeader from '../../components/InnerBodyHeader/InnerBodyHeader'
import styles from './TrackInitiatedRequests.module.css'
import TrackRequestsContainer from '../../components/TrackRequestsContainer/TrackRequestsContainer'

const TrackInitiatedRequests = () => {
  return (
    <>
      <div className={styles.main}>
        <InnerBodyHeader heading="Track Requests" />
        <TrackRequestsContainer/>
      </div>
    </>
  )
}

export default TrackInitiatedRequests