import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  Axios  from 'axios';


export default function MovieDetails() {
  let {id , mediaType} = useParams();

  const [details, setDetails] = useState({})

async function getTrending(id , mediaType){
let {data} = await Axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=d0d759ec583df4395819aa8c1ad4ca13&language=en-US`)
setDetails(data)
}

useEffect(()=>{
getTrending(id , mediaType)

},[])

  return <>
  
  <div className="row">
    <div className="col-md-3">
    {details.poster_path?  <img src={'https://image.tmdb.org/t/p/w500'+details.poster_path} className='w-100' alt="" />:  <img src={'https://image.tmdb.org/t/p/w500'+details.profile_path} className='w-100' alt="" />}

    </div>
    <div className="col-md-6 d-flex align-items-center">
   <div className=''>
   <h2 >{details.title} {details.name}</h2>
<p className='text-muted my-3'>{details.overview} {details.biography}</p>
{details.vote_average?<h4> vote average: {details.vote_average}</h4>:""}
{details.vote_count?<h4> vote count: {details.vote_count}</h4>:""}

   </div>
    </div>
  </div>
  </>
}
