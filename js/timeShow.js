/**
 * Created by zet on 2016/2/16.
 */
$(document).ready(function() {
    function tick() {
        var hours, minutes, seconds, xfile;
        var intHours, intMinutes, intSeconds;
        var today, theday,state;
        today = new Date();
        function initArray(){
            this.length=initArray.arguments.length
            for(var i=0;i<this.length;i++)
                this[i+1]=initArray.arguments[i] }
        var d=new initArray(
            "星期日",
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
            "星期六");
        theday =  [today.getMonth()+1]+"月"+today.getDate()+"日"+"&nbsp&nbsp&nbsp" + d[today.getDay()+1]+"&nbsp&nbsp";
        intHours = today.getHours();
        intMinutes = today.getMinutes();
            hours = intHours+":";
        if (intMinutes < 10) {
            minutes = "0"+intMinutes;
        } else {
            minutes = intMinutes;
        }
        if(intHours<=21)
        {
            state="开放中"
        }
        else
        {
            state="已关闭"
        }
        timeString = theday+hours+minutes;
        Clock.innerHTML = timeString;
        yulan.innerHTML = state;
        huicui.innerHTML = state;
        tangdao.innerHTML = state;
        window.setTimeout("tick();", 100);
    }
    window.onload = tick;
});
