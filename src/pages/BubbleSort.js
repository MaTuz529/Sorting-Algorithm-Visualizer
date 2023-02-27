import { NavBar } from "../navbar/NavBar";
import SortingVisualizer from '../SortingVisualizer/SortingVisualizer';
const BubbleSort = () => {
  return(
    <div className="App">
        <header>
        <h1 class="coolshadowheading">Sorting Algorithms</h1>
        <NavBar />
        </header>
        <h1 class="centerTitle" class="coolshadow">BubbleSort</h1>
        <img class="sizebubble" src="https://www.productplan.com/uploads/bubble-sort-1024x683-2.png"></img>
        <p class="tinuleft">Bubble sort is a basic algorithm for arranging a array of numbers or other elements in the correct</p>
        <p class="tinuleft">order. The method works by examining each set of adjacent elements in the array, from left to right,</p>
        <p class="tinuleft">switching their positions if they are out of order.</p>
        <p>&nbsp;</p>
        <p class="tinuleft">On the left shows an image that demostrates how Bubble Sort sorts an array.</p>
        <p>&nbsp;</p>
        <p class="tinuleft">Below is the Bubble Sort Visualizer.</p>
        <SortingVisualizer props={{mergeSortNumber: 3}}></SortingVisualizer>
        <footer>
        <h2 class="coolshadow">Sorting Algorithms</h2>
        </footer>
    </div>
  );
}



export default BubbleSort;
