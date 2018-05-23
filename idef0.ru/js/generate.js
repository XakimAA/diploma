
//var fso = new ActiveXObject("Scripting.FileSystemObject");
//var a = fso.CreateTextFile("E:\\testfile.txt", true);
//a.WriteLine("This is a test.");

var listComplited = [];
var listTemp = [];
var listAll = [];
var codestr = "";
var noerror; 
var main;
function find(array, value) {
    if ([].indexOf) {

        var find = function(array, value) {
          return array.indexOf(value);
        }
      
      } else {
        var find = function(array, value) {
          for (var i = 0; i < array.length; i++) {
            if (array[i] === value) return i;
          }
      
          return -1;
        }
      
      }
  
    for (var i = 0; i < array.length; i++) {
      if (array[i] === value) return i;
    }
  
    return -1;
  }

function Generate(){
	listComplited = [];
	listTemp = [];
 	listAll = [];
	//alert( 'Code  generated!' );
	codestr = "";
	main = 'void main() {\n \tsetlocale(LC_ALL, "");\n';
		listAll = editor.toJSON().nodes;
		noerror = true;
		compliteData();
		if (!noerror) 
		{
				codestr = "ошибка в диаграмме";
				//alert("тут ошибка");
		}
		else
		{

	if (!aisle())
		codestr = "ошибка в диаграмме";
	else
		codestr += main + "\t _getch();\n}";
	//alert(main);
	var str = $("#ProgramCode");
	str.html(codestr);
		}
	}

function compliteData(){
	for (var i in listAll){
		if (Object.keys(listAll[i].data).length == 0)
		{
			recursia(listAll[i]);
		}
	}
 }

function recursia(tempNode){
	for(var j=0;j<tempNode.inputs.length && noerror;j++){
		if (tempNode.inputs[j].connections.length == 0)
			{
				noerror = false;
				return;
			}
		if (Object.keys(listAll[tempNode.inputs[j].connections[0].node].data).length == 0){
			recursia(listAll[tempNode.inputs[j].connections[0].node]);
			tempNode.data[j]=listAll[tempNode.inputs[j].connections[0].node].data[tempNode.inputs[j].connections[0].output];
		}
		else
			tempNode.data[j]=listAll[tempNode.inputs[j].connections[0].node].data[tempNode.inputs[j].connections[0].output];
	}
}

function GenerateC()
{
	var codestr = "";
	var main = 'void main() {\n \tsetlocale(LC_ALL, "");\n';
	if (!aisle())
		codestr = "ошибка в диаграмме";
	else
		codestr += main + "\t _getch();\n}";
	//alert(main);
	var str = $("#ProgramCode");
	str.html(codestr);
}



 function aisle(){
	var notError = true;
	for (var i in listAll) 
	{
        //alert("зашли в цикл");
        if(find(listTemp,listAll[i]) == -1 && find(listComplited,listAll[i]) == -1)
        {    
          //alert("зашли в условие");
            listTemp.push(listAll[i]);
            while (listTemp.length != 0 && notError){
				notError = tempNodeWork();
			}
			//alert("в listTemp пусто");
		}
		//alert("значение Not error: " + notError);
		if (!notError) return notError;
	}
	return notError;
}

function tempNodeWork(){
	
    //alert("зашли в функцию");
    var tempNode = listTemp[listTemp.length - 1];
    if (tempNode.inputs.length == 0)
    {
        //alert("в инпуте ниче нет");
        SwitchWithoutInput(tempNode);
		listTemp.splice(listTemp.indexOf(tempNode),1); //удаляю из listTemp
		listComplited.push(tempNode);
	}
	else {
		//alert("в инпуте что-то есть");
		var inputsComplited = true; //все входы ведут к выполненным блокам
		for (var i=0;i<tempNode.inputs.length;i++)
		{
			if (tempNode.inputs[i].connections.length == 0)
			return false;
			for (var j=0;j<tempNode.inputs[i].connections.length;j++)
			{
				if (find(listComplited,
					 listAll[tempNode.inputs[i].connections[j].node]) == -1)
					 {
						inputsComplited = false;
						if (find(listTemp,listAll[tempNode.inputs[i].connections[j].node]) == -1)
						listTemp.push(listAll[tempNode.inputs[i].connections[j].node]);
					 }
			}
		}
		if (inputsComplited)
		{
			//alert("все инпуты определены");
			SwitchFunction(tempNode);
			listTemp.splice(listTemp.indexOf(tempNode),1); //удаляю из listTemp
			listComplited.push(tempNode);
		}
	}
	return true;

}

function SwitchFunction(tempNode){	
	if (tempNode.controls != 0)
	for (var i in tempNode.data)
	{
		main += "\t" + tempNode.dataType[i] + " "
		 + tempNode.data[i] + ";\n";
	}
	main += "\t" + tempNode.nameFunction + "(";
	for (var i=0; i<tempNode.inputs.length;i++)
	{
		if (i != 0) main += ", ";
		main += listAll[tempNode.inputs[i].connections[0].node].data[tempNode.inputs[i].connections[0].output];
	}
	if (tempNode.controls != 0)
	for (var i in tempNode.data)
	{
		main += ", " + tempNode.data[i];
	}
	main += ");\n";
	codestr += code(tempNode.describe);
	
}

function SwitchWithoutInput(tempNode){
    switch(tempNode.title){
		case 'Массив':
	   //alert("МАСИИИИИИИИИВ");
	 	main += "\tint " + tempNode.data[1] + " = N;\n"; 
		main += "\tint *" + tempNode.data[0] + " = new int["+ tempNode.data[1] +"];\n";
			break;
	} 
}