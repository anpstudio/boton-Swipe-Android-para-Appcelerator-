/*
 *El botón se crea mediante una vista scrollable con dos vistas
 * en cada vista se siturará un estado del botón y el núemro de página
 * de la vista servirá como bandera para crear la lógica del botón
 */
var arrview = []; 

        var onBtn = Ti.UI.createButton({
	        width : '75dp',
	        height : '28dp',
	        backgroundImage : './images/on.png'
	    });
	var offBtn = Ti.UI.createButton({
	        width : '75dp',
	        height : '28dp',
	        backgroundImage : './images/off.png',
	    });
	    
	    arrview.push(onBtn);
	    arrview.push(offBtn);
	    
var switchView = Ti.UI.createScrollableView({
	        top : 0,
	        width : '75dp',
	        height : '28dp',
	        views : arrview,
	        backgroundColor : 'white',
	        showPagingControl:false,
	        currentPage:Ti.App.Properties.getInt('on'),
});

/*
 *listener para cuadno se haga click
 */
 
onBtn.addEventListener('singletap', function(){
     		 switchView.scrollToView(1);
   		 Ti.App.Properties.setInt('on',1);
});	

offBtn.addEventListener('singletap', function(){
   		switchView.scrollToView(0);
   		Ti.App.Properties.setInt('on',0);

});
/*
 *listener para cuadno se haga swipe
 */
onBtn.addEventListener('change', function(){
		switchView.scrollToView(1);
   		 Ti.App.Properties.setInt('on',1);
});
offBtn.addEventListener('change', function(){
   		switchView.scrollToView(0);
   		Ti.App.Properties.setInt('on',0);

});	    
