// tady je místo pro náš program
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

function budTucny()
{
 document.querySelector('.lev').style.fontWeight = 'bolder';
}

function cervenyPoKliknuti() //tady lepsi ten toggle
{
 document.querySelector('.lev').style.fontColor = 'red';
}

function zvetsiPismoOjednu()
{
document.querySelector('.lev').style.fontSize = fontSize++
}