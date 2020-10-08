import React,{Component} from 'react'
import axios from "axios"
import ReactMarkdown from 'react-markdown';
import { Card} from 'react-bootstrap'

export default class Education extends Component{
    constructor(props){
        super(props)
        this.state ={
            education:[]
        }
    }
    componentDidMount(){
     axios.get("https://cors-anywhere.herokuapp.com/http://newsfeedbuzz.herokuapp.com/education")
     .then(response => {
         console.log(response.data)
         this.setState({education: response.data})
     })
     .catch((error)=>{
         console.log(error)
     })
    }
    render(){
        let articleList = this.state.education.map((article,index) => {
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
                        <ReactMarkdown source={article.newcontent} />
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