loadAll();

//保存数据
function save() {
    var siteurl = document.getElementById("siteurl").value;
    var sitename = document.getElementById("sitename").value;
    localStorage.setItem(sitename, siteurl);
    alert("添加成功");
}

//查找数据
function find() {
    var search_site = document.getElementById("search_site").value;
    var siteurl = localStorage.getItem(search_site);
    var find_result = document.getElementById("find_result");
    find_result.innerHTML = search_site + "查找结果为" +
        "：" + siteurl;
}

//将所有存储在localStorage中的对象提取出来，并展现到界面上
function loadAll() {
    var list = document.getElementById("list");
    if (localStorage.length > 0) {
        var result = "<table>";
        result += "<tr><td>key</td><td>value</td></tr>";
        for (var i = 0; i < localStorage.length; i++) {
            var sitename = localStorage.key(i);
            var siteurl = localStorage.getItem(sitename);
            result += "<tr><td>" + sitename + "</td><td>" + siteurl + "</td></tr>";
        }
        result += "</table>";
        list.innerHTML = result;
    } else {
        list.innerHTML = "数据为空……";
    }
}