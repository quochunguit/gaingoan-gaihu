
var random_images_array = ['App-2.jpg', 'App-3.jpg', 'App-4.jpg'];
var gaingoan = localStorage.getItem('gaingoan');
var gaihu = localStorage.getItem('gaihu');
var thanhnu = localStorage.getItem('thanhnu');
if(!gaingoan && ! gaihu && !thanhnu){
  localStorage.setItem('gaingoan', 25);
  localStorage.setItem('gaihu', 24);
   localStorage.setItem('thanhnu', 1);
}

if(gaingoan ==0 &&  gaihu ==0 && thanhnu==0){
  alert('Scan nhiều quá cháy máy rồi...');
}


    
function getRandomImage(imgAr, path) {
    
    path = path || 'images/'; // default path here
    var img = imgrandomGirl(imgAr);
    console.log(gaihu);
    console.log(gaingoan);
    if((img=='App-4.jpg' && gaihu > 16 && gaingoan > 17) || ( img=='App-4.jpg' && thanhnu==0) ){
       getRandomImage(imgAr, path);
      //console.log('fuckkkkk');
    }else{
      if (img=='App-2.jpg'){
        if(gaingoan ==0){
          getRandomImage(imgAr, path);
        }else{
          gaingoan = gaingoan -1 ;
          localStorage.setItem('gaingoan', gaingoan);
        }
        
      }
      if (img=='App-3.jpg'){
        if(gaihu==0){
           getRandomImage(imgAr, path); 
        }else{
          gaihu = gaihu - 1 ;
          localStorage.setItem('gaihu', gaihu);
        }
        
        
      }
      if (img=='App-4.jpg'){
        if(thanhnu==0){
          getRandomImage(imgAr, path);
        }else{
           thanhnu = thanhnu - 1 ;
        localStorage.setItem('thanhnu', thanhnu);
        }
       
        
      }
      var imgStr = '<img style="width:1920; height:1080" src="' + path + img + '" alt = "">';
      document.write(imgStr); document.close();
    }
    
}

function imgrandomGirl(imgAr){
  var num = Math.floor( Math.random() * imgAr.length );
  var img = imgAr[ num ];
  return img;
}

var myVar;

function myFunction() {
    $('.gray-bg').show();
    myVar = setTimeout(showPage, 5000);
}

function showPage() {
  getRandomImage(random_images_array, 'images/');

}


