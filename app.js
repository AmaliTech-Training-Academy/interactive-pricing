


window.addEventListener("load", (event) => {
    update_monthly_price()
});

const range = document.querySelector(".myrange");
const month_value = document.querySelector("#month-value");
const month_views = document.querySelector("#month-views");
const year_value = document.querySelector("#year-value");
const year_views = document.querySelector("#month-views")
const checkbox = document.querySelector(".toggle-btn");





range.addEventListener('input', () => {
    update_monthly_price()
})

var myrange= document.getElementById("progress");

const update_monthly_price = () => {
    let range_value = parseFloat(range.value).toFixed(2)
    let z = 0;
    if(range_value > 4){

        z = 20
    }else if (range_value >= 3){

        z = 18
    }else if(range_value > 1){

        z = 15
    }

    let x = range_value * z


    var color ='linear-gradient(90deg, rgb(164,243,235) '+ x +"%" +  ', rgb(214,214,214) '+ x +  '%)';
  
    myrange.style.background = color;

    if (range.value == 1) {
        if (checkbox.checked === true) {
            month_value.innerHTML = `$ ${range_value}`
            month_views.innerHTML = `${((8-(8*0.25))*12)}k PAGEVIEWS`
            year_views.innerHTML = `${((8-(8*0.25))*12)}k PAGEVIEWS`
        } else {
        month_value.innerHTML = "$8.00"
        month_views.innerHTML = "10K PAGEVIEWS"
    }
}

if (range.value == 2) {
    if (checkbox.checked == true) {
        month_value.innerHTML = "$ 108.00"

        month_views.innerHTML = "50k PAGEVIEWS"

    }else {

    month_value.innerHTML = "$12.00"
    month_views.innerHTML = "50K PAGEVIEWS"
}
}

if (range.value == 3) {
    if (checkbox.checked == true) {
        month_value.innerHTML = "$ 144.00"

        month_views.innerHTML = "100k PAGEVIEWS"
    }
    else {

        month_value.innerHTML = "$16.00"
        month_views.innerHTML = "100K PAGEVIEWS"
    }

}
    if (range.value == 4) {
        if (checkbox.checked  == true) {
            month_value.innerHTML = "$ 216.00"
            month_views.innerHTML ="500k PAGEVIEWS"

        }
        else {

            
            month_value.innerHTML = "$24.00"
            month_views.innerHTML = "500K PAGEVIEWS"
        }


    }


    if (range.value == 5) {
        if (checkbox.checked == true) {
            month_value.innerHTML = "$324.00"
            month_views.innerHTML = "1M PAGEVIEWS"

        }
        else {

            month_value.innerHTML = "$36.00"
            month_views.innerHTML = "1M PAGEVIEWS"
        }
    }






}

