import { NavBar } from "../navbar/NavBar";
import SortingVisualizer from "../SortingVisualizer/SortingVisualizer";
import Sorting from "../Visualizer/Visualizer";
const QuickSort = () => {
  return(
    <div className="App">
        <header>
        <h1 class="coolshadowheading">Sorting Algorithms</h1>
        <NavBar />
        </header>
        <h1 class="centerTitle" class="coolshadow">QuickSort</h1>
        <img class="decreasesize2" src="https://afteracademy.com/images/quick-sort-example-recursion-tree-c74167d4ee973e77.png"></img>
        <p class="tileft">Quicksort is a highly efficient sorting technique that divides a large data array into smaller ones.</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p class="tileft">On the right is an example of Quick Sort sorting an array.</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p class="tileft">Below is the QuickSort Visualizer.</p>
        <Sorting props={{mergeSortNumber: 1}}></Sorting>
        <footer>
        <h2 class="coolshadow">Sorting Algorithms</h2>
        </footer>
    </div>
  );
}


export default QuickSort;
