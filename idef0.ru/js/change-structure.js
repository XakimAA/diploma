function Change(){  
    window.location.replace("file:///C:/Users/%D0%90%D0%BD%D0%B6%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0/Desktop/diploma/diploma/idef0.ru/1.html" +
     "?structure=" + $("#Combobox")[0].selectedIndex + "&language="+ $("#Change-Language")[0].selectedIndex);
    
}
function ChooseLanguage()
{
    if (!document.getElementById("choose-language").aria)
    {
        document.getElementById("nav-language").className = "nav-item dropdown show";
        document.getElementById("menu-language").className = "dropdown-menu show";
        document.getElementById("choose-language").aria = true;
    }
    else
    {
        document.getElementById("nav-language").className = "nav-item dropdown";
        document.getElementById("menu-language").className = "dropdown-menu";
        document.getElementById("choose-language").aria = false;
    }
  //alert("tuk");
}

