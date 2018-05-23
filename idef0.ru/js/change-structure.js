function ChangeStructure(){  
    $('#d3ne').remove();
    $('#removable').html("<div id='d3ne' class='node-editor'></div>");
    switch($("#Combobox")[0].selectedIndex)
    {
        
        case 0:
        alert("зашли в свитч структуры");
        alert("combobox: " + $("#Combobox")[0].selectedIndex);
        alert("change langiage : "+ $("#Change-Language")[0].selectedIndex);
        switch($("#Change-Language")[0].selectedIndex){
            case 0:
            var components = [arrayComp,sumComp,maxComp,minComp, delComp,kolComp,srComp, sortComp];
            var menu = new D3NE.ContextMenu({
                        'Массив' : arrayComp,
                        'Сумма': sumComp,
                        'Максимум': maxComp,
                        'Минимум':minComp,
                        'Удаление': delComp,
                        'Количество': kolComp,
                        'Среднее' : srComp,
                        'Сортировка':sortComp
               });
            var container = document.querySelector('#d3ne');
            var editor = new D3NE.NodeEditor('demo@0.1.0', container, components, menu);
            break;
            case 1:
            var components = [listComp,sumCompProlog,maxCompProlog,minCompProlog, delCompProlog,kolCompProlog,srCompProlog, sortCompProlog];
            var menu = new D3NE.ContextMenu({
                        'Список': listComp, 
                        'Сумма': sumCompProlog,
                        'Максимум': maxCompProlog,
                        'Минимум':minCompProlog,
                        'Удаление': delCompProlog,
                        'Количество': kolCompProlog,
                        'Среднее' : srCompProlog,
                        'Сортировка':sortCompProlog
               });
               var container = document.querySelector('#d3ne');
            var editor = new D3NE.NodeEditor('demo@0.1.0', container, components, menu);
            break;
            }
        break;

        case 1:
            components = [listComp, sumCompList];
            menu = new D3NE.ContextMenu({
                        'Список': listComp, 
                        'Сумма': sumCompList,
            });
            var container = document.querySelector('#d3ne');
            var editor = new D3NE.NodeEditor('demo@0.1.0', container, components, menu);
        break;

        case 2: //строка
        
        break;
        case 3: //Текстовый файл
        break;
        case 4: //Бинарный файл
        break;
        
    }
    
}

function ChangeLanguage(){

    objSel = document.getElementById("Combobox");
    switch($("#Change-Language")[0].selectedIndex)
    {
        case 0:
        objSel.options.length = 0;
        objSel.options[0] = new Option("Массив");
        objSel.options[1] = new Option("Список");
        objSel.options[2] = new Option("Строка");
        objSel.options[3] = new Option("Текстовый файл");
        objSel.options[4] = new Option("Бинарный файл");
        ChangeStructure();
        break;
        case 1:
        objSel.options.length = 0;
        objSel.options[0] = new Option("Список");
        ChangeStructure();
        break;
        case 2: 
        objSel.options.length = 0;
        objSel.options[0] = new Option("Массив");
        objSel.options[1] = new Option("Список");
        objSel.options[2] = new Option("Строка");
        objSel.options[3] = new Option("Текстовый файл");
        objSel.options[4] = new Option("Бинарный файл");
        ChangeStructure();
        break;
    }
}