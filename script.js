let gooIndex = document.getElementById('goo-index');
let hoverEnter = index =>{
  gooIndex.style.top = 100*index+'px';
  let allScreens = document.querySelectorAll('.screen');
  allScreens.forEach(e=>{
    e.classList.remove('visible')
  })
  let nowVisible = document.getElementById('screen_'+index);
  nowVisible.classList.add('visible');
}

 // Get a reference to the select element
 const paymentSelect = document.getElementById('paymentType');

 // Add an event listener to the select element
 paymentSelect.addEventListener('change', function() {
     // Get the selected value
     const selectedValue = paymentSelect.options[paymentSelect.selectedIndex].value;
     console.log('Selected value:', selectedValue); // You can replace this with your desired action
 });