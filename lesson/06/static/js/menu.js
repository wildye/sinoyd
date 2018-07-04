(function(path){
    readJson(path, data => {

        $('.nav-top').html(toTree(data.menu, ''));
    })
})('./data.json')

function toTree(data, str) {
    data.forEach(function(val, index) {
        if (val.subset) {
            str += '<li class="more"><a href="' + val.link + '">' + val.title + '</a><ul>' + createLi(val.subset, '') + '</ul></li>';
        } else {
            str += '<li><a '+ (index === 0 ? 'class="active"' : '') +' href="' + val.link + '">' + val.title + '</a></li>';
        }
    })
    return str;
};

function createLi (list, str) {
    if (!list) return str;
    list.forEach(function(val) {
        if (val.subset) {
            str += '<li class="more"><a href="' + val.link + '">' + val.title + '</a><ul>' + createLi(val.subset, '') + '</ul></li>';
        } else {
            str += '<li><a href="' + val.link + '">' + val.title + '</a></li>';
        }
    });
    return str;
}

// 读取 json 文件
function readJson (filePath, callback) {
    let promise = new Promise(function(success, failure) {
    $.get(filePath, function(result) {
        success(result);
    }, "json");
    });
    promise.then(function(result) {
    callback(result)
    }, function (error) {
    console.log(error)
    })
}
