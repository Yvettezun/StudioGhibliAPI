function randomMovie(array){
    let index=Math.floor(Math.random()*array.length);
    return array[index];
  }

  export default randomMovie;