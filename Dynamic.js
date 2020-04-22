var flag = 0;
var allStudent = [];
var studentObj = {name:"",id:"",roll:"",university:""};
var objectProperty = ["name","id","roll","university"];
var holdField = "";
var fieldClass = ["sname","sid","sroll","sversity","b3"];
var placeholder = ["Enter Name...","Enter Id","Enter roll","Enter University name"];

function createDynamicField()
{
    $("#Idb1").hide();
	flag++;
	for(i=1;i<3; i++){
	for(i=0; i<4; i++)
		holdField += '<input class="'+ fieldClass[i] +'" type="text" id = "'+ i +'" placeholder="'+ placeholder[i] +'" value =""  /> </br>';
	
	holdField += '<input class=" '+ fieldClass[i] +' " type="button" id = "'+ i +'" value="Save"  /> </br>';
	
	document.getElementById('createHere').innerHTML = holdField;
	
	
	$('#4').click( function() {
		
	//document.getElementById('printHere').innerHTML = document.getElementById(2).value;
	for(i=0; i<4; i++)
	{studentObj[ objectProperty[i] ] = document.getElementById(i).value;}
	allStudent.push(studentObj);
	//document.getElementById('printHere').innerHTML = allStudent[0].name;
	//document.getElementById('myform').reset();
	
	
	});
	
	}
			
	
}
function searched()
{
	//var searchedId = document.getElementById("tid1").value;
	//document.getElementById("p3").innerHTML = searchedId;
	var allValue = "";
	for(i=0; i<allStudent.length; i++)
	{
		if( document.getElementById("tid1").value == allStudent[i].id)
		{
			for(j=0; j<4; j++)
			{
				//allValue += allStudent[i][ objectProperty[j] ];
				allValue += '<input class="" type="text" id = "" placeholder="" value ="'+ allStudent[i][ objectProperty[j] ] +'" readonly /> </br>'
				
			}
			break;
		}
	}
	document.getElementById("printHere1").innerHTML = allValue;
}