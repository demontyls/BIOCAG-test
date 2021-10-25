let select = document.querySelector('.select');
let offMargin = document.querySelector('.btn-report');

select.addEventListener('click', () =>{
    select.classList.toggle('shift-down');
    offMargin.classList.toggle('off-margin');

    
    // if(select.classList.contains('shift-down')) {
    //     offMargin.style.margin = 0;
    // } else {
    //     offMargin.style.marginTop = 50 + 'px';
    // }
})