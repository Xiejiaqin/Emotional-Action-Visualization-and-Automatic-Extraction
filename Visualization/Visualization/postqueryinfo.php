<?php
$book_info=array("number"=>"","name"=>"");
$respStr="";
$respStr2="";
//$sub=$_POST['math']
header('Content-Type:text/html;charset=GB2312');
function GenBookInfo($Book_arrayString)
{//��һ�������Ϣ����$book_info���飨����������ʱ�䡢������Ϊ����Ԫ�أ�
	global $book_info;
	$book_info['number']=substr($Book_arrayString,0,strpos($Book_arrayString,";"));//ȡ���ַ���substr(Դ�ַ���,��ʼλ��,����λ��)���������ַ�����������ַ���λ��strpos(Դ�ַ���,�������ַ���)���������ַ�����ʼ�ַ���index
	$book_tail=substr($Book_arrayString,strpos($Book_arrayString,";")+1);
	$book_info['name']=substr($book_tail,0,strpos($book_tail,";"));
}


if(isset($_POST['type'])){
	$type=$_POST['type'];
	$file_name="emotion/info.txt";//ָ���ļ�λ��
	$fp=fopen($file_name,'r');//�Զ�ȡ�ķ�ʽ���ļ�
	$emotion=fread($fp,filesize($file_name));
	fclose($fp);
	$book_array=explode("\r\n",$emotion);
	for($i=0,$j=1;$i<count($book_array);$i++)
		{
		   GenBookInfo($book_array[$i]);
		   
		    if($type == "H1"){
				if($book_info['number']=="����"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "H2"){
				if($book_info['number']=="����"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "H3"){
				if($book_info['number']=="����"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "H4"){
				if($book_info['number']=="����"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "H5"){
				if($book_info['number']=="���"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   
		   elseif($type == "S1"){
				if($book_info['number']=="�ѹ�"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "S2"){
				if($book_info['number']=="����"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "S3"){
				if($book_info['number']=="����"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "S4"){
				if($book_info['number']=="��ʹ"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "S5"){
				if($book_info['number']=="ʹ��"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   
		   elseif($type == "A1"){
				if($book_info['number']=="��ŭ"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "A2"){
				if($book_info['number']=="����"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "A3"){
				if($book_info['number']=="����"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "A4"){
				if($book_info['number']=="�ջ�"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "A5"){
				if($book_info['number']=="��ŭ"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }

		   elseif($type == "F1"){
				if($book_info['number']=="����"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "F2"){
				if($book_info['number']=="�־�"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "F3"){
				if($book_info['number']=="�ֻ�"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "F4"){
				if($book_info['number']=="η��"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }

		   elseif($type == "H1"){
				if($book_info['number']=="����"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "H2"){
				if($book_info['number']=="���"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "H3"){
				if($book_info['number']=="���"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "H4"){
				if($book_info['number']=="ʹ��"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "H5"){
				if($book_info['number']=="Թ��"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }	

		   elseif($type == "U1"){
				if($book_info['number']=="����"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "U2"){
				if($book_info['number']=="��"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "U3"){
				if($book_info['number']=="���һ��"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "U4"){
				if($book_info['number']=="����"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }
		   elseif($type == "U5"){
				if($book_info['number']=="��������"){	
				echo "��".$j."��".$book_info['name']. "<br />";
					$j+=1;
				}
		   }		   
		}
}
if($respStr!="") echo $respStr;
else echo "";
?>