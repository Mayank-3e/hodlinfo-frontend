import styles from "./loading.module.scss"

export default function Loader()
{
  return <div className={styles.container}>
    <img src="/load.gif"/>
  </div>
}