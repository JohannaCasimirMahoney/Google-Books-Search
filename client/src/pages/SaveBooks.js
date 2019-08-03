import React, { Component} from "react";
import API from "../utilities/API";
import Jumbotron from "../components/Jumbotron";
import { Container} from "../components/Grid";
import SaveResult from "../components/SaveResult"

class SaveBook extends Component {
    state = {
        savedBooks: []
    };
    // GRABS ALL BOOKS FROM SAVE DB
    componentDidMount() {
        API.getBooks()
        .then(res => this.setState({ savedBooks: res.data }))
        .catch(err => console.log(err))
    }
    // THIS REMOVES THE BOOK BY ID
    render() {
        return (
            <Container fluid className="container">
                <Jumbotron />
                <Container>
                    <SaveResult savedBooks={this.state.savedBooks} handleDeletButton={this.handleDeletButton} />
                </Container>
            </Container>
        )
    }
}

export default SaveBook