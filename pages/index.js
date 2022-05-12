import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';
export default function Home() {

  const router = useRouter()
  let [data,setData] = useState([])
    useEffect(() =>{
      fetch('api/',{
        method : 'GET',
        headers : {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
      })
      .then(res => res.json())
      .then(data => setData(data.data))
    },[])
  console.log(data.length)


const approve = async(val) => {
  fetch('api/nft/',{
    method : 'PUT',
    headers : {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(val)
  })
  router.push("/")
}

const discard = async (val) =>{
  console.log(val._id)
  fetch(`api/${val._id}`,{
    method : 'DELETE',
  }).then("deleted successfully")
}
  if(data.length === 0){
    return(
      <>
      <p>Loading</p>
      </>
    )
  }
  else{
    return (
      <>
        <br/>
        <h1>Admin page</h1>
  <div className="container">
		<div className="row text-center">
      {
        data.map((curr) =>{
          let props = curr;
          return(
	      	  <div className="card" style={{width: "22rem"}} key = {`${curr.address}`}> 
		          {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
		          <div className="card-body">
		          <h5 className="card-title">{curr.address}</h5>
              <p className="card-title">{curr.name}</p>
              <p className="card-title">{curr.symbol}</p>
		          <p className="card-text"></p>
              <button className='btn btn-danger' onClick={() =>discard(curr)}>discard</button>
            
              <button className='btn btn-primary' onClick={() =>approve(curr)}>approve</button>
		      </div>
	      </div>
          )
        })
      }
		</div>
    </div>

      </>
    )
  }
  
}
