const url='http://localhost:4000'

export default async function getdata()
{
  let data=await fetch(url)
  data=await data.json()
  return data
}