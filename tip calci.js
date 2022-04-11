let btn = document.getElementById('btn');

btn.addEventListener('click',function(){
       let billAmount = document.getElementById('bill-amount').value;
      let tipParcentage = document.getElementById('tip parcentage').value;


       let tipAmount = document.getElementById('tip-amount').value = (billAmount / 100)*tipParcentage;

        document.getElementById('total-bill').value = parseFloat(billAmount) + parseFloat(tipAmount);
})