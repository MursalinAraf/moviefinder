import React, { Component } from 'react'
import './Mainpage.css'
import Movierow from './Movierow'
import $ from 'jquery'
// const logo = require('../image1.jpg')
// // const logo = this.state.image.prefix + this.state.image.suffix;
const Movie_Data_URL = "https://api.themoviedb.org/3/search/movie?api_key=a010b9cd32d11e682c0c59e61a64909b&query=";


export default class Mainpage extends Component {

 constructor(props) {
     super(props)
     this.state = {rows : []} 

    //  let movies = [
    //      {id : 0 , poster_src : "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UY1200_CR90,0,630,1200_AL_.jpg", title : "Avengers  Infity War", overview : "this is the best movie of all" },
    //      {id : 1 , poster_src : "https://cdn.pinkvilla.com/files/styles/contentpreview/public/Avengers%20Endgame%20Leaked%20images%20show%20that%20Iron%20Man%20will%20be%20seen%20in%20SEVERAL%20suits%20%282%29.jpg?itok=VfV8OJUa" ,title : "Iron Man", overview : "this is the 1st movie of Marvel Series" }
    //  ]
 
    //  const movieRows = [];


    //  movies.forEach(movie => {
    //     const movieRow = <Movierow movie={movie}/> 

    //      movieRows.push(movieRow)
    //  })

    //  this.state = {rows : movieRows}
    this.performSearch('all');
        
 }

performSearch(searchTerm){
        $.ajax({
            url : Movie_Data_URL + searchTerm,
            success : (searchResult) => {
                console.log('fetched Data')
                const result = searchResult.results
                console.log(searchResult)
                let myRows = [];
                result.forEach(element => {
                    element.poster_src = "https://image.tmdb.org/t/p/w185/"+ element.poster_path
                    const movieRow = <Movierow movie={element}/>
                    myRows.push(movieRow)
                });

                this.setState(() => ({
                    rows : myRows
                }))
            },
            error : (xhr,status,err) => {
                console.log("failed shit")
            }

        })
}

searchHandler(event){
    const val = event.target.value;
    const boundObject = this;
    boundObject.performSearch(val)
}



    render() {
       return (
            <div className="list">
                <input className="input-field" placeholder="Enter Movie Name Here" onChange={this.searchHandler.bind(this)} placeholder="Enter Movie Name Here"></input>
                <div>
                {this.state.rows}
                </div>
                <footer>
                    <h3>Developed By : Mursalin Araf</h3>
                </footer>
            </div>
        )
    }
}

