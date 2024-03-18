import React from 'react'
import InnerBodyHeader from '../../components/InnerBodyHeader/InnerBodyHeader'
import styles from './TrackInitiatedRequests.module.css'
import TrackRequestsContainerHandler from '../../components/TrackRequestsContainer/TrackRequestsContainerHandler'

const TrackInitiatedRequests = () => {
  return (
    <>
      <div className={styles.main}>
        <InnerBodyHeader heading="Track Requests" />
        <TrackRequestsContainerHandler/>
      </div>
    </>
  )
}

export default TrackInitiatedRequests