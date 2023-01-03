import { NavBar } from "../navbar/NavBar";
import SortingVisualizer from '../SortingVisualizer/SortingVisualizer';
const SelectionSort = () => {
  return(
    <div className="App">
      <header>
      <h1 class="coolshadowheading">Sorting Algorithms</h1>
      <NavBar />
      </header>
      <h1 class="centerTitle" class="coolshadow">SelectionSort</h1>
      <img class="decreasesize" src="data:image/png;base64,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"></img>
      <p class="miduleft">Selection Sort Algorithm sorts an array by selecting the smallest element in the array and moving it to</p>
      <p class="miduleft">the beginning of the array through the use of swapping the front element.</p>
      <p>&nbsp;</p>
      <p class="miduleft">On the right is a image that demostrates Selection Sort sorting a array.</p>
      <p>&nbsp;</p>
      <p class="miduleft">Below is a Selection Sort Visualizer.</p>
      <SortingVisualizer props={{mergeSortNumber: 5}}></SortingVisualizer>
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
            <p class="increasefont">https://github.com/clementmihailescu/Sorting-Visualizer</p>
        <footer>
        <h2 class="coolshadow">Made by: Matthew Tuzinowski</h2>
        </footer>
    </div> 
   );
 }


export default SelectionSort;
