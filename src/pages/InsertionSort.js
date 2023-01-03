import { NavBar } from "../navbar/NavBar";
import SortingVisualizer from '../SortingVisualizer/SortingVisualizer';
import Sorting from "../Visualizer/Visualizer";
const InsertionSort = () => {
  return(
    <div className="App">
        <header>
        <h1 class="coolshadowheading">Sorting Algorithms</h1>
        <NavBar />
        </header>
        <h1 class="centerTitle" class="coolshadow">InsertionSort</h1>
        <img class="decreasesize3" src="https://miro.medium.com/max/282/1*k3CdGcgncPVj5qjiqskvTg.png"></img>
        <p class="tleft">Insertion sort works by spliting an array  into a sorted and an unsorted part. Values from the unsorted part are</p>
        <p class="tleft">picked and placed at the correct position in the sorted part.</p>
        <p>&nbsp;</p>
        <p class="tleft">On the right is an example of InsertionSort sorting an array.</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p class="tleft">Below is the InsertionSort Visualizer.</p>
        <Sorting props={{mergeSortNumber: 0}}></Sorting>
        <footer>
        <h2 class="coolshadow">Made by: Matthew Tuzinowski</h2>
        </footer>
    </div>
  );
}


export default InsertionSort;