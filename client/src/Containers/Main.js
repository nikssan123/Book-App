import React from "react";
import {connect} from "react-redux";

import { Route, Redirect} from "react-router-dom";
import BookForm from "../Components/BookForm";
import Footer from "../Components/Footer";
import { postBook } from "../Store/Actions/books";
import { removeError } from "../Store/Actions/errors";

const Main = props => {
    const { postBook, errors, removeError } = props;
    
    return (
        <div style={{textAlign: "center"}}>
            {/* <Route to="/new" component={FormContainer} /> */}
            <div className="container">
                <Route to="/new" render={props => (<BookForm errors={errors} addBook={postBook} removeError={removeError} {...props}/>)}/>
                <Route to="/" render={() => <Redirect to="/new"/>} />
                
            </div>
            <Footer/>
        </div>
    );
        
    
}

function mapStateToProps(state){
    return {
        errors: state.errors
    }
}

export default connect(mapStateToProps, {postBook, removeError})(Main);