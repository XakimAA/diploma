var listComplited = [];
var listTemp = [];
var listAll = [];
var codestr = "";
var predicate ="";
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
	notification();
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
			toEnd();
		//alert(main);
		var str = $("#ProgramCode");
		str.html(codestr);
	}
}

function notification(){
	switch($("#Change-Language")[0].selectedIndex){
		case 0:
		switch($("#Combobox")[0].selectedIndex){
			default:
			codestr = "";
			main = 'void main() {\n \tsetlocale(LC_ALL, "");\n';
			break;
			case 1:
			codestr = "struct Node\n{\n    int value;\n    Node *next;\n};\n\ntypedef Node *PNode;\n\n";
			main = 'void main() {\n \tsetlocale(LC_ALL, "");\n';
			break;
		}		
		break;
		case 1:
		predicate = "implement main\n\
	open core, console\n\
class predicates\n";
	codestr ="clauses\n";
	main = "\n\
    run() :-\n\
    init(),\n"
		break;
		case 2:
		
		switch($("#Combobox")[0].selectedIndex){
			case 1:
			predicate = "program;\n\
	type\n\
	Node = Record value: Integer;\n    next: ^Node End;\n\
			var\n";
			break;
			case 3:
			predicate = "program;\n\
type\n\
type str = string [11];\n\
var\n";
			break;
			case 4:
			predicate = "program;\n\
	type Data =record  \n\
	day : integer;\n\
	mes : integer;\n\
	god : integer;\n\
	end;\n\
			var\n";
			default:
			predicate = "program;\n var\n";
			
			break;
		}	
		codestr = "";
		main = "Begin\n";
		break;
	}

}

function toEnd(){
	switch($("#Change-Language")[0].selectedIndex){
		case 0:
		switch($("#Combobox")[0].selectedIndex){
			case 3,4:
			codestr += main + "\tfclose();\n"+"\t _getch();\n}";
			break;
			default:
			codestr += main + "\t _getch();\n}";
		}
		break;
		case 1:
		main += '\
    !,\n\
    nl,\n\
    _ = readline().\n\
    run() :-\n\
        console::write("Fail").\n\
end implement main\n';
		codestr =predicate + codestr + main;
		break;
		case 2:
		main += "END.\n"
		codestr =predicate + codestr + main;
		break;
	}
}

function compliteData(){
	for (var i in listAll){
		if (Object.keys(listAll[i].data).length == 0)
		{
			if(find(listTemp,listAll[i]) == -1)
			listTemp.push(listAll[i]);
			while (listTemp.length != 0 && noerror)
			{
				noerror = addData();
			}
		}
		if (!noerror) return noerror;
	}
	listTemp = [];
	return true;
 }

function addData(){
	tempNode = listTemp[listTemp.length - 1];
	for(var j=0;j<tempNode.inputs.length && noerror;j++){
		if (tempNode.inputs[j].connections.length == 0)
			{
				noerror = false;
				return noerror;
			}
		if (Object.keys(listAll[tempNode.inputs[j].connections[0].node].data).length == 0){
			listTemp.push(listAll[tempNode.inputs[j].connections[0].node]);
		}
		else
			tempNode.data[j]=listAll[tempNode.inputs[j].connections[0].node].data[tempNode.inputs[j].connections[0].output];
	}
}


 function aisle(){
	notError = true;
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
	switch($("#Change-Language")[0].selectedIndex){
		case 0:
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
		break;
		case 1:
			predicate += "    " + tempNode.nameFunction + " : (";
			for (var i in tempNode.dataType)
			{
				if (i != 0) predicate += ", ";
				predicate +=tempNode.dataType[i];
			}
			predicate +=") "+tempNode.functionType +".\n";
			codestr += code(tempNode.describe);
			main += "    " +tempNode.nameFunction + " : (";
			for (var i=0; i<tempNode.inputs.length;i++)
			{
				if (i != 0) main += ", ";
				main += listAll[tempNode.inputs[i].connections[0].node].data[tempNode.inputs[i].connections[0].output].toUpperCase();
			}
			for (var i in tempNode.data)
			{
				main += ", "+ tempNode.data[i].toUpperCase();
			}
			main +="),\n";
		break;
		case 2:
			if (tempNode.controls != 0)
			for (var i in tempNode.data)
			{
				predicate +=tempNode.data[i]  + ":" +  tempNode.dataType[i] + ";\n";
			}
			codestr +=code(tempNode.describe);
			main +="    " +tempNode.nameFunction + "(";
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
		break;
		}
}

function SwitchWithoutInput(tempNode){
    switch(tempNode.nameFunction){
		case 'array_c':
	   //alert("МАСИИИИИИИИИВ");
	    main += "\t" + tempNode.dataType[1] +" "+ tempNode.data[1] + " = N;\n";
		main += "\t" +  tempNode.dataType[0]+" "+tempNode.data[0] + " = new int["+ tempNode.data[1] +"];\n";
		break;
		case 'list_prolog':
		main +="    "+ tempNode.data[0].toUpperCase() + "=[1, 2, 3, 4, 5, 20, 9, 10, 18, 1],\n";
		break;
		case 'string_c':
		main +=  "\t" +  tempNode.dataType[0]+" "+tempNode.data[0] + ' =""'+ ";\n";
		break;
		case 'list_c':
		main += "\t" + tempNode.dataType[0]+" "+tempNode.data[0] + ' = NULL'+ ";\n";
		break;
		case 'textFile_c':
		main += "\t" + tempNode.dataType[0]+" "+tempNode.data[0] + ";\n";
		main += "\tfopen_s(&" + tempNode.data[0] +"," + '"' + tempNode.data[1] + '"'+',"r+")\n';
		break;
		case 'binFile_c':
		main += "\t" + tempNode.dataType[0]+" "+tempNode.data[0] + ";\n";
		main += "\tfopen_s(&" + tempNode.data[0] +"," + '"' + tempNode.data[1] + '"'+',"r+b")\n';
		break;
		case 'list_pascal':
		predicate += tempNode.data[0]+" : " + tempNode.dataType[0] + ";\n";
		main +="    "+ tempNode.data[0]+ ":=nil;\n";
		break;
		case 'array_pascal':
		predicate += tempNode.data[0]+" : " + tempNode.dataType[0] + ";\n";
		predicate += tempNode.data[1]+" : " + tempNode.dataType[1] + ";\n";
		main +="    "+tempNode.dataType[1]+":=N;\n" + "    setlength("+tempNode.data[0]+"," + tempNode.dataType[1] + "+1);\n";
		break;
		case 'string_pascal':
		predicate += tempNode.data[0]+" : " + tempNode.dataType[0] + ";\n";
		main +="    readln("+ tempNode.data[0] + ");\n";
		break;
		case 'textFile_pascal':
		predicate += tempNode.data[0]+" : " + tempNode.dataType[0] + ";\n";
		main +="    assing("+ tempNode.data[0] +",'"+ tempNode.data[1]+ "');\n";
		main+="    reset("+tempNode.data[0] +");\n    readfile(" + tempNode.data[0] +");\n";
		break;
		case 'binFile_pascal':
		predicate += tempNode.data[0]+" : " + tempNode.dataType[0] + ";\n";
		main +="    assing("+ tempNode.data[0] +",'"+ tempNode.data[1]+ "');\n";
		main+="    reset("+tempNode.data[0] +");\n    readfile(" + tempNode.data[0] +");\n";
		break;
	} 
}