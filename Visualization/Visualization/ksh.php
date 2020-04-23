<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="Emotional-Action-Visualization" content="width=device-width,initial-scale=1.0">
    <title>Emotional-Action-Visualization</title>
    <link rel="stylesheet" href="css/index2.css" />
<script src="ajaxpostclient.js"></script> 
<style type="text/css">
	.special{
		margin-left: 450px;
		margin-right: auto; 
		width:700px}
    #rslt{
		margin-left:250px;
		width:1000px;
		color:#fff;
		/* background-color: rgba(169, 189, 255, 0.05);
		border: 2px solid rgba(169, 189, 255, 0.288);
		padding: .125rem .125rem .125rem .125rem; */
		line-height:24px;  
	}
	.in{
		color: white;
		font-size: 16px;
		text-align: center;
		padding: 30px 30px;
	}
	.button {
	background-color: rgba(169, 189, 255, 0);
	border: 2px solid rgba(169, 189, 255, 0.4);
	border-radius: 2px;
	color: white;
	font-size: 12px;

    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;

    margin: 4px 2px;
    cursor: pointer;
}
.button2 {
	background-color: rgba(169, 189, 255, 0.4);
	border: 2px solid rgba(169, 189, 255, 0.4);
	border-radius: 2px;
	color: white;
	font-size: 12px;

    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;

    margin: 4px 2px;
    cursor: pointer;
}
.put{
	background-color: #fff;
	border: 2px solid rgba(169, 189, 255, 0.4);
	border-radius: 2px;
	display: inline-block;
}
</style>
</head>

<body>
<header>
            <h1>情感-行为查询</h1>
            <a href="./index.html">
            <div class="bu1">数据可视化</div>
            </a>
            <a href="./ksh.php">
            <div class="bu2">情感-行为语料</div>
            </a>
            <!-- <a href="./index3.html">
            <div class="bu3">标注准则
            </div>
            </a> -->
    </header>

<?php
$book_info=array("name"=>"","time"=>"","publisher"=>"");
function GenBookInfo($Book_arrayString)
{
	global $book_info;
	$book_info['name']=substr($Book_arrayString,0,strpos($Book_arrayString,";"));
	$book_tail=substr($Book_arrayString,strpos($Book_arrayString,";")+1);
	$book_info['time']=substr($book_tail,0,strpos($book_tail,";"));
}
?>
<form action="button.php" method="get">
<br>
<div class="special">
<input type="button" class="button" name="type" value="快乐" onclick="H1();">
<input type="button" class="button" name="type" value="高兴" onclick="H2();">
<input type="button" class="button" name="type" value="欢乐" onclick="H3();">
<input type="button" class="button" name="type" value="开心" onclick="H4();">
<input type="button" class="button" name="type" value="愉快" onclick="H5();">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="button" class="button" name="type" value="难过" onclick="S1();">
<input type="button" class="button" name="type" value="悲伤" onclick="S2();">
<input type="button" class="button" name="type" value="伤心" onclick="S3();">
<input type="button" class="button" name="type" value="悲痛" onclick="S4();">
<input type="button" class="button" name="type" value="痛心" onclick="S5();">
<br>
<input type="button" class="button" name="type" value="愤怒" onclick="A1();">
<input type="button" class="button" name="type" value="生气" onclick="A2();">
<input type="button" class="button" name="type" value="气愤" onclick="A3();">
<input type="button" class="button" name="type" value="恼火" onclick="A4();">
<input type="button" class="button" name="type" value="恼怒" onclick="A5();">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="button" class="button" name="type" value="害怕" onclick="F1();">
<input type="button" class="button" name="type" value="恐惧" onclick="F2();">
<input type="button" class="button" name="type" value="恐慌" onclick="F3();">
<input type="button" class="button" name="type" value="畏惧" onclick="F4();">
<br>
<input type="button" class="button" name="type" value="讨厌" onclick="H1();">
<input type="button" class="button" name="type" value="仇恨" onclick="H2();">
<input type="button" class="button" name="type" value="厌恶" onclick="H3();">
<input type="button" class="button" name="type" value="痛恨" onclick="H4();">
<input type="button" class="button" name="type" value="怨恨" onclick="H5();">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="button" class="button" name="type" value="惊讶" onclick="U1();">
<input type="button" class="button" name="type" value="震惊" onclick="U2();">
<input type="button" class="button" name="type" value="大吃一惊" onclick="U3();">
<input type="button" class="button" name="type" value="惊奇" onclick="U4();">
<input type="button" class="button" name="type" value="难以置信" onclick="U5();">
<br>
</div>
</form>
<div class="in">
<form action="ksh.php" method="POST">
请输入行为关键字：<input type="text" class="put" name="bookstring" />
<input type="submit"  class="button2" value="查询" />
</form>
</div>

<p><div id="debug"></div></p></p>
<div id="rslt" class="txt">
<?php
		if(isset($_POST['bookstring']))
		{//传入了查询字串
			$Query_string=$_POST['bookstring'];
			$file_name="emotion/result.txt";//指定文件位置
			$fp=fopen($file_name,'r');//以读取的方式打开文件
			$data=fread($fp,filesize($file_name));
			fclose($fp);
			$book_array=explode("\r\n",$data);			
			if($Query_string!="")
			{
				//echo "有查询字，列出书名中包含查询字的书"."<br />";
				for($i=0;$i<count($book_array);$i++)
				{
					GenBookInfo($book_array[$i]);

					$book_info_nospace=str_replace(" ","",$book_info['time']);
					if(strstr(strtolower($book_info_nospace),strtolower($Query_string)))
					echo "【".$book_info['name']."】 ".$book_info['time']. "<br />";
				}
			}
			else
			{
				// echo "未输入查询字串，将列出语料"."<br />";
				for($i=0;$i<count($book_array);$i++)
				{					
					GenBookInfo($book_array[$i]);
					echo "【".$book_info['name']."】 ".$book_info['time']. "<br />";
				}
			}
		}
		// else{ echo "首次加载此页面";}
?>

</div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<script src="js/flexible.js"></script>
</body>