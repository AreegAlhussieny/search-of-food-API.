
let allRecipes =[]
let httpReq= new XMLHttpRequest()
httpReq.open("GET" , "https://forkify-api.herokuapp.com/api/search?q=pizza");
httpReq.send()
httpReq.addEventListener("readystatechange" ,function(){
    if( httpReq.readyState ==4 && httpReq.status ==200){
    allRecipes=JSON.parse(  httpReq.response).recipes
    localStorage.setItem("allRecipes" ,JSON.stringify(allRecipes))
    console.log(allRecipes)
    displayAllREcipes()
    }
})

const prev =document.querySelector(".prev");
const next =document.querySelector(".next");
const maxitem=6;
let index=1;

prev.addEventListener("click",function(){
    if(index>1){
        index--;
   
    displayAllREcipes();

    }
    
})
next.addEventListener("click",function(){
    if(index<allRecipes.length/maxitem){
        index++;
   
        displayAllREcipes()

    }
   
})


function displayAllREcipes(){
    let allRecipesBox="";
    for(let i=0 ;i<allRecipes.length ;i++){
        if(i>=(index*maxitem)-maxitem && i<index*maxitem){
        allRecipesBox += `
        <div class="col-lg-3 col-md-6">
                    <div class="card">
                        <img src="${allRecipes[i].image_url}" alt="">
                        <div class="card-body">
                            <h5>${allRecipes[i].title}</h5>
                          
                            <a href="#" class="btn  btn-info">go</a>
                        </div>

                    </div>

                 </div>`
        }
    }
    localStorage.setItem("allRecipes" ,JSON.stringify(allRecipes))
    document.getElementById("recipes").innerHTML =allRecipesBox
  
}
function search(term){
    let allRecipesBox="";
    
    for(var i=0;i<allRecipes.length;i++){
        if(i>=(index*maxitem)-maxitem && i<index*maxitem){
        if(allRecipes[i].title.includes(term) == true ){
            allRecipesBox += `
            <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <img src="${allRecipes[i].image_url}" alt="">
                            <div class="card-body">
                                <h5>${allRecipes[i].title}</h5>
                              
                                <a href="#" class="btn  btn-info">go</a>
                            </div>
    
                        </div>
    
                     </div>`


        }

    }}
    document.getElementById("recipes").innerHTML =allRecipesBox


}

