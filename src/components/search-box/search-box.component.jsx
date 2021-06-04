import React from 'react';

import './search-box.styles.css'

export const SearchBox = ({ placeholder, handleChange })=>{
    return (
        <div className="search">
            <input 
            type = "search" 
            placeholder = {placeholder}
            onChange = {handleChange}
            // {e => {this.setState({searchField : e.target.value},() => console.log(this.state))   
            />
        </div>
    )
}