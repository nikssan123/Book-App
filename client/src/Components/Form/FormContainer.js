import React from "react";
import BookForm from "./BookForm";
import $ from "jquery";
import "./FormContainer.css"

const APIURL = "/api/books";

export default class FormContainer extends React.Component{
    
    constructor(props){
        super(props);

        this.addBook = this.addBook.bind(this);

        this.state = {
            success: false,
            successMessage: ""
        }
    }

    addBook({title, author, genre, description, language}){
        $.post(APIURL, {
            title,
            author,
            genre,
            description,
            language
        }).then(newBook => {
            this.setState({
                success: true, 
                successMessage: newBook.errors ? "Something went wrong! Make sure you specified every field!" : "You successfully added a book! Thank you!"
            }, 
            () => {
                setTimeout(() => {
                    this.setState({success: false, successMessage: ""});
                }, 5000)
            });
            
        }).catch(err => {
            
        });
    }
    //handle api calls
    render(){
        return (
            <div className="container">
                
                <BookForm addBook={this.addBook}/>
                <div className="errorMessage" style={
                    {
                        display: this.state.success ? "block" : "none",
                    } 
                }>
                    {this.state.successMessage ? this.state.successMessage : ""}
                </div>

            </div>
            
        );
    }
}