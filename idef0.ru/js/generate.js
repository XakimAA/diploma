
//var fso = new ActiveXObject("Scripting.FileSystemObject");
//var a = fso.CreateTextFile("E:\\testfile.txt", true);
//a.WriteLine("This is a test.");

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
		codestr = "";
		main = 'void main() {\n \tsetlocale(LC_ALL, "");\n';
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
	}

}

function toEnd(){
	switch($("#Change-Language")[0].selectedIndex){
		case 0:
		codestr += main + "\t _getch();\n}";
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
	} 
}