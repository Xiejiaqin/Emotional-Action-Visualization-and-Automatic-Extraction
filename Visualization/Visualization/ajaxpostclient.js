function queryRslt(qstr)
{
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr = "bookstring="+ qstr;
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
} 

function H1()
{
	
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr1 = "type=H1";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr1);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function H2()
{
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr = "type=H2";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function H3()
{
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr = "type=H3";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function H4()
{
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr = "type=H4";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function H5()
{
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr = "type=H5";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}

function S1()
{
	
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr1 = "type=S1";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr1);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function S2()
{
	
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr1 = "type=S2";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr1);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function S3()
{
	
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr1 = "type=S3";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr1);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function S4()
{
	
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr1 = "type=S4";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr1);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function S5()
{
	
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr1 = "type=S5";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr1);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}

function A1()
{
	
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr1 = "type=A1";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr1);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function A2()
{
	
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr1 = "type=A2";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr1);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function A3()
{
	
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr1 = "type=A3";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr1);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function A4()
{
	
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr1 = "type=A4";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr1);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function A5()
{
	
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr1 = "type=A5";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr1);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}

function F1()
{
	
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr1 = "type=F1";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr1);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function F2()
{
	
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr1 = "type=F2";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr1);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function F3()
{
	
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr1 = "type=F3";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr1);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function F4()
{
	
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr1 = "type=F4";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr1);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}

function H1()
{
	
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr1 = "type=H1";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr1);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function H2()
{
	
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr1 = "type=H2";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr1);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function H3()
{
	
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr1 = "type=H3";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr1);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function H4()
{
	
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr1 = "type=H4";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr1);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function H5()
{
	
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr1 = "type=H5";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr1);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}

function U1()
{
	
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr1 = "type=U1";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr1);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function U2()
{
	
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr1 = "type=U2";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr1);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function U3()
{
	
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr1 = "type=U3";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr1);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function U4()
{
	
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr1 = "type=U4";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr1);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}
function U5()
{
	
    //��ȡ���ܷ�����Ϣ��
    var rslt = document.getElementById("rslt");
    //���ձ���URL��ַ
    var url = "postqueryinfo.php";
    //��ҪPOST��ֵ
    var postStr1 = "type=U5";
    //ʵ����XMLHttpRequest
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
    //ͨ��Post��ʽ������
    xmlHttp.open("POST", url, true); 
    //���崫����ļ�HTTPͷ��Ϣ 
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8"); 
    //����POST����
    xmlHttp.send(postStr1);
    //�������ݵĴ�����
    xmlHttp.onreadystatechange = function(){
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
               rslt.innerHTML = xmlHttp.responseText;
            }
      }
}




