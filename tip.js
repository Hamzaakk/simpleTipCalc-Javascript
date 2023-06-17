const Firstinput = document.getElementById('first-input')
const Secondinput = document.getElementById('second-input')
const Add= document.getElementById('add')
const total= document.getElementById('result')
const nbPep= document.getElementById('nbpeople')



function calcbill(){
  Firstinput.textContent = 0
  Secondinput.textContent= 0
  const inpbill= Number(Firstinput.value)
  const nbtip = Number(Secondinput.value)
  
  const nbp= Number(nbPep.textContent)
  const totalin =( inpbill + nbtip ) / nbp
  total.innerText = totalin
   console.log(totalin) 
}
function addP(){
   let nbp= Number(nbPep.textContent)
   nbp++
  nbPep.innerText= nbp
  calcbill()
}
function moinP(){
  let nbp= Number(nbPep.textContent)
  if(nbp > 1){
     nbp--
  nbPep.innerText= nbp
  }else{
    nbp.innerText = 1
  }
  calcbill()
  
}
calcbill()
moinP()
addP()
