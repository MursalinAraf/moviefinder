import React, { Component } from 'react'
import './Movierow.css'
export default class Movierow extends Component {

    onView = () => {
        const url = "https://www.themoviedb.org/movie/"+this.props.movie.id
        window.location.href = url
    }

    render() {
        return (
            // <table key={this.props.movie.id}>
            // <tbody>
            //     <tr>
            //         <td>
            //         <img alt="poster" src={this.props.movie.poster_src} height="120px" width="120px"/>
            //         </td>
            //         <td>
            //         <div>
            //         <div className="movieTitle">
            //             {this.props.movie.title}
                        
            //         </div>    
            //         <div className="movieOverview"> 
            //           Popularity :  {this.props.movie.popularity}
            //         </div>
            //         <button onClick={this.onView.bind(this)}>View</button>
            //         <button style={{backgroundColor : "green",color : "white"}}>Play</button>
            //         </div>     
            //         </td>
            //                 </tr>
            //                     </tbody>
            //                             </table>
            <div key={this.props.movie.id} className="view">
            <img alt="poster" style={{textAlign:"center"}} src={this.props.movie.poster_src} height="200px" width="200px"/>
            <div className="movieTitle">
                    {this.props.movie.title}
            </div>    
            <div className="movieOverview"> 
                    Popularity :  {this.props.movie.popularity}
            </div>
            <div className="movieOverview"> 
            Release Date :  {this.props.movie.release_date}
            </div>
            <button className="btn" onClick={this.onView.bind(this)}>View</button>
            </div>
            
        )
    }
}
