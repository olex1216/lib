//获取属性值
function getStyle (obj.attr) {
	 if (obj.currentStyle) {
	 	return 	obj.currentStyle[attr];//IF浏览器
	 } else {
 	  return getComputedStyle(obj,false)// 火狐浏览器
	 }
}

// 封装添加事件监听程序
function addEvent(ele, type, hander){
  if(ele.addEventListener){
    ele.addEventListener(type, hander, false);
  } else if(ele.attachEvent){
    ele.attachEvent('on' + type, hander);
  } else {
    ele['on' + type] = hander;
  }
}


//封装getbyClass
function getByClass(clsName,parent){
var oParent=parent?document.getElementById(parent):document,
  eles=[],
  elements=oParent.getElementsByTagName('*');

for(var i=0,l=elements.length;i<l;i++){
if(elements[i].className==clsName){
  eles.push(elements[i]);
}
}
return eles;
}


//封装事件处理
var eventUtil={
  
          // 添加句柄
          addHandler:function(element,type,handler){
               if(element.addEventListener){
                 element.addEventListener(type,handler,false);
               }else if(element.attachEvent){
                 element.attachEvent('on'+type,handler);
               }else{
                 element['on'+type]=handler;
               }
          },

          // 删除句柄
          removeHandler:function(element,type,handler){
               if(element.removeEventListener){
                 element.removeEventListener(type,handler,false);
               }else if(element.detachEvent){
                 element.detachEvent('on'+type,handler);
               }else{
                 element['on'+type]=null;
               }
          },

          //
          getEvent:function(event){
            return event?event:window.event;
          },
          getType:function(event){
            return event.type;
          },
          getElement:function(event){
            return event.target || event.srcElement;
          },
          preventDefault:function(event){
            if(event.preventDefault){
              event.preventDefault();
            }else{
              event.returnValue=false;
            }
          },
         stopPropagation:function(event){
           if(event.stopPropagation){
             event.stopPropagation();
           }else{
             event.cancelBubble=true;
           }
         }
  }


