import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
    margin: '0em',
    fontSize: "2px"
  };
  

export const NavBar = () => {
    return (
        <ul>
        <li>
            <Link to="/" style={linkStyle}><button class="button">Home</button></Link> <Link to="/bubblesort" style={linkStyle}><button class="button">BubbleSort</button></Link> <Link to="/mergesort" style={linkStyle}><button class="button">MergeSort</button></Link> <Link to="/insertionsort" style={linkStyle}><button class="button2">InsertionSort</button></Link> <Link to="/quicksort" style={linkStyle}><button class="button2">QuickSort</button></Link>
        </li>
    </ul>
    )
}