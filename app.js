// let myCheckbox = document.querySelector(".buttons1 oval");
// let duration = document.querySelector("month");
// let price = document.querySelector(".month span");
// let switcher = document.querySelector(".buttons1");
// let range = document.querySelector(".myrange");

// switcher.onclick= function() {
//     console.log(myCheckbox.checked)
//    if (myCheckbox.checked =="true"){
//     alert('hello')
// let priceInt= (price.textContent)
// price.textContent= '${(priceInt-(priceInt*.25))*12 }';
// duration.textContent='/year';  }
// else{
// duration.textContent = 'month';
// }
// }
// let pageViews=document.querySelector(".nav p");
//     range.addEventListener("input",".month span")


// function updatePrice(){
//     if(range.value==1){
//         if(myCheckbox.checked==true){
//             price.textContent = '${(8-(8*.25)*12'}
//         }
//         else{
//             price.textContent=8;
//             pageViews.textContent="10K";
//         }
//     }

//     if(range.value==2) {
//         if(myCheckbox.checked==true){
//             price.textContent = "108k";
//         }
//      }
//         else{
//             price.textContent=12;
//             pageViews.textContent="50K";
//         }

//         if(range.value==3){
//             if(myCheckbox.checked==true){
//                 price.textContent = "144k";
//             }
//             else{
//                 price.textContent=16;
//                 pageViews.textContent="100K";
//             }


//         if(range.value==4){
//             if(myCheckbox.checked==true){
//                 price.textContent = "216";
//             }
//             else{
//                 price.textContent=24;
//                 pageViews.textContent="500K";
//             }


//      }


//      if(range.value==5){
//         if(myCheckbox.checked==true){
//             price.textContent = "324";
//         }
//         else{
//             price.textContent=36;
//             pageViews.textContent="1M";
//         }
//   }




// const Button=document.querySelector(".oval");
//  const oval=document.querySelector(".navbar");
//  Button.addEventListener("click, myFuncntion");


//  function myFuncntion(){
//     var monthPay=document.getElementByIdTagname("bill");
//     var yearlyPay=document.getElementByIdTagname("yearbill");
//     var i;
//     var j;
//     for (i=0; i< monthPay.length;i++){
//      for (n=0; j< yearlyPay.length;j++){
//         if(monthPay[i].style.display==="none"){
//             monthPay[i].style.display="block";
//             yearlyPay[i].style.display="none";
//             navbar.style.justifyContent="flex-end";   
//         }
//         else{
//             monthPay[i].style.display="none";
//             monthPay[i].style.display="block";
//             navbar.style.justifyContent="flex-start";
//         }
//      }
//     }
//  }


window.addEventListener("load", (event) => {
    update_monthly_price()
});

const range = document.querySelector(".myrange");
const month_value = document.querySelector("#month-value");
const month_views = document.querySelector("#month-views");
const checkbox = document.querySelector(".toggle-btn");





range.addEventListener('input', () => {
    update_monthly_price()
})


const update_monthly_price = () => {
    let range_value = parseFloat(range.value).toFixed(2)




    if (range.value == 1) {
        if (checkbox.checked === true) {
            month_value.innerHTML = `$ ${range_value}`
            month_views.innerHTML = `${((8-(8*0.25))*12)}k PAGEVIEWS`
        } else {
        month_value.innerHTML = "$8.00"
        month_views.innerHTML = "10K PAGEVIEWS"
    }
}

if (range.value == 2) {
    if (checkbox.checked == true) {
        month_value.innerHTML = `$ ${range_value}`

        month_views.innerHTML = "108k PAGEVIEWS"

    }else {

    month_value.innerHTML = "$12.00"
    month_views.innerHTML = "50K PAGEVIEWS"
}
}

if (range.value == 3) {
    if (checkbox.checked == true) {
        month_value.innerHTML = `$ ${range_value}`

        month_views.innerHTML = "144k PAGEVIEWS"
    }
    else {

        month_value.innerHTML = "$16.00"
        month_views.innerHTML = "100K PAGEVIEWS"
    }

}
    if (range.value == 4) {
        if (checkbox.checked  == true) {
            month_value.innerHTML = `$ 12.00`

        }
        else {

            
            month_value.innerHTML = "$24.00"
            month_views.innerHTML = "500K PAGEVIEWS"
        }


    }


    if (range.value == 5) {
        if (checkbox.checked == true) {
            month_value.innerHTML = "$324.00"

        }
        else {

            month_value.innerHTML = "$36.00"
            month_views.innerHTML = "1M PAGEVIEWS"
        }
    }





}

