//1
 const canExecuteFastAttack=(knightIsAwake) =>{
  if(khightIsAwake===true && khightIsAwake===false) {
  return "true" 
    }
  else {
    return false
  }
}
console.log("1", true && false)

  //2
const canSpy=(knightIsAwake, archerIsAwake, prisonerIsAwake) =>{
  if(khightIsAwake===false ||  archerIsAwake===true || prisonerIsAwake===false) {
  return "true" 
    }
  else {
    return false
  }
}
console.log("2", true || false)

//3
const canSignalPrisoner=(archerIsAwake, prisonerIsAwake) =>{
  if(archerIsAwake===false || prisonerIsAwake===true) {
  return "true" 
    }
  else {
    return false
  }
}
console.log("3", true || false)

//4
const canFreePrisoner=(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) =>{
  if( knightIsAwake===false && archerIsAwake===true && prisonerIsAwake===false && petDogIsPresent===false) {
  return "true" 
    }
  else {
    return false
  }
}
console.log("3", true && false)
