var i = document.getElementsByTagName("img");
var ok = document.getElementById('ok');
ok.src="w51.png";
var list = document.querySelectorAll('.card');


list.forEach((Element)=>{
    Element.addEventListener('mouseenter',(e)=>{

        // Element.children[0].setAttribute('data-aos','fade-in');
        Element.children[0].src=`w${Element.children[0].alt}1.png`;
        console.log(Element);
    });
    Element.addEventListener('mouseleave',(e)=>{
        
        Element.children[0].src=`w${Element.children[0].alt}.png`;
    });
});