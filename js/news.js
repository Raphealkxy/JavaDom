window.onload=showpic2;//载入页面执行函数

function showpic(whispic) {
    var imagelink = whispic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",imagelink);
}

function showpic1() {
    var imagelink ="../image/test.jpg";
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",imagelink);
}

function showpic2() {
    if(!document.getElementsByTagName) return false;
    var imagelink ="../image/test2.jpg";
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",imagelink);
}

function createNewWindows() {
    window.open("http://www.baidu.com","popup");
    return false;
}
//根据标签获取元素
var paras = document.getElementsByTagName("input");
for(var i=0;i<paras.length;i++){
    console.log(paras[i].getAttribute("value"))//还可打印type、id、value、//获取属性节点的值

}
//设置属性节点的值 获取与设置
var input1 = paras[0];
input1.setAttribute("value","ak47");//设置"value"属性的值
console.log(paras[0].getAttribute("value"));//获取标签value属性值

var ps  =document.getElementsByTagName("p");

//标签中内容的设置
for(i=0;i<ps.length;i++){
    console.log(i+"个p标签中的内容为："+ps[i].innerHTML)//日志打印标签的内容
}

//与上面相似，图片的可以获取href和
//.................................................
//获取某个标签 可以用getElementById
var test1 = document.getElementById("test1");
console.log("根据id获取标签值："+test1.innerText)

//获取某个标签，可以用getElementByClass
var radio  = document.getElementsByClassName("date");
for(var i=0;i<radio.length;i++){
    console.log("根据class获取元素"+i+"其id值为："+radio[i].getAttribute("id"))
}

//获取所有子标签
var childnodes = document.getElementsByTagName("div")[0].childNodes;
console.log("字标签的个数为："+childnodes.length);
for(var i=0;i<childnodes.length;i++)
    console.log("字标签"+i+"的信息是"+childnodes[i].nodeType+" "+childnodes[i].nodeName+" "+childnodes[i].nodeValue);

