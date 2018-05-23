function ChangeStructure(){  
    $('#d3ne').remove();
    $('#removable').html("<div id='d3ne' class='node-editor'></div>");
    switch($("#Combobox")[0].selectedIndex)
    {
        case 0:
        switch($("#Change-Language").selectedIndex){
            case 0:
            var components = [arrayComp,sumComp,maxComp,minComp, delComp,kolComp,srComp, sortComp];
            var menu = new D3NE.ContextMenu({
                        'Число': numComp, 
                        'Массив' : arrayComp,
                        'Сумма': sumComp,
                        'Максимум': maxComp,
                        'Минимум':minComp,
                        'Удаление': delComp,
                        'Количество': kolComp,
                        'Среднее' : srComp,
                        'Сортировка':sortComp
               });
            break;
            case 1:
            
            break;
            }
        break;

        case 1:
            components = [listComp, sumCompList];
            menu = new D3NE.ContextMenu({
                        'Список': listComp, 
                        'Сумма': sumCompList,
            });
        break;

        case 2: //строка
        
        break;
        case 3: //Текстовый файл
        break;
        case 4: //Бинарный файл
        break;
        
    }
    var container = document.querySelector('#d3ne');
        var editor = new D3NE.NodeEditor('demo@0.1.0', container, components, menu);
}

function ChangeLanguage(){
    $('#d3ne').remove();
    $('#removable').html("<div id='d3ne' class='node-editor'></div>");
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