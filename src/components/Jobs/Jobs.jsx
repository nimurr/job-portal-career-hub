import { useLoaderData } from "react-router-dom"

 
export default function Jobs() {
    const jobData = useLoaderData();
    console.log(jobData)
  return (
    <div>
        <h2 className="text-center text-2xl font-semibold my-5"> All jobs </h2>
        {
            jobData.map(data => <h2 key={data.id}>{data.title}</h2>)
        }
    </div>
  )
}
