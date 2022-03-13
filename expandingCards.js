let panel = $('.panel');

panel.on('click',(e)=>{
    panel.each(()=>{panel.removeClass('active')});
    e.currentTarget.className += ' active';
})