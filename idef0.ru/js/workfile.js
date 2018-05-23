function openfilik(){
var fso = new ActiveXObject('Scripting.FileSystemObject');
filehandle = fso.OpenTextFile("C:\\Users\\Анжелика\\Desktop\\idef0.ru\\alrorithm\\C\\lib.txt",1); /* Открывает файл*/
var first = filehandle.ReadAll(); /* Читает из файла и переменная first и есть весь текст, который он считал*/
alert(first);
filehandle.Close(); /*закрывает файл*/
}