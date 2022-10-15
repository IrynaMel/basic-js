const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(mat) {
  let count = 0;
  let result=[]
  for( let i=0; i<mat.length; i++){
    result.push([])
    for(let j=0; j< mat[i].length; j++){
      
      if(mat[i][j]===true){
        count = 1
      }else{
        if(i===0){ if(mat[i+1][j] && mat[i+1][j]=== true){
          count++
        }
        if(mat[i][j-1] && mat[i][j-1]=== true){
          count++
        }
        if(mat[i][j+1] && mat[i][j+1]=== true){
          count++
        }}
        if(i>0 && i<mat.length-1){
        if(mat[i-1][j] && mat[i-1][j]=== true){
          
          count++
        }
        if(mat[i+1][j] && mat[i+1][j]=== true){
          count++
        }
        if(mat[i][j-1] && mat[i][j-1]=== true){
          count++
        }
        if(mat[i][j+1] && mat[i][j+1]=== true){
          count++
        }
       
      }else
      if(i === mat.length-1){
        
        if(mat[i-1][j] && mat[i-1][j]=== true){
          count++
        }
        
        if(mat[i][j-1] && mat[i][j-1]=== true){
          count++
        }
        if(mat[i][j+1] && mat[i][j+1]=== true){
          count++
        }
      }
      }
      if(count === 0) {count = 1}
      result[i].push(count)
     
      count = 0
    }
  }
  let tryFj = mat.map(item=>item.every(item => item===false))

  const get = tryFj.every(item => item === true)
  if(get){
    result = result.map(item=> item.map(ite =>ite= 0))
  }
  return result
}

module.exports = {
  minesweeper,
};
