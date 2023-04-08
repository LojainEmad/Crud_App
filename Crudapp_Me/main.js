const bookName = document.getElementById("name");
const bookDescription = document.getElementById("desc");
const bookrate = document.getElementById("rate");
const bookPrice = document.getElementById("price");
const bookReadable = document.getElementById("readable");
const bookimage = document.getElementById("image");
const tableBody = document.getElementById("tableBody");
const addBtn = document.getElementById("add");
const resetBtn = document.getElementById("reset");


let id=0 
let cards=[]   //array of all information of books

addBtn.addEventListener('click',()=>{
let data = getData()
cards.push(data)
handleData()
resetData()
id++
})

resetBtn.addEventListener('click',()=>{
    resetData()

})

function handleData(){
   let books=""         //string for all imformation of books

   for(let i =0;i<cards.length;i++){ 
    let rate=cards[i].rate
    if(+rate>5){
        rate=5
    }
    else if(+rate<1){
       rate=1
    }
    let fullstars=""
    for(let x=0;x<rate ;x++){
        fullstars+=` <img src="./images/Star_icon_stylized.svg.png"  alt="stars">`
    }
    let emptyStars=""
    for(let x=0;x<5-rate ;x++){
        emptyStars+=` <img src="./images/800px-Five-pointed_star.svg.png"  alt="stars">`
    }

      let book = `<tr class=${cards[i].readable? "read" : ""}>
      <td>${cards[i].id}</td>
      <td>${cards[i].name}</td>
      <td>${cards[i].desc}</td>
      <td class="rate"> 
         ${fullstars + emptyStars}
      <td>${cards[i].price}</td>
      <td>
          <img src="./images/${cards[i].imageName}"alt="book">
      </td>   
      <td>
         <button class="delete" id="delete" onClick="deleteCard(${cards[i].id})"
         type="button">delete</button>
      </td>
    </tr>`
       books+=book
   }
   tableBody.innerHTML=books
  
}

//<td>${cards[i].rate}</td> 

//structure of bookcard


 function getData(){
    let imagePath=bookimage.value
    let arr=imagePath.split('\\')
    let imageName=arr[arr.length-1]

    let data={
      id:id,
      name:bookName.value,
      desc:bookDescription.value,
      price:bookPrice.value,
      rate:bookrate.value,
      imageName: imageName,
      readable:bookReadable.checked
    }
    return data
 }

 function resetData(){
    bookName.value=""
    bookDescription.value=""
    bookrate.value=""
    bookPrice.value=""
    bookReadable.value=""
    bookimage.value=""
    bookReadable.checked=false
 }

 function deleteCard(id){
   //console.log(id)
   cards=cards.filter((e)=>e.id !==id)         //e represents the elements in the cards
   handleData()
 }
