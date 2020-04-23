<?php
$book_info=array("number"=>"","name"=>"");
$respStr="";
$respStr2="";
//$sub=$_POST['math']
header('Content-Type:text/html;charset=GB2312');
function GenBookInfo($Book_arrayString)
{//由一行书的信息生成$book_info数组（书名、出版时间、出版社为数组元素）
	global $book_info;
	$book_info['number']=substr($Book_arrayString,0,strpos($Book_arrayString,";"));//取子字符串substr(源字符串,起始位置,结束位置)，返回子字符串；获得子字符串位置strpos(源字符串,待查找字符串)，返回子字符串起始字符的index
	$book_tail=substr($Book_arrayString,strpos($Book_arrayString,";")+1);
	$book_info['name']=substr($book_tail,0,strpos($book_tail,";"));
}


if(isset($_POST['type'])){
	$type=$_POST['type'];
	$file_name="emotion/info.txt";//指定文件位置
	$fp=fopen($file_name,'r');//以读取的方式打开文件
	$emotion=fread($fp,filesize($file_name));
	fclose($fp);
	$book_array=explode("\r\n",$emotion);
	for($i=0,$j=1;$i<count($book_array);$i++)
		{
		   GenBookInfo($book_array[$i]);
		   
		    if($type == "H1"){
				if($book_info['number']=="快乐"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "H2"){
				if($book_info['number']=="高兴"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "H3"){
				if($book_info['number']=="欢乐"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "H4"){
				if($book_info['number']=="开心"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "H5"){
				if($book_info['number']=="愉快"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   
		   elseif($type == "S1"){
				if($book_info['number']=="难过"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "S2"){
				if($book_info['number']=="悲伤"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "S3"){
				if($book_info['number']=="伤心"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "S4"){
				if($book_info['number']=="悲痛"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "S5"){
				if($book_info['number']=="痛心"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   
		   elseif($type == "A1"){
				if($book_info['number']=="愤怒"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "A2"){
				if($book_info['number']=="生气"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "A3"){
				if($book_info['number']=="气愤"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "A4"){
				if($book_info['number']=="恼火"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "A5"){
				if($book_info['number']=="恼怒"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }

		   elseif($type == "F1"){
				if($book_info['number']=="害怕"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "F2"){
				if($book_info['number']=="恐惧"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "F3"){
				if($book_info['number']=="恐慌"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "F4"){
				if($book_info['number']=="畏惧"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }

		   elseif($type == "H1"){
				if($book_info['number']=="讨厌"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "H2"){
				if($book_info['number']=="仇恨"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "H3"){
				if($book_info['number']=="厌恶"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "H4"){
				if($book_info['number']=="痛恨"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "H5"){
				if($book_info['number']=="怨恨"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }	

		   elseif($type == "U1"){
				if($book_info['number']=="惊讶"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "U2"){
				if($book_info['number']=="震惊"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "U3"){
				if($book_info['number']=="大吃一惊"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "U4"){
				if($book_info['number']=="惊奇"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "U5"){
				if($book_info['number']=="难以置信"){	
				echo "【".$j."】".$book_info['name']. "<br />";
					$j+=1;
				}
		   }		   
		}
}
if($respStr!="") echo $respStr;
else echo "";
?>