import { NavBar } from "../navbar/NavBar";
import SortingVisualizer from '../SortingVisualizer/SortingVisualizer';
const MergeSort = () => {
  return(
    <div className="App">
        <header>
        <h1 class="coolshadowheading">Sorting Algorithms</h1>
        <NavBar />
        </header>
        <h1 class="centerTitle" class="coolshadow">MergeSort</h1>
        <img class="sizemerge" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/mergesort/merge_sort-what-img1.png"></img>
        <p class="uleft">Merge sort is a method that divided a list into halves and continual dividing these halves down futher into</p>
        <p class="uleft">smaller parts. A comparison of smaller halves is conducted and results are combined together to form the</p>
        <p class="tinyuleft">final sorted list. On the right you can see an example image of MergeSort. Below is the MergeSort Visualizer. </p>
        <p class="tinyuleft">The image divides up the problem into a lot of smaller pieces of the same problem.</p>
        <p class="tinyuleft">Conquers the subproblems by recursively solving them.</p>
        <p class="tinyuleft">Solves the subproblems as base cases if they're small enough.</p>
        <p class="tinyuleft">Finds the solutions to the original problem by combinding the solutions of the subproblems.</p>  
        <SortingVisualizer props={{mergeSortNumber: 0}}></SortingVisualizer>
        <footer>
        <h2 class="coolshadow">Made by: Matthew Tuzinowski</h2>
        </footer>
    </div>
  );
}


export default MergeSort;