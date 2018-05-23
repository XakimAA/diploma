function ChangeStructure(){  
    $('#d3ne').remove();
    $('#removable').html("<div id='d3ne' class='node-editor'></div>");
    switch($("#Combobox")[0].selectedIndex)
    {
        case 0:
        var components = [numComp,arrayComp,sumComp,maxComp,minComp, delComp,kolComp,srComp, sortComp];
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
        var container = document.querySelector('#d3ne');
        var editor = new D3NE.NodeEditor('demo@0.1.0', container, components, menu);
        break;

        case 1:
            components = [listComp, sumCompList];
            menu = new D3NE.ContextMenu({
                        'Список': listComp, 
                        'Сумма': sumCompList,
            });
            container = document.querySelector('#d3ne');
            editor = new D3NE.NodeEditor('demo@0.1.0', container, components, menu);
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
    $('#d3ne').remove();
    $('#removable').html("<div id='d3ne' class='node-editor'></div>");

    switch($("#Change-Language")[0].selectedIndex)
    {
        
    }
}