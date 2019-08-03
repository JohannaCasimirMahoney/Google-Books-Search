import React, { Component } from "react";
import API from "../utilities/API";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult";


class SearchBooks extends Component {
    state = {
        search: "",
        books: [],
        error: "",
        message: ""
    };
// FUNCTION TAKES VALUE OF WHAT TO ENTER IN THE SEARCH BOX
handleInputChange = event => {
    this.setState({ search: event.target.value })
}
// FUNCTION CONTROLS THE SUBMIT BUTTON/SEARCH FORM
handleFormSumit = event => {
    event.preventDefault();
    API.getGoogleSearchBooks(this.state.search)
    .then(res => {
        if (res.data.items ==="error") {
            throw new Error(res.data.items);
        }
        else {
        let results = res.data.items
        results = results.map(result => {
        
            result= {
                key: result.id,
                id: result.id,
                title: result.volumeInfo.title,
                author: result.volumeInfo.authors,
                description: result.volumeInfo.imageLinks.thumbnail,
                image: result.volumeInfo.infoLink
            }
            return result;
        })
        // reset the sate of the empty books array to the new arrays of objects with properties geting back from the response
        this.setState({ books: results, error: " "})

    }

    })
    .catch(err => this.setState({ error: err.items }));
}

handleSavedButton = event => {
    // CONSOLE.LOG EVENT
    event.preventDefault();
    console.log(this.state.books)
    let savedBooks = this.state.books.filter(book => book.id === event.target.id)
    savedBooks = savedBooks[0];
    API.saveBook(savedBooks)
    .then(this.setState({ message: alert("Your book is saved") }))
    .catch(err => console.log(err))
}
render() {
    return (
         <Container fluid>
             <Jumbotron>
                 <h1 className="text-white">Find Your Favorite Books with GoogleBook API</h1>
             </Jumbotron>
             <Container>
                 <Row>
                     <Col size="12">
                         <SearchForm
                         handleFormSumit={this.handleFormSumit}
                         handleInputChange={this.handleInputChange}
                         />
                     </Col>
                 </Row>
             </Container>
             <br></br>
             <Container>
                 <SearchResult book={this.state.books} handleSavedButton={this.handleSavedButton} />
             </Container>
         </Container>

    )
}

}

export default SearchBooks
