function toggleGender() {
        let boy = document.querySelector('.boy');
        let girl = document.querySelector('.girl');


        let boyCheckBox = document.querySelectorAll('input[type="checkbox"]')[0];
        let girlCheckBox = document.querySelectorAll('input[type="checkbox"]')[1];
        
        girl.addEventListener('click', function(){
                boyCheckBox.removeAttribute('checked');
        });
        
        boy.addEventListener('click', function(){
                girlCheckBox.removeAttribute('checked');
        });

//    $('.gender-toggle.boy').on('click', function(ev){
//             $('#gender-main-toggle-girl').removeAttr('checked');
//             $('#gender-main-toggle-girl').prop('checked', false);
//    });

//    $('.gender-toggle.girl').on('click', function(ev){
//         $('#gender-main-toggle-boy').removeAttr('checked');
//         $('#gender-main-toggle-boy').prop('checked', false);
// });
}
