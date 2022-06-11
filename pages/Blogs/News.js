import React from 'react'
import axios from "axios"
function News() {
const [value, setValue] = React.useState([])
    axios.get("https://newsapi.org/v2/publishedAt&apiKey=f6265371ec2a4ffb97ec9bbe77228aed").then(res=>{
        const data = res.data
        console.log(value)
        setValue(res.data)
    })
  return (
    <div>

      {
        value.map(cur=>(
            <h1>{}</h1>
        ))
      }
    </div>
  )
}

export default News