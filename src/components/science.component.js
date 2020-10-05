import React,{Component} from 'react'
import axios from "axios"
import { Card} from 'react-bootstrap'

export default class Science extends Component{
    constructor(props){
        super(props)
        this.state ={
            science:[]
        }
    }
    componentDidMount(){
     axios.get("https://cors-anywhere.herokuapp.com/http://newsfeedbuzz.herokuapp.com/science")
     .then(response => {
         console.log(response.data)
         this.setState({science: response.data})
     })
     .catch((error)=>{
         console.log(error)
     })
    }
    render(){
        let articleList = this.state.science.map((article,index) => {
            return (
                <Card className="card" key={index}>
                  <Card.Body className="cardBody">
                  <div className="d-flex justify-content-between">
                  <img className="d-none d-md-block" width="50%" alt="" src={article.image}/>
                    <div>
                      <Card.Title className="title">
                        {article.title} 
              {/* <span className="text-muted font-weight-light"> By {article.author}</span> */}
                        </Card.Title>
                        <Card.Subtitle className="text-muted mb-2">
                        {/* {new Date(article.publishedAt).toLocaleString()} */}
                        </Card.Subtitle>
                        <div className="description" style={{wordBreak:'break-all',textOverflow: "ellipsis"}}>
                          {article.newcontent }
                        </div>
                      </div>
                    
                  </div>
                    </Card.Body>
                  </Card>
              )
        })
        return(
        <div className="container">{articleList}</div>
        )
    }
}