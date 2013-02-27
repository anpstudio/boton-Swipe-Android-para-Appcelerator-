/*
 *El botón se crea mediante una vista scrollable con dos vistas
 * en cada vista se siturará un estado del botón y el núemro de página
 * de la vista servirá como bandera para crear la lógica del botón
 */
var arrview = []; 

      var onBtn = Ti.UI.createButton({
	        width : '75dp',
	        height : '28dp',
	        id : 1,
	        backgroundImage : './images/on.png',
	        value: (Ti.App.Properties.getBool('on')===false) ? false : true,
	    });
	    var offBtn = Ti.UI.createButton({
	        width : '75dp',
	        height : '28dp',
	        id : 2,
	        backgroundImage : './images/off.png',
	        value: (Ti.App.Properties.getBool('on')===false) ? false : true,
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
	        currentPage:Ti.App.Properties.getInt('temp'),
	    });

onBtn.addEventListener('singletap', function(){
     		 switchView.scrollToView(1);
   			 Ti.App.Properties.setInt('temp',1);
			 diarioTemperatura.opacity=0;
			 diarioTemperaturaF.opacity=1;
   		});	

offBtn.addEventListener('singletap', function(){
   			 switchView.scrollToView(0);
   			 Ti.App.Properties.setInt('temp',0);
			 diarioTemperatura.opacity=1;
			 diarioTemperaturaF.opacity=0;
   		});
	    
