/**
 * Created by deng on 16-6-21.
 */
exports.PrintCrruentTime = function (table, sec) {
    /* var date = new Date();

     var month = date.getMonth() + 1;
     console.log(date.getFullYear() + '年' +
     date.getFullYear() + '年' +
     month+ '月' +
     date.getDate() + '号' +
     date.getHours() + '时' +
     date.getMinutes() + '分' +
     date.getSeconds() + '秒'
     )*/
    var date = new Date();
    var end = date.getTime();
    // var number = new Date().getMilliseconds() / 1000;
    var time = end - sec;
    if(table == undefined)
    {
        console.log("asdasdasd");
    }
    console.log(table + '耗时：' + time + '秒');
    // var time = end - mypretime;
    // return end;
};
/**
 * @return {number}
 */
exports.GetCrruentMilliTime = function () {
    var date = new Date();
    return date.getMilliseconds();
};