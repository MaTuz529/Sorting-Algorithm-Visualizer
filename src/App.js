
import Content from './Content';

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SelectionSort from './pages/SelectionSort'
import InsertionSort from './pages/InsertionSort'
import QuickSort from './pages/QuickSort'
import MergeSort from './pages/MergeSort'
import HeapSort from './pages/HeapSort'
import BubbleSort from './pages/BubbleSort'
function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="selectionsort" element={<SelectionSort />} />
        <Route path="insertionsort" element={<InsertionSort />} />
        <Route path="quicksort" element={<QuickSort />} />
        <Route path="mergesort" element={<MergeSort />} />
        <Route path="heapsort" element={<HeapSort />} />
        <Route path="bubblesort" element={<BubbleSort />} />
      </Routes>
    </Router>
  );
}

export default App;
