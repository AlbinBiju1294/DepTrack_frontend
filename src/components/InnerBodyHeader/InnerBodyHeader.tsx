import styles from './InnerBodyHeader.module.css'

const InnerBodyHeader = ({heading}:{heading:string}) => {
  return (
    <>
        <h4 className={styles.heading}>{heading}</h4>
    </>
  )
}

export default InnerBodyHeader