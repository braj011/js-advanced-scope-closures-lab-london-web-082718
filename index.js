function produceDrivingRange(blockRange) {
  return function(bottomBlock, topBlock) {
    let distance  = parseInt(topBlock.slice(0,-2) - bottomBlock.slice(0,-2))
    // since blocks are entered as 'XXth' - must delete the 'th'
    // can slice on a string to get rid of this + change to a number
    if (blockRange > distance) {
      return `within range by ${blockRange - distance}`
    } else {
      return `${distance - blockRange} blocks out of range`
    }
  }
}
// when interpolating - need to use backticks
// closure - needs to return another function 

function produceTipCalculator(tipDecimal) {
  return function(fare) {
    return fare * tipDecimal 
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name 
    }
  }
}