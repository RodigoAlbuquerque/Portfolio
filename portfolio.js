// DEIXANDO O HEADER PRESO NA TELA
const header = document.querySelector("header")

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 0);
})

// GERANDO OR PROJETOS NO HTML VIA JAVASCRIPT

const projetos = [
    {'title':'Calculadora', 'live':"https://rodigoalbuquerque.github.io/Calculadora/calculadora.html", 'url':"./components/Calculadora.png", 'id':'1','code':'"https://github.com/RodigoAlbuquerque/Calculadora"', 'cardPos':'card-left'},
    {'title':'Jogo da Forca','live':"https://rodigoalbuquerque.github.io/jogoDaForca/",'url':"./components/Jogo_da_forca.png", 'id':'2', 'code':'"https://github.com/RodigoAlbuquerque/jogoDaForca"','cardPos':'card-center'},
    {'title':'Controle Financeiro','live':"https://rodigoalbuquerque.github.io/Controle_Financeiro/App/index.html",'url':"./components/Controle_Financeiro.png", 'id':'3', 'code':'"https://github.com/RodigoAlbuquerque/Controle_Financeiro"','cardPos':'card-right'},
]
function criarProjetos(titulo, live, id, code,cardPos){
    const container = document.querySelector(".portfolio-content")

    const card = document.createElement("div")
    card.setAttribute('class','cards')
    card.setAttribute('id',`${cardPos}`)
    card.innerHTML = `
        <div class="top-card">
            <h2 class="title">${titulo}</h2>
            <span class="second-text">Projeto criado com Javascript <i class='bx bxl-javascript'></i>, HTML5 <i class='bx bxl-html5' ></i> e CSS3 <i class='bx bxl-css3' ></i></span>
        </div>
        <hr>
        <div class="media-card" id=${id}></div>
        <hr>
        <div class="buttons">
            <a href=${code} target="_blank">Ver Código</a>
            <a href="${live}">Ao Vivo</a>
        </div>
    `
  
    container.appendChild(card)
}

const loadProjetos = () => {
    projetos.forEach ((item) => {
        criarProjetos(item.title,item.live,item.id,item.code, item.cardPos)
    })
}

const loadImages = ( ) =>{
    projetos.forEach(
        (item) => {
            const img = document.getElementById(`${item.id}`)
            img.style.backgroundImage = `url(${item.url})`
            img.style.backgroundPosition ="center"
            img.style.backgroundSize ="cover"
        }
    )
}

loadProjetos()
loadImages()

// CRIANDO OS BOTÕES PARA FAZER A PASSAGEM DO SLIDE DOS PROJETOS
const next= document.querySelector("#btn-right")
const prev = document.querySelector("#btn-left")
let px = 0
let qntProjetos;
const attPos = () =>{
    const card = document.querySelectorAll(".cards")
    for(i = 0; i <card.length;i++){
        card[i].style.left = px +'px'
        qntProjetos = card.length
    }
}

const passarProjetos = (event) =>{
    if(window.screen.availwidth >= 575){ 
        maxRight = (qntProjetos - 1) * 484
        maxLeft = (qntProjetos - 1) * - 484
        if(px == maxLeft - 484){
            px = maxRight
        }else if (px == maxRight + 484 ){
            px = maxLeft
        }else if(event.target.id == 'btn-left'){
            px+=484
        }else if (event.target.id =="btn-right"){
            px-=484
        }
        attPos()
    }else{
        maxRight = (qntProjetos - 1) * 384
        maxLeft = (qntProjetos - 1) * - 384
        if(px == maxLeft - 384){
            px = maxRight
        }else if (px == maxRight + 384 ){
            px = maxLeft
        }else if(event.target.id == 'btn-left'){
            px+=384
        }else if (event.target.id =="btn-right"){
            px-=384
        }
        attPos()
    }
}
next.addEventListener("click",passarProjetos)
prev.addEventListener("click",passarProjetos)

const menu = document.getElementById('menu')
const navegacao = document.getElementById('navegacao')
const links = document.querySelectorAll('.link')

const toggleMenu = () => {
    if(menu.classList.contains('closed')){    
        menu.src = 'components/burger.png'
        menu.setAttribute('class','open')
        navegacao.style.display='flex'
        
    }else if (menu.classList.contains('open')){
        menu.src ='components/R.png'
        menu.setAttribute('class','closed')
        navegacao.style.display='none'
    }
}
links.forEach( (link) => link.addEventListener('click',toggleMenu))
menu.addEventListener('click',toggleMenu)
