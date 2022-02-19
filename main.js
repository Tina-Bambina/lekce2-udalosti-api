
/* poznamky souvisejici s hodinou:
console.log('Ahj jsem nalinikoivan')

let nadpis = document.querySelector('h1');
nadpis.classList.add('zluty');
nadpis.classList.remove('zluty')

let ctverecek = document.querySelector('div.zluty');
ctverecek.classList.add('ctverecek');

let pocitadlo = 0;
function priNajetiNaCtverec()
{
console.log('test' + pocitadlo);
pocitadlo++;
} 
*/ 

function budTucny()
{
    document.querySelector('.lev').style.fontWeight = 'bolder';
}

function nebudTucny()
{
    document.querySelector('.lev').style.fontWeight = 'initial';
}

function cervenyPoKliknuti() 
{
    document.getElementById('napis').style.color = 'red'

   // jen zcervena a uz to neumim dat na cerne nazpatek, na toggle jsem neprisla
}


function zvetsiPismoOjednu()
{
   zvetsi = document.getElementById('napis');
   style = window.getComputedStyle(zvetsi, null).getPropertyValue('font-size');
   currentSize = parseFloat(style);
   zvetsi.style.fontSize = (currentSize + 1) + 'px';

    //tak tady musel pomoci stackoverflow :D Zkousela jsem neco ve stylu  document.getElementById('napis').style.fontSize = document.fontSize++;
    //ale nechtelo se mi to chytit
}

function stiskKlavesy(udalost)
{
    console.log(udalost.key);
}

function startAudio()
{
    let audioFile = document.getElementById('zvukovaStopa');
    audioFile.play();
    console.log('zapinam pisen');
}

function pauzaAudio()
{
    let audioFile = document.getElementById('zvukovaStopa');
    audioFile.pause();
    console.log('prerusuji pisen');
}

function muteAudio()
{
    document.getElementById('zvukovaStopa').volume = 0.0;
    console.log('mutuji pisen');
}

function normalAudio()
{
    document.getElementById('zvukovaStopa').volume = 0.5;
    console.log('normalni pisen');
}

function loudAudio()
{
    document.getElementById('zvukovaStopa').volume  = 1.0;
    console.log('nahlas pisen');
}

function backToStartAudio()
{
    let audioFile = document.getElementById('zvukovaStopa') ;
    audioFile.load();
    audioFile.play();
    console.log('zpatky pisen');
}
