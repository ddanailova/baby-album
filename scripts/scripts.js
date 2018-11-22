function toggleGender() {
        // let boy = document.getElementsByClassName('boy')[0];
        // let girl = document.getElementsByClassName('girl')[0];

        // let boyCheckBox = document.getElementById('gender-main-toggle-boy');       
        // let girlCheckBox = document.getElementById('gender-main-toggle-girl');
        // boy.addEventListener('click', function(){
        //         girlCheckBox.removeAttribute('checked');
        // });

        // girl.addEventListener('click', function(){
        //         boyCheckBox.removeAttribute('checked');
        // });

   $('.gender-toggle.boy').on('click', function(ev){
            $('#gender-main-toggle-girl').removeAttr('checked');
            $('#gender-main-toggle-girl').prop('checked', false);
   });

   $('.gender-toggle.girl').on('click', function(ev){
        $('#gender-main-toggle-boy').removeAttr('checked');
        $('#gender-main-toggle-boy').prop('checked', false);
});
}
