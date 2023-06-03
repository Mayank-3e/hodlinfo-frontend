import Footer from "@/components/footer";
import Loader from "@/components/loading";
import Navbar from "@/components/navbar";
import Table from "@/components/table";
import getdata from "@/lib/get-data";
import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";

export default function Home()
{
  const [loading,setLoading]=useState(false)
  const [data,setData]=useState([{}])
  useEffect(()=>
  {
    async function get()
    {
      setLoading(true)
      const result=await getdata()
      setData(result)
      setLoading(false)
    }
    get()
  },[])

  if(loading) return <Loader/>
  if(!data) return <Alert>No data! Please retry.</Alert>

  return <>
    {data.err && <Alert>{data.err}</Alert>}
    <Navbar setData={setData} setLoading={setLoading}/>
    <Table data={data?.data}/>
    <Footer/>
  </>
}
