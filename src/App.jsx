import { useState,useEffect} from 'react'
import './App.css'
import Aceptados from './components/Aceptados'
import Candidatos from './components/Candidatos'
import Rechazados from './components/Rechazados'
import axios from 'axios'
import { Box, Card } from '@mui/material'

//'https://dog.ceo/api/breed/hound/images/random'


function App() {

  const [data, setData] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dog.ceo/api/breed/hound/images/random')
        const {message}= response.data
        setData(message)
      console.log(message)

      } catch (error) {
        console.log(error)
      }

    }



    fetchData()
  },[])

  return (
    <>
      {/* <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
        <CardMedia
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
        />
        </CardActionArea>
        <img src = {data}/>
      </Card> */}

     
      <Candidatos/>

    
     <div style={{ display: "flex", justifyContent: "center" }}>
      <Card>
    
          <img src={data}/>

        </Card>
      </div>

    <Aceptados/>
    <Rechazados/>
    

    </>
  )
}

export default App
