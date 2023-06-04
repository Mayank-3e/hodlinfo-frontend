const url=process.env.NEXT_PUBLIC_backenduri

export default async function getdata()
{
  let data=await fetch(url)
  data=await data.json()
  return data
}