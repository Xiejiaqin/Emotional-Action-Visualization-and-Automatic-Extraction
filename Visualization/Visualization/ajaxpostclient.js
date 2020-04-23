function queryRslt(qstr)
{
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr = "bookstring="+ qstr;
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
} 

function H1()
{
	
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr1 = "type=H1";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr1);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function H2()
{
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr = "type=H2";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function H3()
{
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr = "type=H3";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function H4()
{
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr = "type=H4";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function H5()
{
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr = "type=H5";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}

function S1()
{
	
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr1 = "type=S1";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr1);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function S2()
{
	
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr1 = "type=S2";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr1);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function S3()
{
	
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr1 = "type=S3";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr1);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function S4()
{
	
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr1 = "type=S4";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr1);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function S5()
{
	
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr1 = "type=S5";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr1);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}

function A1()
{
	
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr1 = "type=A1";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr1);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function A2()
{
	
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr1 = "type=A2";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr1);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function A3()
{
	
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr1 = "type=A3";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr1);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function A4()
{
	
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr1 = "type=A4";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr1);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function A5()
{
	
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr1 = "type=A5";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr1);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}

function F1()
{
	
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr1 = "type=F1";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr1);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function F2()
{
	
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr1 = "type=F2";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr1);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function F3()
{
	
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr1 = "type=F3";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr1);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function F4()
{
	
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr1 = "type=F4";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr1);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}

function H1()
{
	
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr1 = "type=H1";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr1);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function H2()
{
	
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr1 = "type=H2";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr1);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function H3()
{
	
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr1 = "type=H3";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr1);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function H4()
{
	
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr1 = "type=H4";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr1);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function H5()
{
	
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr1 = "type=H5";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr1);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}

function U1()
{
	
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr1 = "type=U1";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr1);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function U2()
{
	
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr1 = "type=U2";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr1);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function U3()
{
	
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr1 = "type=U3";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr1);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function U4()
{
	
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr1 = "type=U4";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr1);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function U5()
{
	
    //获取接受返回信息层
    var rslt = document.getElementById("rslt");
    //接收表单的URL地址
    var url = "postqueryinfo.php";
    //需要POST的值
    var postStr1 = "type=U5";
    //实例化XMLHttpRequest
    var xmlHttp = null;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
       }
    else if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
    else{
        return;
       }
    //通过Post方式打开连接
    xmlHttp.open("POST", url, true); 
    //定义传输的文件HTTP头信息 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //发送POST数据
    xmlHttp.send(postStr1);
    //返回数据的处理函数
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}




