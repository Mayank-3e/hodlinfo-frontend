import styles from "./table.module.scss"

export default function Table({data})
{  
  return <div className={styles.container}>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Last</th>
          <th>Buy</th>
          <th>Sell</th>
          <th>Volume</th>
          <th>Base unit</th>
        </tr>
      </thead>
      {data && <tbody>
        {data.map((item,i)=>
          <tr key={i}>
            <td>{i+1}</td>
            <td>{item.name}</td>
            <td>{item.last}</td>
            <td>{item.buy}</td>
            <td>{item.sell}</td>
            <td>{item.volume}</td>
            <td>{item.base_unit}</td>
          </tr>
        )}
      </tbody>}
    </table>
  </div>
}