import React,{useState ,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
function Seimg() {
    const [img, setImg] = useState([])
    const [imgload, setImgload] = useState(false)

    const { id } = useParams()
    console.log(id)
    const [sedata, setSedata] = useState([])
    useEffect(() => {
      axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json')
      .then(res=>{
          
            
            setSedata(res.data)
      })
      axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json')
        .then(res=>{
            setImg(res.data)
        })
        .catch(e=>{
            console.log(e)
        })
    }, [])
    var seda=[]
    const seimg = img[Math.floor(Math.random() * img.length)];

    if(sedata){
        seda=sedata[id]


    }else{
        seda=[]
    }
    
  return (
    <div>
        <Navbar />
        <div className='container  p-5'>
        <div className="card bs m-3" >
            {img && seimg?
            <img style={{maxWidth:250+'px',borderRadius:50+'%',maxHeight:250+'px',marginLeft:'auto',marginRight:'auto'}} className="card-img-top" src={seimg.Image} alt="Card mx-auto  bs d-block image cap" />
            :<span class="material-icons App-logo ">
            refresh
            </span>}
            {seda?
            <div className="card-body">
            <h5 className="card-title">{seda.Brand}</h5>
            <span className='mb-2'  style={{fontWeight:600}} >Country :  </span><span>{seda.Country}</span><br />
            <span className='mb-2'  style={{fontWeight:600}} >Stars :  </span><span>{seda.Stars}</span><br />
            <span  className='mb-2' style={{fontWeight:600}} >Style :  </span><span>{seda.Style}</span><br />
            <span className='mb-2'  style={{fontWeight:600}} >Variety :  </span><span>{seda.Variety}</span><br />
        </div>
        :null}
            
        </div>

        </div>
    </div>
  )
}

export default Seimg