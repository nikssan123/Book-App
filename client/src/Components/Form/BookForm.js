import React from "react";
import "./BookForm.css";
import Select from "react-select";


const genres = [
    {
        label: "Fiction:",
        options: [
            { value: "Children's Books", label: "Children's Books" },
            { value: 'Crime Thriller', label: 'Crime Thriller' },
            { value: 'Literary Fiction', label: 'Literary Fiction' },
            { value: 'Sci-Fi', label: 'Sci-Fi' },
            { value: 'Young Adult', label: 'Young Adult' },
        ]
    },
    {
        label: "Non-Fiction:",
        options: [
            { value: 'Food ', label: 'Food ' },
            { value: 'History', label: 'History' },
            { value: 'Memoir', label: 'Memoir' },
            { value: 'Politics', label: 'Politics' },
            { value: 'Self-Help', label: 'Self-Help' },
        ]
    },
    {
        label: "Other", value: "Other"
    }
    
]

const languages = [
    { value: 'English', label: 'English' },
    { value: 'Bulgarian', label: 'Bulgarian' },
]


const styles = {
    control: (base, state) => ({
        ...base,
        background: "#f9a03f",
        border: state.isFocused ?  "none" : "none",
        outline: state.isFocused ?  "none" : "none",
        boxShadow: state.isFocused ?  "none" : "none"
    }),
    valueContainer: (base, state) => ({
        ...base, 
        background: "#f9a03f",
        color: "black",
        padding: 0
    }),
    singleValue: (base, state) => ({
        ...base,
        color: "black"
    }),
    dropdownIndicator: (base, state) => ({
        ...base,
        background: "#f9a03f",
    }),
    placeholder: (base, state) => (
        {
        ...base,
        color: "#000",
    }),
    menu: (base, state) => {
        return {
            ...base,
            background: "#f9a03f",
        }
    },
    option:  (base, state) => {
        return {
            ...base,
            backgroundColor: state.isFocused || state.isSelected || state.isActive ? "#f8dda4" : "#f9a03f",
            color: state.isFocused ? "black" : "black",
        }
    },
    indicatorSeparator: (base, state) => ({
        background: "#f9a03f",
    }),
    noOptionsMessage: (base, state) => ({
        color: "black"
    }),
    groupHeading: (base, state) => ({
        color: "black",
        fontWeight: "bold",
        // textAlign: "left",
        // marginLeft: "40px",
        paddingBottom: "10px",
        borderBottom: "1px solid black"
    }),

}

export default class BookForm extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            title: "",
            author: "",
            description: "",
            genre: "",
            language: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGenre = this.handleGenre.bind(this);
        this.handleLanguage = this.handleLanguage.bind(this);
    }

   
    //render the styled form
    handleSubmit(e){
        e.preventDefault();
        this.props.addBook(this.state);        

        e.target.reset();
    }

    handleChange(e){
        this.setState({[e.target.name] : e.target.value});
    }

    handleGenre(e){
        this.setState({genre: e.value});
    }

    handleLanguage(e){
        this.setState({language: e.value});
    }

    render(){
        return (
            <div className="outer-container">
                <div className="header">
                    <h1>Bookle</h1>
                    <p>Find your favorite books here!</p>
                </div>
        

                <form className="form-container" onSubmit={this.handleSubmit}>
                    
                    <div className="row">
                        <input className="form-input col-50" name="title" type="text" onChange={this.handleChange} placeholder="Title"/>
                        <input className="form-input col-50" name="author" type="text" onChange={this.handleChange} placeholder="Author"/>
                        <div className="select">
                            <Select 
                                // defaultValue={options[0]}
                                placeholder="Select genre..."
                                styles={styles}
                                components={{ DropdownIndicator:() => null }}
                                className="theme" 
                                value={genres.find(obj => obj.value === this.state.genre)} 
                                options={genres.sort()} 
                                onChange={this.handleGenre}/>
                        </div>
                        <div className="select">
                            <Select 
                                // defaultValue={options[0]}
                                placeholder="Select language..."
                                styles={styles}
                                components={{ DropdownIndicator:() => null }}
                                className="theme" 
                                value={languages.find(obj => obj.value === this.state.language)} 
                                options={languages} 
                                onChange={this.handleLanguage}/>
                        </div>
                        
                    </div>
                    <textarea className="form-input" rows="8" name="description" type="text" onChange={this.handleChange} placeholder="Short description..."/>
                    
                    <button className="btn" type="submit">Add Book</button>
                </form>
             </div>
            
        );
        
    }
}