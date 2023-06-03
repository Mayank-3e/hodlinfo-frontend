import styles from "./footer.module.scss"

export default function Footer()
{
  return <div className={styles.container}>
    <div>
      <span>Copyright &copy; 2019</span>
      <span>HodlInfo.com</span>
    </div>
    <a href="mailto:support@hodlinfo.com">Support</a>
  </div>
}