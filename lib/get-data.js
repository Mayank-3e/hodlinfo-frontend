const url=process.env.NEXT_PUBLIC_backenduri

export default async function getdata()
{
  let data
  try
  {
    data=await fetch(url)
    data=await data.json()
  }
  catch (e)
  {
    console.log(e)
  }
  return data
}