//import function randomizeMovie
import randomMovie from './app.js';

//get element button
let movieBtn=document.getElementById('randomize');

//fetch 

const randomizeMovie=async()=>{
    let movieUrl='https://ghibliapi.herokuapp.com/films';
    
    try{
      const response=await fetch(movieUrl);
      if(response.ok){
        const jsonResponse=await response.json();
        let movieObj=randomMovie(jsonResponse);
        
        
        let title=document.getElementById('about').innerHTML=`<h1>${movieObj.title}</h1>`;
        
        let description=document.getElementById('des').innerHTML=`<p>${movieObj.description}</p>`;
        
        let image=document.getElementById('img').innerHTML=`<img src=${movieObj.image}>`;
      }
      
      else{
        throw new Error('Request failed!');}
        
      } catch(error){
        console.log(error);
      }
    }

//event handler
movieBtn.addEventListener('click',randomizeMovie);
onload=randomizeMovie;
