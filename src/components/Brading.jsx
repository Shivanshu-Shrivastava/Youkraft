import React ,{useState ,useEffect} from 'react'
import axios from 'axios'
import Card from './Card'
function Brading() {
    const [data, setData] = useState([])
    const [dataload, setDataload] = useState(false)
    useEffect(() => {
      axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json')
      .then(res=>{
          setData(res.data)
          setDataload(true)
      })
      .catch(e=>(
          console.log(e)
      ))
      

    

    }, [])
    console.log(data)

    
  return (
      <div className='d-flex flex-wrap justify-content-between'>
         {data?data.map((num,ind)=>(
         <Card key={ind} id={ind} num={num}/>)):null}
      </div>
  )
}

export default Brading