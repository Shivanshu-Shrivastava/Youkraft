import React ,{useState ,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Card(props) {
    const [img, setImg] = useState([])
    const [imgload, setImgload] = useState(false)

    useEffect(() => {
        axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json')
        .then(res=>{
            setImg(res.data)
        })
        .catch(e=>{
            console.log(e)
        })
    }, [])
    const seimg = img[Math.floor(Math.random() * img.length)];

    return (
        <Link to={`seimg/${props.id}`}>
        <div className="card bs m-3" style={{width:18+'rem'}}>
            {img && seimg?
            <img style={{maxWidth:250+'px',maxHeight:250+'px'}} className="card-img-top" src={seimg.Image} alt="Card mx-auto image cap" />
            :<span class="material-icons App-logo ">
            refresh
            </span>}
            <div className="card-body">
                <h5 className="card-title">{props.num.Brand}</h5>
                <span className='mb-2'  style={{fontWeight:600}} >Country :  </span><span>{props.num.Country}</span><br />
                <span className='mb-2'  style={{fontWeight:600}} >Stars :  </span><span>{props.num.Stars}</span><br />
                <span  className='mb-2' style={{fontWeight:600}} >Style :  </span><span>{props.num.Style}</span><br />
                <span className='mb-2'  style={{fontWeight:600}} >Variety :  </span><span>{props.num.Variety}</span><br />
            </div>
        </div>
        </Link>
    )
}

export default Card