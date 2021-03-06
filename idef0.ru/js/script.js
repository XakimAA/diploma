function ChangeStructure(){  
    //alert("asdfasdf");
    switch(structure)
    {
        case "0": // массив
        switch(language){
            case "0": //си
            components = [arrayComp,sumComp,maxComp,minComp, delComp,kolComp,srComp, sortComp];
            menu = new D3NE.ContextMenu({
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
            case "1": //пролог
            components = [listCompProlog,sumCompProlog,maxCompProlog,minCompProlog, delCompProlog,kolCompProlog,srCompProlog, sortCompProlog];
            menu = new D3NE.ContextMenu({
                        'Список': listCompProlog, 
                        'Сумма': sumCompProlog,
                        'Максимум': maxCompProlog,
                        'Минимум':minCompProlog,
                        'Удаление': delCompProlog,
                        'Количество': kolCompProlog,
                        'Среднее' : srCompProlog,
                        'Сортировка':sortCompProlog
               });
            break;
            case "2": //паскаль
            components = [arrayCompPascal,sumCompPascalArray,maxCompPascalArray,minCompPascalArray, delCompPascalArray,kolCompPascalArray,srCompPascalArray, sortCompPascalArray];
            menu = new D3NE.ContextMenu({
                        'Массив' : arrayCompPascal,
                        'Сумма': sumCompPascalArray,
                        'Максимум': maxCompPascalArray,
                        'Минимум':minCompPascalArray,
                        'Удаление': delCompPascalArray,
                        'Количество': kolCompPascalArray,
                        'Среднее' : srCompPascalArray,
                        'Сортировка':sortCompPascalArray
               });
            break;
            }
        break;

        case "1": //список
        switch(language){
            case "0": //си
            components = [listComp, sumCompList,maxCompList,minCompList,delCompList,kolCompList,srCompList,sortCompList];
            menu = new D3NE.ContextMenu({
                        'Список': listComp, 
                        'Сумма': sumCompList,
                        'Максимум': maxCompList,
                        'Минимум':minCompList,
                        'Удаление': delCompList,
                        'Количество': kolCompList,
                        'Среднее' : srCompList,
                        'Сортировка':sortCompList
            });
            break;
            case "2": //pascal
            components = [listCompPascal, sumCompPascalList,maxCompPascalList,minCompPascalList,delCompPascalList,kolCompPascalList,srCompPascalList,sortCompPascalList];
            menu = new D3NE.ContextMenu({
                        'Список': listCompPascal, 
                        'Сумма': sumCompPascalList,
                        'Максимум': maxCompPascalList,
                        'Минимум':minCompPascalList,
                        'Удаление': delCompPascalList,
                        'Количество': kolCompPascalList,
                        'Среднее' : srCompPascalList,
                        'Сортировка':sortCompPascalList
            });
            break;
        }
        break;

        case "2": //строка
        switch(language){
            case "0": //си
        components = [stringComp,maxCompString,minCompString,delCompString,sortCompString];
            menu = new D3NE.ContextMenu({
                        'Строка': stringComp, 
                        'Максимум': maxCompString,
                        'Минимум':minCompString,
                        'Удаление': delCompString,
                        'Сортировка':sortCompString
            });
            break;
            case "2"://паскаль
            components = [stringCompPascal,maxCompString,minCompPascalString,delCompPascalString,sortCompPascalString];
            menu = new D3NE.ContextMenu({
                        'Строка': stringCompPascal, 
                        'Максимум': maxCompPascalString,
                        'Минимум':minCompPascalString,
                        'Удаление': delCompPascalString,
                        'Сортировка':sortCompPascalString
            });
            break;
        }
        break;
        case "3": //Текстовый файл
        switch(language){
            case "0": //си
            components = [textFileComp, maxCompTextFile,minCompTextFile,delCompTextFile,sortCompTextFile];
            menu = new D3NE.ContextMenu({
                        'Файл': textFileComp, 
                        'Максимум': maxCompTextFile,
                        'Минимум':minCompTextFile,
                        'Удаление': delCompTextFile,
                        'Сортировка':sortCompTextFile
            });
            break;
            case "2"://паскаль
            components = [textFileCompPascal, maxCompPascalTextFile,minCompPascalTextFile,delCompPascalTextFile,sortCompPascalTextFile];
            menu = new D3NE.ContextMenu({
                        'Файл': textFileCompPascal, 
                        'Максимум': maxCompPascalTextFile,
                        'Минимум':minCompPascalTextFile,
                        'Удаление': delCompPascalTextFile,
                        'Сортировка':sortCompPascalTextFile
            });
            break;
        }
        break;
        case "4": //Бинарный файл
        switch(language){
            case "0": //си
        components = [binFileComp, maxCompBinFile,minCompBinFile,delCompBinFile,sortCompBinFile];
            menu = new D3NE.ContextMenu({
                        'Файл': binFileComp, 
                        'Максимум': maxCompBinFile,
                        'Минимум':minCompBinFile,
                        'Удаление': delCompBinFile,
                        'Сортировка':sortCompBinFile
            });
            break;
            case "2"://паскаль
            components = [binFileCompPascal, maxCompPascalBinFile,minCompPascalBinFile,delCompPascalBinFile,sortCompPascalBinFile];
            menu = new D3NE.ContextMenu({
                        'Файл': binFileCompPascal, 
                        'Максимум': maxCompPascalBinFile,
                        'Минимум':minCompPascalBinFile,
                        'Удаление': delCompPascalBinFile,
                        'Сортировка':sortCompPascalBinFile
            });
            break;
        }
        break;
        
    } 
    //alert("щас будет editor");
    container = document.querySelector('#d3ne');
    editor = new D3NE.NodeEditor('demo@0.1.0', container, components, menu);
}

var numSocket = new D3NE.Socket('number', 'Number value', 'hint');
var arraySocket = new D3NE.Socket('array', 'Array value', 'hint');
var listSocket = new  D3NE.Socket('list', 'List value', 'hint');

var numComp = new D3NE.Component("Число", {
    builder(node) {
       var numberOut = new D3NE.Output("Число", numSocket);
       /*var numControl = new D3NE.Control('<input type="string">',
          (el, c) => {
             el.value = c.getData('0') || "";
          
             function upd() {
                c.putData("0", el.value);
             }
 
             el.addEventListener("input", ()=>{
                upd();
                editor.eventListener.trigger("change");
             });
             el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
            upd();
          }
       );*/
        
       return node
        //.addControl(numControl)
        .addOutput(numberOut);
    },
 });

var arrayComp = new D3NE.Component('Массив',{
    builder(node) {
        node.nameFunction = "array_c";
        node.dataType = {0:"int*" ,1:"int"};
        node.describe = "mas_c_sum";
        var sizeOut = new D3NE.Output('Размерность', numSocket);
        var arrayOut = new D3NE.Output('Массив', arraySocket);
        var sizeControl = new D3NE.Control('<input type="string">',
          (el, c) => {
             el.value = c.getData('1') || "имя размерности";
          
             function upd() {
                c.putData("1", el.value);
             }
 
             el.addEventListener("input", ()=>{
                upd();
                editor.eventListener.trigger("change");
             });
             el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
            upd();
          }
       );
        var arrayControl = new D3NE.Control('<input type="string">',
        (el, c) => {
            el.value = c.getData('0') || "имя массива";
        
            function upd() {
                c.putData("0", el.value);
            }

            el.addEventListener("input", ()=>{
                upd();
                editor.eventListener.trigger("change");
            });
            el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
            upd();
        }
        );
        return node
                .addOutput(arrayOut)
                .addOutput(sizeOut)
                .addControl(arrayControl)
                .addControl(sizeControl);
                
    }});

var listComp = new D3NE.Component('Список',{
    builder(node) {
        node.nameFunction = "list_c";
        node.dataType = {0:"Node*"};
        var listOut = new D3NE.Output('Список', listSocket);
        var arrayControl = new D3NE.Control('<input type="string">',
            (el, c) => {
                el.value = c.getData('0') || "имя списка";
            
                function upd() {
                    c.putData("0", el.value);
                }
    
                el.addEventListener("input", ()=>{
                    upd();
                    editor.eventListener.trigger("change");
                });
                el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
                upd();
            }
        );
        return node
            .addOutput(listOut)
            .addControl(arrayControl);
 }});

 var listCompProlog = new D3NE.Component('Список',{
    builder(node) {
        node.nameFunction = "list_prolog";
        var listOut = new D3NE.Output('Список', listSocket);
        var arrayControl = new D3NE.Control('<input type="string">',
            (el, c) => {
                el.value = c.getData('0') || "имя списка";
            
                function upd() {
                    c.putData("0", el.value);
                }
    
                el.addEventListener("input", ()=>{
                    upd();
                    editor.eventListener.trigger("change");
                });
                el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
                upd();
            }
        );
        return node
            .addOutput(listOut)
            .addControl(arrayControl);
  }});

var sumComp = new D3NE.Component("Сумма", {
    builder(node) {
        node.nameFunction = "sum";
        node.dataType = {0:"int"};
        node.describe = "mas_c_sum";
  var sizeIn = new D3NE.Input("Размерность", numSocket);
  var arrayIn = new D3NE.Input("Массив", arraySocket);
  var resultOut = new D3NE.Output("Результат", numSocket);
  var resultControl = new D3NE.Control('<input type="string">',
        (el, c) => {
            el.value = c.getData('0') || "имя выходного значения";
        
            function upd() {
                c.putData("0", el.value);
            }

            el.addEventListener("input", ()=>{
                upd();  
                editor.eventListener.trigger("change");
            });
            el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
            upd();
        }
    );

  return node
    .addInput(arrayIn)   
    .addInput(sizeIn)
     .addControl(resultControl)
     .addOutput(resultOut);
    }}); 

var sumCompProlog = new D3NE.Component("Сумма", {
    builder(node) {
        node.nameFunction = "sum";
        node.dataType = {0:"integer*", 1:"integer [out]"}
        node.describe = "list_prolog_sum";
        node.functionType = "determ";
  var listIn = new D3NE.Input("Список", listSocket);
  var resultOut = new D3NE.Output("Результат", numSocket);
  var resultControl = new D3NE.Control('<input type="string">',
        (el, c) => {
            el.value = c.getData('0') || "имя_выходного_значения";
        
            function upd() {
                c.putData("0", el.value);
            }

            el.addEventListener("input", ()=>{
                upd();
                editor.eventListener.trigger("change");
            });
            el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
            upd();
        }
    );
  return node
    .addInput(listIn)   
     .addControl(resultControl)
     .addOutput(resultOut);
    }}); 


var maxComp = new D3NE.Component("Максимум", {
    builder(node) {
        node.nameFunction = "max";
        node.dataType = {0:"int"};
        node.describe = "mas_c_max";
      var sizeIn = new D3NE.Input("Размерность", numSocket);
      var arrayIn = new D3NE.Input("Массив", arraySocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(arrayIn)   
      .addInput(sizeIn)
         .addOutput(resultOut)
         .addControl(resultControl);
    }}); 

var maxCompProlog = new D3NE.Component("Максимум", {
    builder(node) {
        node.nameFunction = "max";
        node.dataType = {0:"integer",1:"integer [out]"};
        node.describe = "list_prolog_max";
        node.functionType = "nondeterm";
      var listIn = new D3NE.Input("Список", listSocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(listIn) 
         .addOutput(resultOut)
         .addControl(resultControl);
    }}); 

var minComp = new D3NE.Component("Минимум", {
    builder(node) {
        node.nameFunction = "min";
        node.dataType = {0:"int"};
        node.describe = "mas_c_min";
      var sizeIn = new D3NE.Input("Размерность", numSocket);
      var arrayIn = new D3NE.Input("Массив", arraySocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(arrayIn)   
      .addInput(sizeIn)
         .addOutput(resultOut)
         .addControl(resultControl);
    }});     

var minCompProlog = new D3NE.Component("Минимум", {
    builder(node) {
        node.nameFunction = "min";
        node.dataType = {0:"integer",1:"integer [out]"};
        node.describe = "list_prolog_min";
        node.functionType = "nondeterm";
        
      var listIn = new D3NE.Input("Список", listSocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(listIn) 
         .addOutput(resultOut)
         .addControl(resultControl);
    }}); 
var delComp = new D3NE.Component("Удаление", {  
    builder(node) {
        node.nameFunction = "del";
        node.dataType = {0:"int*", 1:"int"};
        node.describe = "mas_c_del";
      var sizeIn = new D3NE.Input("Размерность", numSocket);
      var arrayIn = new D3NE.Input("Массив", arraySocket);
      var elementIn = new D3NE.Input("Удаляемый элемент", numSocket);
      var sizeOut = new D3NE.Output("Новая размерность", numSocket);
      var arrayOut = new D3NE.Output("Новый массив", arraySocket);

      var sizeControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('1') || "имя новой размерности";
      
         function upd() {
            c.putData("1", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );

   var arrayControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя нового массива";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );

      return node
      .addInput(arrayIn)   
      .addInput(sizeIn)
         .addInput(elementIn)
         .addOutput(arrayOut)
         .addOutput(sizeOut)
         .addControl(arrayControl)
         .addControl(sizeControl)
         ;
    }});     

var delCompProlog = new D3NE.Component("Удаление", {
    builder(node) {
        node.nameFunction = "del";
        node.dataType = {0:"integer*", 1:"integer",2:"integer* [out]"};
        node.describe = "list_prolog_del";
        node.functionType = "determ";
      var listIn = new D3NE.Input("Список", listSocket);
      var elementIn = new D3NE.Input("Удаляемый элемент", numSocket);
      var resultOut = new D3NE.Output("Новый список", listSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя нового списка";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(listIn) 
      .addInput(elementIn) 
         .addOutput(resultOut)
         .addControl(resultControl);
    }}); 

var kolComp = new D3NE.Component("Количество", {
    builder(node) {
        node.nameFunction = "kol";
        node.dataType = {0:"int"};
        node.describe = "mas_c_kol";
      var sizeIn = new D3NE.Input("Размерность", numSocket);
      var arrayIn = new D3NE.Input("Массив", arraySocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(arrayIn)   
      .addInput(sizeIn)
         .addOutput(resultOut)
         .addControl(resultControl);
    }});

var kolCompProlog = new D3NE.Component("Количество", {
    builder(node) {
        node.nameFunction = "kol";
        node.dataType = {0:"integer",1:"integer* [out]"};
        node.describe = "list_prolog_kol";
        node.functionType = "nondeterm";
      var listIn = new D3NE.Input("Список", listSocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(listIn) 
         .addOutput(resultOut)
         .addControl(resultControl);
    }});

var srComp = new D3NE.Component("Среднее", {
    builder(node) {
        node.nameFunction = "sra";
        node.dataType = {0:"int"};
        node.describe = "mas_c_sr";
      var sumIn = new D3NE.Input("Сумма", numSocket);
      var kolIn = new D3NE.Input("Количество", numSocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(sumIn)
      .addInput(kolIn)   
      .addOutput(resultOut)
      .addControl(resultControl);
    }});

var srCompProlog = new D3NE.Component("Среднее", {
    builder(node) {
        node.nameFunction = "sra";
        node.dataType = {0:"integer",1:"integer [out]"};
        node.describe = "list_prolog_sr";
        node.functionType = "nondeterm";
      var sumIn = new D3NE.Input("Сумма", numSocket);
      var kolIn = new D3NE.Input("Количество", numSocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(sumIn) 
      .addInput(kolIn) 
         .addOutput(resultOut)
         .addControl(resultControl);
    }});

var sortComp = new D3NE.Component("Сортировка", {
    builder(node) {
        node.nameFunction = "bubbleSort";
        node.describe = "mas_c_sort";
      var sizeIn = new D3NE.Input("Размерность", numSocket);
      var arrayIn = new D3NE.Input("Массив", arraySocket);
      var sizeOut = new D3NE.Output("Размерность", numSocket);
      var arrayOut = new D3NE.Output("Массив", arraySocket);
      function upd() {
          var inputmas = node.toJSON().inputs[0].connections[0];
          var inputsize = node.toJSON().inputs[1].connections[0];
          var nodes = editor.toJSON().nodes;
        node.data[0] = nodes[inputmas.node].data[inputmas.output];
        node.data[1] = nodes[inputsize.node].data[inputsize.output];
     }  
      return node
      .addInput(arrayIn)   
      .addInput(sizeIn)
      .addOutput(arrayOut)   
      .addOutput(sizeOut);
    }});

var sortCompProlog = new D3NE.Component("Сортировка", {
    builder(node) {
        node.nameFunction = "bubbleSort";
        node.describe = "list_prolog_sort";
        node.dataType = {0:"integer*",1:"integer* [out]"};
        node.functionType = "determ";
      var listIn = new D3NE.Input("Список", listSocket);
      var listOut = new D3NE.Output("Cписок", listSocket); 
      return node
      .addInput(listIn)   
      .addOutput(listOut);
    }});




var sumCompList = new D3NE.Component("Сумма", {
    builder(node) {
        node.nameFunction = "sum";
        node.dataType = {0:"int"};
        node.describe = "list_c_sum";
      var listIn = new D3NE.Input("Список", listSocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
            (el, c) => {
                el.value = c.getData('0') || "имя выходного значения";
            
                function upd() {
                    c.putData("0", el.value);
                }
    
                el.addEventListener("input", ()=>{
                    upd();
                    editor.eventListener.trigger("change");
                });
                el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
                upd();
            }
        );
    
      return node
         .addInput(listIn)   
         .addControl(resultControl)
         .addOutput(resultOut);
    } 
    });

var maxCompList = new D3NE.Component("Максимум", {
    builder(node) {
        node.nameFunction = "max";
        node.dataType = {0:"int"};
        node.describe = "list_c_max";
      var listIn = new D3NE.Input("Список", listSocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(listIn)   
         .addOutput(resultOut)
         .addControl(resultControl);
    }}); 

var minCompList = new D3NE.Component("Минимум", {
    builder(node) {
        node.nameFunction = "min";
        node.dataType = {0:"int"};
        node.describe = "list_c_min";
      var listIn = new D3NE.Input("Список", listSocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(listIn)   
         .addOutput(resultOut)
         .addControl(resultControl);
    }});

var delCompList = new D3NE.Component("Удаление", {  
    builder(node) {
        node.nameFunction = "del";
        node.dataType = {0:"PNode*"};
        node.describe = "list_c_del";
      var listIn = new D3NE.Input("Список", listSocket);
      var elementIn = new D3NE.Input("Удаляемый элемент", numSocket);;
      var listOut = new D3NE.Output("Новый список", listSocket);

   var listControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя нового списка";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );

      return node
      .addInput(listIn)   
         .addInput(elementIn)
         .addOutput(listOut)
         .addControl(listControl)
         ;
    }});   

var kolCompList = new D3NE.Component("Количество", {
    builder(node) {
        node.nameFunction = "kol";
        node.dataType = {0:"int"};
        node.describe = "list_c_kol";
      var listIn = new D3NE.Input("Список", listSocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(listIn)   
         .addOutput(resultOut)
         .addControl(resultControl);
    }});

var srCompList = new D3NE.Component("Среднее", {
    builder(node) {
        node.nameFunction = "sra";
        node.dataType = {0:"int"};
        node.describe = "list_c_sr";
      var sumIn = new D3NE.Input("Сумма", numSocket);
      var kolIn = new D3NE.Input("Количество", numSocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(sumIn)
      .addInput(kolIn)   
      .addOutput(resultOut)
      .addControl(resultControl);
    }});


var sortCompList = new D3NE.Component("Сортировка", {
        builder(node) {
            node.nameFunction = "sort";
            node.describe = "list_c_sort";
          var listIn = new D3NE.Input("Список", listSocket);
          var listOut = new D3NE.Output("Отсортированный список", listSocket);

          return node
          .addInput(listIn)  
          .addOutput(listOut)  
        }});

var stringComp = new D3NE.Component('Строка',{
    builder(node) {
        node.nameFunction = "string_c";
        node.dataType = {0:"char*"};
        var stringOut = new D3NE.Output('Строка', arraySocket);
        var stringControl = new D3NE.Control('<input type="string">',
            (el, c) => {
                el.value = c.getData('0') || "имя строки";
            
                function upd() {
                    c.putData("0", el.value);
                }
    
                el.addEventListener("input", ()=>{
                    upd();
                    editor.eventListener.trigger("change");
                });
                el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
                upd();
            }
        );
        return node
            .addOutput(stringOut)
            .addControl(stringControl);
  }});

var maxCompString = new D3NE.Component("Максимум", {
    builder(node) {
        node.nameFunction = "max";
        node.dataType = {0:"char"};
        node.describe = "string_c_max";
      var stringIn = new D3NE.Input("Строка", arraySocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(stringIn)   
         .addOutput(resultOut)
         .addControl(resultControl);
    }}); 

var minCompString = new D3NE.Component("Минимум", {
    builder(node) {
        node.nameFunction = "min";
        node.dataType = {0:"char"};
        node.describe = "string_c_min";
      var stringIn = new D3NE.Input("Строка", arraySocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(stringIn)   
         .addOutput(resultOut)
         .addControl(resultControl);
    }}); 

var delCompString = new D3NE.Component("Удаление", {  
    builder(node) {
        node.nameFunction = "del";
        node.dataType = {0:"char*"};
        node.describe = "string_c_del";
      var stringIn = new D3NE.Input("Строка", arraySocket);
      var elementIn = new D3NE.Input("Удаляемый элемент", numSocket);
      var stringOut = new D3NE.Output("Строка", arraySocket);
      return node
      .addInput(stringIn)   
         .addInput(elementIn)
         .addOutput(stringOut)
         ;
    }});  

var sortCompString = new D3NE.Component("Сортировка", {
    builder(node) {
        node.nameFunction = "sort";
        node.describe = "string_c_sort";
      var stringIn = new D3NE.Input("Строка", arraySocket);
      var stringOut = new D3NE.Output("Строка", arraySocket);
      return node
      .addInput(stringIn)   
      .addOutput(stringOut)  
    }});

var textFileComp = new D3NE.Component('Текстовый файл',{
    builder(node) {
        node.nameFunction = "textFile_c";
        node.dataType = {0:"FILE*" ,1:"char* "};
        var fileOut = new D3NE.Output('Имя файла', arraySocket);
        var fileControl = new D3NE.Control('<input type="string">',
          (el, c) => {
             el.value = c.getData('0') || "имя файла";
          
             function upd() {
                c.putData("0", el.value);
             }
 
             el.addEventListener("input", ()=>{
                upd();
                editor.eventListener.trigger("change");
             });
             el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
            upd();
          }
       );
        var pathControl = new D3NE.Control('<input type="string">',
        (el, c) => {
            el.value = c.getData('1') || "путь файла";
        
            function upd() {
                c.putData("1", el.value);
            }

            el.addEventListener("input", ()=>{
                upd();
                editor.eventListener.trigger("change");
            });
            el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
            upd();
        }
        );
        return node
                .addOutput(fileOut)
                .addControl(pathControl)
                .addControl(fileControl);
                
    }});

var maxCompTextFile = new D3NE.Component("Максимум", {
    builder(node) {
        node.nameFunction = "max";
        node.dataType = {0:"int"};
        node.describe = "textfile_c_max";
      var fileIn = new D3NE.Input("Файл", arraySocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(fileIn)   
         .addOutput(resultOut)
         .addControl(resultControl);
    }}); 

var minCompTextFile = new D3NE.Component("Минимум", {
    builder(node) {
        node.nameFunction = "min";
        node.dataType = {0:"int"};
        node.describe = "textfile_c_min";
      var fileIn = new D3NE.Input("Файл", arraySocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(fileIn)   
         .addOutput(resultOut)
         .addControl(resultControl);
    }}); 

var delCompTextFile = new D3NE.Component("Удаление", {  
    builder(node) {
        node.nameFunction = "del";
        node.dataType = {0:"char"};
        node.describe = "textfile_c_del";
      var arrayIn = new D3NE.Input("Файл", arraySocket);
      var elementIn = new D3NE.Input("Удаляемый элемент", numSocket);
      var arrayOut = new D3NE.Output("Файл", arraySocket);

      return node
      .addInput(arrayIn)   
         .addInput(elementIn)
         .addOutput(arrayOut)
         ;
    }});     

var sortCompTextFile = new D3NE.Component("Сортировка", {
    builder(node) {
        node.nameFunction = "sort";
        node.dataType = {0:"int ", 1:"int"};
        node.describe = "textfile_c_sort";
      var fileIn = new D3NE.Input("Файл", arraySocket);
      var fileOut = new D3NE.Output("Файл", arraySocket);

      return node
      .addInput(fileIn)   
      .addOutput(fileOut) 
      ;
    }});

var binFileComp = new D3NE.Component('Бинарный файл',{
    builder(node) {
        node.nameFunction = "binFile_c";
        node.dataType = {0:"FILE*" ,1:"char* ", 2: "int"};
        var fileOut = new D3NE.Output('Файл', arraySocket);
        var sizeOut = new D3NE.Output('Число записей', numSocket);
        var fileControl = new D3NE.Control('<input type="string">',
          (el, c) => {
             el.value = c.getData('0') || "имя файла";
          
             function upd() {
                c.putData("0", el.value);
             }
 
             el.addEventListener("input", ()=>{
                upd();
                editor.eventListener.trigger("change");
             });
             el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
            upd();
          }
       );

        var pathControl = new D3NE.Control('<input type="string">',
        (el, c) => {
            el.value = c.getData('2') || "путь файла";
        
            function upd() {
                c.putData("2", el.value);
            }

            el.addEventListener("input", ()=>{
                upd();
                editor.eventListener.trigger("change");
            });
            el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
            upd();
        }
        );
        var sizeControl = new D3NE.Control('<input type="string">',
        (el, c) => {
           el.value = c.getData('1') || "имя числа записей";
        
           function upd() {
              c.putData("1", el.value);
           }
  
           el.addEventListener("input", ()=>{
              upd();
              editor.eventListener.trigger("change");
           });
           el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
          upd();
        }
     );
        return node
                .addOutput(fileOut)
                .addOutput(sizeOut)
                .addControl(fileControl)
                .addControl(sizeControl)
                .addControl(pathControl)
                ;
                
    }});

var maxCompBinFile = new D3NE.Component("Максимум", {
    builder(node) {
        node.nameFunction = "max";
        node.dataType = {0:"int"};
        node.describe = "binfile_c_max";
      var fileIn = new D3NE.Input("Файл", arraySocket);
      var sizeIn = new D3NE.Input("Число записей", numSocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(fileIn)   
      .addInput(sizeIn)   
         .addOutput(resultOut)
         .addControl(resultControl);
    }}); 

var minCompBinFile = new D3NE.Component("Минимум", {
    builder(node) {
        node.nameFunction = "min";
        node.dataType = {0:"int"};
        node.describe = "binfile_c_min";
      var fileIn = new D3NE.Input("Файл", arraySocket);
      var sizeIn = new D3NE.Input("Число записей", numSocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(fileIn)   
      .addInput(sizeIn)   
         .addOutput(resultOut)
         .addOutput(resultOut)
         .addControl(resultControl);
    }}); 

var delCompBinFile = new D3NE.Component("Удаление", {  
    builder(node) {
        node.nameFunction = "del";
        node.dataType = {0:"int"};
        node.describe = "binfile_c_del";
      var fileIn = new D3NE.Input("Файл", arraySocket);
      var sizeIn = new D3NE.Input("Число записей", numSocket);
      var elementIn = new D3NE.Input("Удаляемый элемент", numSocket);
      var fileOut = new D3NE.Output("Файл", arraySocket);
      var sizeOut = new D3NE.Output("Число записей", numSocket);
      return node
      .addInput(fileIn)   
      .addInput(sizeIn)
         .addInput(elementIn)
         .addOutput(fileOut)
         .addOutput(sizeOut)
         ;
    }});     

var sortCompBinFile = new D3NE.Component("Сортировка", {
    builder(node) {
        node.nameFunction = "sort";
        node.dataType = {0:"int ", 1:"int"};
        node.describe = "textfile_c_sort";
        var fileIn = new D3NE.Input("Файл", arraySocket);
        var sizeIn = new D3NE.Input("Число записей", numSocket);
        var fileOut = new D3NE.Output("Файл", arraySocket);
        var sizeOut = new D3NE.Output("Число записей", numSocket);

      return node
      .addInput(fileIn)   
      .addInput(sizeIn)   
      .addOutput(fileOut) 
      .addOutput(sizeOut) 
      ;
    }});

var arrayCompPascal = new D3NE.Component('Массив',{
    builder(node) {
        node.nameFunction = "array_pascal";
        node.dataType = {0:"array of integer" ,1:"integer"};
        var sizeOut = new D3NE.Output('Размерность', numSocket);
        var arrayOut = new D3NE.Output('Массив', arraySocket);
        var sizeControl = new D3NE.Control('<input type="string">',
          (el, c) => {
             el.value = c.getData('1') || "имя размерности";
          
             function upd() {
                c.putData("1", el.value);
             }
 
             el.addEventListener("input", ()=>{
                upd();
                editor.eventListener.trigger("change");
             });
             el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
            upd();
          }
       );
        var arrayControl = new D3NE.Control('<input type="string">',
        (el, c) => {
            el.value = c.getData('0') || "имя массива";
        
            function upd() {
                c.putData("0", el.value);
            }

            el.addEventListener("input", ()=>{
                upd();
                editor.eventListener.trigger("change");
            });
            el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
            upd();
        }
        );
        return node
                .addOutput(arrayOut)
                .addOutput(sizeOut)
                .addControl(arrayControl)
                .addControl(sizeControl);
                
    }});

var maxCompPascalArray = new D3NE.Component("Максимум", {
    builder(node) {
        node.nameFunction = "max";
        node.dataType = {0:"integer"};
        node.describe = "mas_pascal_max";
      var sizeIn = new D3NE.Input("Размерность", numSocket);
      var arrayIn = new D3NE.Input("Массив", arraySocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(arrayIn)   
      .addInput(sizeIn)
         .addOutput(resultOut)
         .addControl(resultControl);
    }}); 

var minCompPascalArray = new D3NE.Component("Минимум", {
    builder(node) {
        node.nameFunction = "min";
        node.dataType = {0:"integer"};
        node.describe = "mas_pascal_min";
      var sizeIn = new D3NE.Input("Размерность", numSocket);
      var arrayIn = new D3NE.Input("Массив", arraySocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(arrayIn)   
      .addInput(sizeIn)
         .addOutput(resultOut)
         .addControl(resultControl);
    }}); 

var sumCompPascalArray = new D3NE.Component("Сумма", {
    builder(node) {
        node.nameFunction = "sum";
        node.dataType = {0:"integer"};
        node.describe = "mas_pascal_sum";
  var sizeIn = new D3NE.Input("Размерность", numSocket);
  var arrayIn = new D3NE.Input("Массив", arraySocket);
  var resultOut = new D3NE.Output("Результат", numSocket);
  var resultControl = new D3NE.Control('<input type="string">',
        (el, c) => {
            el.value = c.getData('0') || "имя выходного значения";
        
            function upd() {
                c.putData("0", el.value);
            }

            el.addEventListener("input", ()=>{
                upd();  
                editor.eventListener.trigger("change");
            });
     el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(arrayIn)   
      .addInput(sizeIn)
         .addOutput(resultOut)
         .addControl(resultControl);
    }}); 

var delCompPascalArray = new D3NE.Component("Удаление", {  
    builder(node) {
        node.nameFunction = "del";
        node.dataType = {0:"array of integer", 1:"integer"};
        node.describe = "mas_pascal_del";
      var sizeIn = new D3NE.Input("Размерность", numSocket);
      var arrayIn = new D3NE.Input("Массив", arraySocket);
      var elementIn = new D3NE.Input("Удаляемый элемент", numSocket);
      var sizeOut = new D3NE.Output("Новая размерность", numSocket);
      var arrayOut = new D3NE.Output("Новый массив", arraySocket);

      var sizeControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('1') || "имя новой размерности";
      
         function upd() {
            c.putData("1", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );

   var arrayControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя нового массива";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );

      return node
      .addInput(arrayIn)   
      .addInput(sizeIn)
         .addInput(elementIn)
         .addOutput(arrayOut)
         .addOutput(sizeOut)
         .addControl(arrayControl)
         .addControl(sizeControl)
         ;
    }});     

var kolCompPascalArray = new D3NE.Component("Количество", {
    builder(node) {
        node.nameFunction = "kol";
        node.dataType = {0:"integer"};
        node.describe = "mas_pascal_kol";
      var sizeIn = new D3NE.Input("Размерность", numSocket);
      var arrayIn = new D3NE.Input("Массив", arraySocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(arrayIn)   
      .addInput(sizeIn)
         .addOutput(resultOut)
         .addControl(resultControl);
    }});
	
var srCompPascalArray = new D3NE.Component("Среднее", {
    builder(node) {
        node.nameFunction = "sra";
        node.dataType = {0:"real"};
        node.describe = "mas_pascal_sr";
      var sumIn = new D3NE.Input("Сумма", numSocket);
      var kolIn = new D3NE.Input("Количество", numSocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(sumIn)
      .addInput(kolIn)   
      .addOutput(resultOut)
      .addControl(resultControl);
    }});

var sortCompPascalArray = new D3NE.Component("Сортировка", {
    builder(node) {
        node.nameFunction = "sort";
        node.describe = "mas_pascal_sort";
      var sizeIn = new D3NE.Input("Размерность", numSocket);
      var arrayIn = new D3NE.Input("Массив", arraySocket);
      var sizeOut = new D3NE.Output("Размерность", numSocket);
      var arrayOut = new D3NE.Output("Массив", arraySocket);

      return node
      .addInput(arrayIn)   
      .addInput(sizeIn)
      .addOutput(arrayOut)   
      .addOutput(sizeOut);
    }});
    

var listCompPascal = new D3NE.Component('Список',{
    builder(node) {
        node.nameFunction = "list_Pascal";
        node.dataType = {0:"int"};
        var listOut = new D3NE.Output('Список', listSocket);
        var arrayControl = new D3NE.Control('<input type="string">',
            (el, c) => {
                el.value = c.getData('0') || "имя списка";
            
                function upd() {
                    c.putData("0", el.value);
                }
    
                el.addEventListener("input", ()=>{
                    upd();
                    editor.eventListener.trigger("change");
                });
                el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
                upd();
            }
        );
        return node
            .addOutput(listOut)
            .addControl(arrayControl);
 }});

var sumCompPascalList = new D3NE.Component("Сумма", {
    builder(node) {
        node.nameFunction = "sum";
        node.dataType = {0:"integer"};
        node.describe = "list_pascal_sum";
  var arrayIn = new D3NE.Input("Список", listSocket);
  var resultOut = new D3NE.Output("Результат", numSocket);
  var resultControl = new D3NE.Control('<input type="string">',
        (el, c) => {
            el.value = c.getData('0') || "имя выходного значения";
        
            function upd() {
                c.putData("0", el.value);
            }

            el.addEventListener("input", ()=>{
                upd();  
                editor.eventListener.trigger("change");
            });
            el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
            upd();
        }
    );
    return node
    .addInput(arrayIn) 
     .addControl(resultControl)
     .addOutput(resultOut);
    }}); 

var maxCompPascalList = new D3NE.Component("Максимум", {
    builder(node) {
        node.nameFunction = "max";
        node.dataType = {0:"integer"};
        node.describe = "list_pascal_max";
      var arrayIn = new D3NE.Input("Список", listSocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(arrayIn)   
         .addOutput(resultOut)
         .addControl(resultControl);
    }}); 

var minCompPascalList = new D3NE.Component("Минимум", {
    builder(node) {
        node.nameFunction = "min";
        node.dataType = {0:"integer"};
        node.describe = "list_pascal_min";
      var arrayIn = new D3NE.Input("Список", listSocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(arrayIn)  
         .addOutput(resultOut)
         .addControl(resultControl);
    }});     



var delCompPascalList = new D3NE.Component("Удаление", {  
    builder(node) {
        node.nameFunction = "del";
        node.describe = "list_pascal_del";
      var arrayIn = new D3NE.Input("Список", listSocket);
      var elementIn = new D3NE.Input("Удаляемый элемент", numSocket);
      var arrayOut = new D3NE.Output("Cписок", listSocket);

      return node
      .addInput(arrayIn)   
         .addInput(elementIn)
         .addOutput(arrayOut)
         ;
    }});     

var kolCompPascalList = new D3NE.Component("Количество", {
    builder(node) {
        node.nameFunction = "kol";
        node.dataType = {0:"integer"};
        node.describe = "list_pascal_kol";
      var arrayIn = new D3NE.Input("Список", listSocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(arrayIn)   
         .addOutput(resultOut)
         .addControl(resultControl);
    }});

var srCompPascalList = new D3NE.Component("Среднее", {
    builder(node) {
        node.nameFunction = "sra";
        node.dataType = {0:"real"};
        node.describe = "list_pascal_sr";
      var sumIn = new D3NE.Input("Сумма", numSocket);
      var kolIn = new D3NE.Input("Количество", numSocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(sumIn)
      .addInput(kolIn)   
      .addOutput(resultOut)
      .addControl(resultControl);
    }});

var sortCompPascalList = new D3NE.Component("Сортировка", {
    builder(node) {
        node.nameFunction = "sort";
        node.describe = "list_pascal_sort";
      var arrayIn = new D3NE.Input("Список", listSocket);
      var arrayOut = new D3NE.Output("Список", listSocket);
      function upd() {
          var inputmas = node.toJSON().inputs[0].connections[0];
          var inputsize = node.toJSON().inputs[1].connections[0];
          var nodes = editor.toJSON().nodes;
        node.data[0] = nodes[inputmas.node].data[inputmas.output];
        node.data[1] = nodes[inputsize.node].data[inputsize.output];
     }  
      return node
      .addInput(arrayIn)  
      .addOutput(arrayOut)   
    }});

var stringCompPascal = new D3NE.Component('Строка',{
    builder(node) {
        node.nameFunction = "string_pascal";
        node.dataType = {0:"string"};
        var stringOut = new D3NE.Output('Строка', arraySocket);
        var stringControl = new D3NE.Control('<input type="string">',
            (el, c) => {
                el.value = c.getData('0') || "имя строки";
            
                function upd() {
                    c.putData("0", el.value);
                }
    
                el.addEventListener("input", ()=>{
                    upd();
                    editor.eventListener.trigger("change");
                });
                el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
                upd();
            }
        );
        return node
            .addOutput(stringOut)
            .addControl(stringControl);
  }});

var maxCompPascalString = new D3NE.Component("Максимум", {
    builder(node) {
        node.nameFunction = "max";
        node.dataType = {0:"char"};
        node.describe = "string_pascal_max";
      var stringIn = new D3NE.Input("Строка", arraySocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(stringIn)   
         .addOutput(resultOut)
         .addControl(resultControl);
    }}); 

var minCompPascalString = new D3NE.Component("Минимум", {
    builder(node) {
        node.nameFunction = "min";
        node.dataType = {0:"char"};
        node.describe = "string_pascal_min";
      var stringIn = new D3NE.Input("Строка", arraySocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(stringIn)   
         .addOutput(resultOut)
         .addControl(resultControl);
    }}); 

var delCompPascalString = new D3NE.Component("Удаление", {  
    builder(node) {
        node.nameFunction = "del";
        node.describe = "string_pascal_del";
      var stringIn = new D3NE.Input("Строка", arraySocket);
      var elementIn = new D3NE.Input("Удаляемый элемент", numSocket);
      var stringOut = new D3NE.Output("Строка", arraySocket);
      return node
      .addInput(stringIn)   
         .addInput(elementIn)
         .addOutput(stringOut)
         ;
    }});  

var sortCompPascalString = new D3NE.Component("Сортировка", {
    builder(node) {
        node.nameFunction = "sort";
        node.describe = "string_pascal_sort";
      var stringIn = new D3NE.Input("Строка", arraySocket);
      var stringOut = new D3NE.Output("Строка", arraySocket);
      return node
      .addInput(stringIn)   
      .addOutput(stringOut)  
    }});

var textFileCompPascal = new D3NE.Component('Типизированный файл',{
    builder(node) {
        node.nameFunction = "textFile_pascal";
        node.dataType = {0:"file of char" ,1:"char* "};
        var fileOut = new D3NE.Output('Имя файла', arraySocket);
        var fileControl = new D3NE.Control('<input type="string">',
          (el, c) => {
             el.value = c.getData('0') || "имя файла";
          
             function upd() {
                c.putData("0", el.value);
             }
 
             el.addEventListener("input", ()=>{
                upd();
                editor.eventListener.trigger("change");
             });
             el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
            upd();
          }
       );
        var pathControl = new D3NE.Control('<input type="string">',
        (el, c) => {
            el.value = c.getData('1') || "путь файла";
        
            function upd() {
                c.putData("1", el.value);
            }

            el.addEventListener("input", ()=>{
                upd();
                editor.eventListener.trigger("change");
            });
            el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
            upd();
        }
        );
        return node
                .addOutput(fileOut)
                .addControl(pathControl)
                .addControl(fileControl);
                
    }});

var maxCompPascalTextFile = new D3NE.Component("Максимум", {
    builder(node) {
        node.nameFunction = "max";
        node.dataType = {0:"chat"};
        node.describe = "textfile_pascal_max";
      var fileIn = new D3NE.Input("Файл", arraySocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(fileIn)   
         .addOutput(resultOut)
         .addControl(resultControl);
    }}); 

var minCompPascalTextFile = new D3NE.Component("Минимум", {
    builder(node) {
        node.nameFunction = "min";
        node.dataType = {0:"char"};
        node.describe = "textfile_pascal_min";
      var fileIn = new D3NE.Input("Файл", arraySocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(fileIn)   
         .addOutput(resultOut)
         .addControl(resultControl);
    }}); 

var delCompPascalTextFile = new D3NE.Component("Удаление", {  
    builder(node) {
        node.nameFunction = "del";
        node.dataType = {0:"char"};
        node.describe = "textfile_pascal_del";
      var arrayIn = new D3NE.Input("Файл", arraySocket);
      var elementIn = new D3NE.Input("Удаляемый элемент", numSocket);
      var arrayOut = new D3NE.Output("Файл", arraySocket);

      return node
      .addInput(arrayIn)   
         .addInput(elementIn)
         .addOutput(arrayOut)
         ;
    }});     

var sortCompPascalTextFile = new D3NE.Component("Сортировка", {
    builder(node) {
        node.nameFunction = "sort";
        node.describe = "textfile_pascal_sort";
      var fileIn = new D3NE.Input("Файл", arraySocket);
      var fileOut = new D3NE.Output("Файл", arraySocket);
      return node
      .addInput(fileIn)   
      .addOutput(fileOut) 
      ;
    }});

var binFileCompPascal = new D3NE.Component('Нетипизированный файл',{
    builder(node) {
        node.nameFunction = "binFile_pascal";
        node.dataType = {0:"FILE*" ,1:"char* ", 2: "int"};
        var fileOut = new D3NE.Output('Файл', arraySocket);
        var sizeOut = new D3NE.Output('Число записей', numSocket);
        var fileControl = new D3NE.Control('<input type="string">',
          (el, c) => {
             el.value = c.getData('0') || "имя файла";
          
             function upd() {
                c.putData("0", el.value);
             }
 
             el.addEventListener("input", ()=>{
                upd();
                editor.eventListener.trigger("change");
             });
             el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
            upd();
          }
       );

        var pathControl = new D3NE.Control('<input type="string">',
        (el, c) => {
            el.value = c.getData('2') || "путь файла";
        
            function upd() {
                c.putData("2", el.value);
            }

            el.addEventListener("input", ()=>{
                upd();
                editor.eventListener.trigger("change");
            });
            el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
            upd();
        }
        );
        var sizeControl = new D3NE.Control('<input type="string">',
        (el, c) => {
           el.value = c.getData('1') || "имя числа записей";
        
           function upd() {
              c.putData("1", el.value);
           }
  
           el.addEventListener("input", ()=>{
              upd();
              editor.eventListener.trigger("change");
           });
           el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
          upd();
        }
     );
        return node
                .addOutput(fileOut)
                .addOutput(sizeOut)
                .addControl(fileControl)
                .addControl(sizeControl)
                .addControl(pathControl)
                ;
                
    }});

var maxCompPascalBinFile = new D3NE.Component("Максимум", {
    builder(node) {
        node.nameFunction = "max";
        node.dataType = {0:"integer"};
        node.describe = "binfile_pascal_max";
      var fileIn = new D3NE.Input("Файл", arraySocket);
      var sizeIn = new D3NE.Input("Число записей", numSocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(fileIn)   
      .addInput(sizeIn)   
         .addOutput(resultOut)
         .addControl(resultControl);
    }}); 

var minCompPascalBinFile = new D3NE.Component("Минимум", {
    builder(node) {
        node.nameFunction = "min";
        node.dataType = {0:"integer"};
        node.describe = "binfile_pascal_min";
      var fileIn = new D3NE.Input("Файл", arraySocket);
      var sizeIn = new D3NE.Input("Число записей", numSocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(fileIn)   
      .addInput(sizeIn)   
         .addOutput(resultOut)
         .addControl(resultControl);
    }}); 

var delCompPascalBinFile = new D3NE.Component("Удаление", {  
    builder(node) {
        node.nameFunction = "del";
        node.describe = "binfile_pascal_del";
      var fileIn = new D3NE.Input("Файл", arraySocket);
      var sizeIn = new D3NE.Input("Число записей", numSocket);
      var elementIn = new D3NE.Input("Удаляемый элемент", numSocket);
      var fileOut = new D3NE.Output("Файл", arraySocket);
      var sizeOut = new D3NE.Output("Число записей", numSocket);
      return node
      .addInput(fileIn)   
      .addInput(sizeIn)
         .addInput(elementIn)
         .addOutput(fileOut)
         .addOutput(sizeOut)
         ;
    }});     

var sortCompPascalBinFile = new D3NE.Component("Сортировка", {
    builder(node) {
        node.nameFunction = "sort";
        node.dataType = {0:"integer ", 1:"integer"};
        node.describe = "binfile_pascal_sort";
        var fileIn = new D3NE.Input("Файл", arraySocket);
        var sizeIn = new D3NE.Input("Число записей", numSocket);
        var fileOut = new D3NE.Output("Файл", arraySocket);
        var sizeOut = new D3NE.Output("Число записей", numSocket);

      return node
      .addInput(fileIn)   
      .addInput(sizeIn)   
      .addOutput(fileOut) 
      .addOutput(sizeOut) 
      ;
    }});



    
    var url = new URL(window.location.href);
var language = url.searchParams.get("language");
var structure = url.searchParams.get("structure");
if (language == null || structure == null)
{
    language = "0";
    structure = "0";
}
objSel = document.getElementById("Combobox");

switch(language)
{
    
        case "0":
        //alert("вот этот свитч");
        objSel.options.length = 0;
        objSel.options[0] = new Option("Массив","0");
        objSel.options[1] = new Option("Список","1");
        objSel.options[2] = new Option("Строка","2");
        objSel.options[3] = new Option("Текстовый файл","3");
        objSel.options[4] = new Option("Бинарный файл","4");
        
        ChangeStructure();
        break;
        case "1":
        objSel.options.length = 0;
        objSel.options[0] = new Option("Список","0");
        structure = "0";
        ChangeStructure();
        break;
        case "2": 
        objSel.options.length = 0;
        objSel.options[0] = new Option("Массив","0");
        objSel.options[1] = new Option("Список","1");
        objSel.options[2] = new Option("Строка","2");
        objSel.options[3] = new Option("Типизированный файл","3");
        objSel.options[4] = new Option("Нетипизированный файл","4");
        ChangeStructure();
        break;
    }
$("#Change-Language").val(language);
$("#Combobox").val(structure);



