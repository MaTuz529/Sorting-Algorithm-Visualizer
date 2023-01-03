import React from "react";
// Styles
import "./Visualizer.css";
// Sorting Algorithms
import { getInsertionSortAnimations } from "../Algorithms/InsertionSort";
import { getQuickSortAnimations } from "../Algorithms/QuickSort";

// Make responsive on all screens
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

let anSpeed = 1; // animation speed
if (screenWidth < 700) {
  anSpeed = 3;
}

export default class Sorting extends React.Component {
  constructor(props) {
    super(props);

    // Util variables
    this.animationSpeed = anSpeed;
    this.numberOfBars = 310;
    this.primaryColor = "cyan";
    this.secondaryColor = "red";
    this.setNameForSortingAlgorithm()
    this.barHeight = screenHeight - 100;

    // State
    this.state = {
      array: [],
    };
  }


  setNameForSortingAlgorithm() {
    const mergeSortNumber = this.props.props.mergeSortNumber
    switch(mergeSortNumber) {
      case 0:
        this.nameOfAlgorithm = "Insertion Sort"
        break
      case 1:
        this.nameOfAlgorithm = "Quick Sort"
        break
      default:
        this.nameOfAlgorithm = "Algorithm"
    }
  }



  performSort() {
    const mergeSortNumber = this.props.props.mergeSortNumber
    switch(mergeSortNumber) {
      case 0:
        this.insertionSort()
        break
      case 1:
        this.quickSort()
        break
      default:
        this.quickSort()
    }
  }


  componentDidMount() {
    // On reload or visit page
    this.resetArray();
  }

  resetArray() {
    // Resets an array with random numbers
    const array = [];
    for (let i = 0; i < this.numberOfBars; i++) {
      array.push(getRandomNumber(5, this.barHeight));
    }
    this.setState({ array });
  }

  quickSort() {
    // Handles displaying quick sort animations
    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === "comparison1" ||
        animations[i][0] === "comparison2";
      const arrayBars = document.getElementsByClassName("array-bar");
      if (isColorChange === true) {
        const color =
          animations[i][0] === "comparison1"
            ? this.secondaryColor
            : this.primaryColor;
        const [, barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.animationSpeed);
      } else {
        const [, barIndex, newHeight] = animations[i];
        if (barIndex === -1) {
          continue;
        }
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * this.animationSpeed);
      }
    }
  }

  insertionSort() {
    // Handles displaying insertion sort animations
    const animations = getInsertionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === "comparison1" ||
        animations[i][0] === "comparison2";
      const arrayBars = document.getElementsByClassName("array-bar");
      if (isColorChange === true) {
        const color =
          animations[i][0] === "comparison1"
            ? this.secondaryColor
            : this.primaryColor;
        const [, barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.animationSpeed);
      } else {
        const [, barIndex, newHeight] = animations[i];
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * this.animationSpeed);
      }
    }
  }

  render() {
    const { array } = this.state;
    return (
      <div className="array-container">
        {array.map((value, index) => (
          <div
            className="array-bar"
            key={index}
            style={{ height: `${value}px` }}
          ></div>
        ))}
        {/* BUTTONS Note: all css classes except for button-sort come from tachyons */}
        <button
          className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-light-red button-sort"
          onClick={() => this.resetArray()}
        >
          Generate New Array
        </button>
        <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-light-red button-sort"onClick={() => this.performSort()}>{this.nameOfAlgorithm}</button>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </div>
    );
  }
}

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}