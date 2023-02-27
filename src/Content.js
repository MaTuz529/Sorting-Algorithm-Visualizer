import React from 'react'
import { NavBar } from './navbar/NavBar'
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';

const Content = () => {
    return(
        <div>
            <header>
            <h1 class="coolshadowheading">Sorting Algorithms</h1>
            <ul class="alignbirch">
            <NavBar/>
            </ul>
            </header>
            <h1 class="centerTitle" class="coolshadow">What are Sorting Algorithms?</h1>
            <p class="increasefont">Sorting Algortihms are methods for reorganizing a data structure into a specific order.
            There are hundreds of different Sorting Algorithms and they are classfied into two metrics: space and time complexity.</p>
            <h1 class="centerTitle" class="coolshadow">Tutorial</h1>
            <p class="increasefont">The purpose of this website is to show you and teach you about Sorting Algorithms. The buttons on the top are used to navigate to see each Sorting Algorithm Visualizers.</p>
            <p class="increasefont">Use the Generate New Array button below to get different values for the Sorting Algorithm Visualizer. Use the Algorithm button to run the Sorting Algorithm Visualizer. </p>
            <SortingVisualizer props={{mergeSortNumber: -1}}></SortingVisualizer>
            <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p> 
            <h1 class="centerTitle" class="coolshadow">Information and Sources</h1>
            <p class="increasefont">https://dev.to/ridhikgovind/how-to-style-your-react-router-links-using-styled-components-2350</p>
            <p class="increasefont">https://stackoverflow.com/questions/14096292/how-to-have-two-headings-on-the-same-line-in-html </p>
            <p class="increasefont">https://github.com/clementmihailescu/Sorting-Visualizer</p>
            <p class="increasefont">https://reactjs.org/docs/fragments.html</p>
            <p class="increasefont">https://www.youtube.com/watch?v=RVFAyFWO4go&t=246s</p>
            <p class="increasefont">https://github.com/clementmihailescu/Sorting-Visualizer-Tutorial</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <footer>
            <h2 class="centerTitle" class="coolshadow">Sorting Algorithms</h2>
            </footer>
        </div>
    )
}

export default Content


