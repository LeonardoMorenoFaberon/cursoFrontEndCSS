'use strict'

var imagen1 = document.querySelector("#imagen1");
var buttonImagen = document.querySelector("#buttonImagen");
var iddiplayvisibility =  document.querySelector("#iddiplayvisibility");

var visibility_hidden = "visibility_hidden";
var display_none= "display_none";
var visibility_visible =  "visibility_visible";


buttonImagen.addEventListener('click' , function(){
    console.log(`estas aca`);
    
    if(imagen1.classList==""){
        imagen1.classList.add(visibility_hidden);
        iddiplayvisibility.textContent="visibility:hidden;"

    }else if(imagen1.classList.contains(visibility_hidden)){
        console.log(`vamos a eliminar ${visibility_hidden}`);
        imagen1.classList.remove(visibility_hidden);
        imagen1.classList.add(display_none);
        iddiplayvisibility.textContent="display:none;"

    }else if(imagen1.classList.contains(display_none)){
        console.log(`vamos a eliminar ${display_none}`);
        imagen1.classList.remove(display_none);
        imagen1.classList.add(visibility_visible);
        iddiplayvisibility.textContent="visibility:visible;"


    }else if(imagen1.classList.contains(visibility_visible)){
        console.log(`vamos a eliminar ${visibility_visible}`);
        imagen1.classList.remove(visibility_visible);
        imagen1.classList.add(visibility_hidden);
        iddiplayvisibility.textContent="visibility:hidden;"

    }

});


var radioPositionStatic   = document.getElementById('radioPositionStatic')  ; 
var radioPositionAbsolute = document.getElementById('radioPositionAbsolute');
var radioPositionRelative = document.getElementById('radioPositionRelative');
var arrRadioPositions =  [radioPositionStatic , radioPositionAbsolute , radioPositionRelative];

var radioPositionStaticPadre =document.getElementById('radioPositionStaticPadre');
var radioPositionAbsolutePadre =  document.getElementById('radioPositionAbsolutePadre');
var radioPositionRelativePadre = document.getElementById('radioPositionRelativePadre');
var radioPositionFixedPadre    = document.getElementById('radioPositionFixedPadre');
var radioPositionFixedHijo =     document.getElementById('radioPositionFixedHijo');
var arrRadioPositionsPadre =  [radioPositionStaticPadre , radioPositionAbsolutePadre , radioPositionRelativePadre];

var radioDisplayTable = document.getElementById('radioDisplayTable');
var radioDisplayBlock = document.getElementById('radioDisplayBlock');

    //declarando checkboxes:
    var checkboxheight = document.getElementById('chkbxheight');
    var checkboxwidth= document.getElementById('chkbxwidth');
    var inputHeightNumber = document.getElementById('inputHeightNumber');
    var inputWidthNumber = document.getElementById('inputWidthNumber');




    var contenedorRadiobotonesParaEjemploAbsolute = document.querySelector('#contenedorRadiobotonesParaEjemploAbsolute');
    var radiobuttonSelected ;
    contenedorRadiobotonesParaEjemploAbsolute.addEventListener('change' ,function(e){
        console.log(radiobuttonSelected = e.target.id );
       
        switch(e.target.id){
            case 'radioPositionStatic' :  unopositionabsolute.style.position = 'static';
                break;
            case 'radioPositionAbsolute': unopositionabsolute.style.position = 'absolute';
                break;
            case 'radioPositionRelative': unopositionabsolute.style.position = 'relative';
                break;
                case 'radioPositionFixedHijo': unopositionabsolute.style.position = 'fixed';
                    break;  
            case 'radioPositionStaticPadre' : sectionpositionabsolutePadre.style.position = 'static';
                break;
            case 'radioPositionAbsolutePadre' : sectionpositionabsolutePadre.style.position = 'absolute';
                break;
            case 'radioPositionRelativePadre': sectionpositionabsolutePadre.style.position = 'relative';
                break;  
            case 'radioPositionFixedPadre': sectionpositionabsolutePadre.style.position = 'fixed';
                break;  
            case 'radioDisplayTable' : sectionpositionabsolutePadre.style.display =  'table';
                break;
            case 'radioDisplayBlock' : sectionpositionabsolutePadre.style.display =  'block';         
                break;
            // ************ ahora los checkboxes:
            case checkboxheight.id : 
                    //  Operador Terna:
                    sectionpositionabsolutePadre.style.height = checkboxheight.checked ?  inputHeightNumber.value  :  0   
                    // if(checkboxheight.checked){
                    //         sectionpositionabsolutePadre.style.height = inputHeightNumber.value ; 
                    // }else{
                    //     sectionpositionabsolutePadre.style.height = '0';
                    // } ;
                break;    
            case checkboxwidth.id : 
                    //  Operador Terna:
                    sectionpositionabsolutePadre.style.width =  checkboxwidth.checked ? inputWidthNumber.value  :  0 
                    // if( checkboxwidth.checked){
                    //         sectionpositionabsolutePadre.style.width = inputWidthNumber.value;
                    // }else{
                    //     sectionpositionabsolutePadre.style.width = '0';
                    // };
                    break; 
            }
    });

//para position absolute:
var idshowcssunopositionabsolute =  document.getElementById("idshowcssunopositionabsolute");

// var sectionpositionabsolutePadre =document.getElementsByClassName("sectionpositionabsolute");
var sectionpositionabsolutePadre =document.getElementById("idSectionPosition");

// var unopositionabsolute = document.getElementsByClassName("unopositionabsolute");
var unopositionabsolute = document.getElementById("idUnoPosition");
var arrUnoPositionAbsoluteCssProperties =[
        'border-radius',
        'color',
        'font-size',
        'font-weight',
        'line-height',
        'padding',
        'text-align',
        'background'
]

agregarEstiloAlArray(unopositionabsolute, 'position',  "absolute");

function agregarEstiloAlArray( elemento , estilo , valor){
    elemento[0].style.estilo= valor;
    
    arrUnoPositionAbsoluteCssProperties.push(estilo)
}


var sectionStyle = window.getComputedStyle(sectionpositionabsolutePadre );
var unoStyle = window.getComputedStyle(unopositionabsolute);


function dameStylos(propiedad){
    // console.log();
	return ` ${propiedad}: ${unoStyle.getPropertyValue(propiedad)}`;
}	

function dameStylosDeElemento(estilosDeElemento , propiedad){
	// console.log();
    return ` ${propiedad}: ${estilosDeElemento.getPropertyValue(propiedad)} `;
}	


// dameStylosDeElemento(unoStyle , 'position');

idshowcssunopositionabsolute.innerHTML=`

${dameStylosDeElemento(unoStyle , 'border-radius')}; <br />
${dameStylosDeElemento(unoStyle , 'color')}; <br />
${dameStylosDeElemento(unoStyle , 'font-size')}; <br />
${dameStylosDeElemento(unoStyle , 'font-weight')}; <br />
${dameStylosDeElemento(unoStyle , 'line-height')}; <br />
${dameStylosDeElemento(unoStyle , 'padding')}; <br />
${dameStylosDeElemento(unoStyle , 'text-align')}; <br />
${dameStylosDeElemento(unoStyle , 'background-color')}; <br />
`;