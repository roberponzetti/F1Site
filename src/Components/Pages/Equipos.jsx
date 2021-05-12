import React, {Component} from 'react'
import TeamGrid from '../Organisms/TeamGrid'
import axios from 'axios'

class Teams extends Component {

  constructor(props){
    super(props)

    this.state = {
      teams:[]
    }
  }

  componentDidMount(){
    axios.get('http://my-json-server.typicode.com/roberponzetti/json-db/cursos')
    .then(response =>
        this.setState({
            teams: response.data
        })
    )
  }

  render(){
    const {teams} = this.state

    return <TeamGrid teams={teams} />
  } 
}

export default Teams;