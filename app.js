let myCheckbox = document.querySelector(".buttons1 input"),
duration = document.querySelector("month"),
price = document.querySelector(".month span"),
switcher = document.querySelector(".buttons1"),
range = document.querySelector(".myrange");

switcher.onclick= function() {
   if (myCheckbox.cheked =="true"){
    let priceInt= (price.textContent)
    price.textContent= '${(priceInt-(priceInt*.25))*12 }';
    duration.textContent='/year';  }
    else{
    duration.textContent = 'month';
    }
    }
    let pageViews=document.querySelector(".nav p");
        range.addEventListener("input",".month span")


    function updatePrice(){
        if(range.value==1){
            if(myCheckbox.checked==true){
                price.textContent = '${(8-(8*.25)*12'}
            }
            else{
                price.textContent=8;
                pageViews.textContent="10K";
            }
        }
    
        if(range.value==2) {
            if(myCheckbox.checked==true){
                price.textContent = "108k";
            }
         }
            else{
                price.textContent=12;
                pageViews.textContent="50K";
            }

            if(range.value==3){
                if(myCheckbox.checked==true){
                    price.textContent = "144k";
                }
                else{
                    price.textContent=16;
                    pageViews.textContent="100K";
                }

                
            if(range.value==4){
                if(myCheckbox.checked==true){
                    price.textContent = "216";
                }
                else{
                    price.textContent=24;
                    pageViews.textContent="500K";
                }

              
         }

         
         if(range.value==5){
            if(myCheckbox.checked==true){
                price.textContent = "324";
            }
            else{
                price.textContent=36;
                pageViews.textContent="1M";
            }
          }

          
         
       }
            
        
            
            
        
    



