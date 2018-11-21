function toggleGender() {
   $('.gender-toggle.boy').on('click', function(ev){
            $('#gender-main-toggle-girl').removeAttr('checked');
            $('#gender-main-toggle-girl').prop('checked', false);
   });

   $('.gender-toggle.girl').on('click', function(ev){
        $('#gender-main-toggle-boy').removeAttr('checked');
        $('#gender-main-toggle-boy').prop('checked', false);
});
}
