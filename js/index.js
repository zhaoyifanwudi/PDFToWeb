const { PDFObject } = require(".js/pdfobject");
let ress;
let ul = '';
let url = '';
function appednMenu(data) {
    if(!data){
        console.log(1);
    } else {
        data.forEach(function (item,index) {  
            ul += "<li class='left-con left-bar' onclick = \"toPdf('"+ index +"')\">"+item.short+"</li>"
            console.log(index);
        })
    }
    
}
toPdf = (temp) => {
    urlres = ress[temp].full;
    urlres = urlres.replace(/\\/g,"/");
    console.log(urlres);
    PDFObject.embed(urlres, "#right");
    // new PDFObject({
    //     url: urlres ,
    //     }).embed("right")
}
window.onload = () => {
    $.get("server", function(result){
        ress = JSON.parse(result);
        ress = ress.childFiles;
        appednMenu(ress);
        document.getElementById('left').innerHTML=ul;
        console.log(ress);
    });
}