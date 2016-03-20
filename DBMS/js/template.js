document.writeln("<script src='js/jquery.min.js'></script>");
var t=null;
var arr=document.querySelectorAll(".resize");
//The function below uses jQuery to resize elements on the menubar. It does so by invoking resize event of the entire window
//node.Brilliant , no?? Mwahahahaha!!!
$("document").ready(function(){
	//var size = document.querySelector(".resize").hasAttribute("font-family");
//	document.write("Hi");
	//var s=document.body.querySelector(".balloon");
	//var b=document.createElement("p");
	//b.innerHTML=size;
	//s.appendChild(b);
	var min_width=700;
	var max_width=1286;
	var init_size=45;
	var factor=57;
	$(window).resize(function()
	 {
	 	var size=$(this).width();
    	if( size > min_width  && size< max_width) 
		{
			//var s=parseInt($(".resize").css("margin-left"));
			var a=parseInt((init_size-(((max_width-size)/(max_width-min_width))*factor)));
			//s=s-1;
			for(var i=0;i<arr.length;i++)
			{
				arr[i].style.marginLeft=a+"px";
				arr[i].style.marginRight=a+"px";				
			}
		}
		else	
		{
			for(var i=0;i<arr.length;i++)
			{
				arr[i].style.marginLeft=init_size+"px";
				arr[i].style.marginRight=init_size+"px";				
			}
		}
	}
	);

	/*
	$(window).reload(function()
	 {
	 	$(body).css("width","100%");
	 	$(body).css("height","100%");
	 }
	 );

	 $('.carousel').carousel({
  		interval: 100
	});
	*/
	}
	);
	
	
	
	
	
	
	// Testing codes :Buggy and useless 			
		/*	
    		var s=parseInt($(".resize").css("margin-left"));
    		if(t==null)t=s;
    		if(s>t)
		{
			t=s;
			s=s-1;
			
			for(var i=0;i<arr.length;i++)
			{
				arr[i].style.marginLeft=s+"px";
				arr[i].style.marginRight=s+"px";				
			}			
		}
		else if(s<t)
		{
			t=s;
			s=s+1;
			
			for(var i=0;i<arr.length;i++)
			{
				arr[i].style.marginLeft=s+"px";
				arr[i].style.marginRight=s+"px";				
			}			
		}
	}
		*/
/*
	var s=parseInt($(".resize").css("margin-left"));
	
	if($(window).width()>992)
	{
		var s=parseInt($(".resize").css("margin-left"));
		if(s>t)
		{
			t=s;
			s=s-1;
			
			for(var i=0;i<arr.length;i++)
			{
				arr[i].style.marginLeft=s+"px";
				arr[i].style.marginRight=s+"px";				
			}			
		}
		else if(s<t)
		{
			t=s;
			s=s+1;
			
			for(var i=0;i<arr.length;i++)
			{
				arr[i].style.marginLeft=s+"px";
				arr[i].style.marginRight=s+"px";				
			}			
		}
	}
	*/



