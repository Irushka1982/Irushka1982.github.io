

jQuery(document).ready(function(){
	jQuery(".niceCheck").each(
	function() {
	     changeCheckStart(jQuery(this));
	});
	                                        });
	function changeCheck(el)
	{
	}
	function changeVisualCheck(input)
	{
	var wrapInput = input.parent();
	    if(!input.attr("checked")) {
	        wrapInput.removeClass("niceChecked");
	    }
	    else
	    {
	        wrapInput.addClass("niceChecked");
	    }
	}
	function changeCheckStart(el)
	{
	try
	{
	var el = el,
	    checkName = el.attr("name"),
	    checkId = el.attr("id"),
	    checkChecked = el.attr("checked"),
	    checkDisabled = el.attr("disabled"),
	    checkTab = el.attr("tabindex"),
	    checkValue = el.attr("value");
	    if(checkChecked)
	        el.after("<span class='niceCheck niceChecked'>"+
	            "<input type='checkbox'"+
	            "name='"+checkName+"'"+
	            "id='"+checkId+"'"+
	            "checked='"+checkChecked+"'"+
	            "value='"+checkValue+"'"+
	            "tabindex='"+checkTab+"' /></span>");
	    else
	        el.after("<span class='niceCheck'>"+
	            "<input type='checkbox'"+
	            "name='"+checkName+"'"+
	            "id='"+checkId+"'"+
	             "value='"+checkValue+"'"+
	            "tabindex='"+checkTab+"' /></span>");
	     
	    /* если checkbox disabled - добавляем соотвсмтвующи класс для нужного вида и добавляем атрибут disabled для вложенного chekcbox */     
	    if(checkDisabled)
	    {
	        el.next().addClass("niceCheckDisabled");
	        el.next().find("input").eq(0).attr("disabled","disabled");
	    }
	     
	    /* цепляем обработчики стилизированным checkbox */     
	    el.next().bind("mousedown", function(e) { changeCheck(jQuery(this)) });
	    el.next().find("input").eq(0).bind("change", function(e) { changeVisualCheck(jQuery(this)) });
	    if(jQuery.browser.msie)
	    {
	        el.next().find("input").eq(0).bind("click", function(e) { changeVisualCheck(jQuery(this)) });   
	    }
	    el.remove();
	}
	catch(e)
	{
	    // если ошибка, ничего не делаем
	}
	    return true;
	}
