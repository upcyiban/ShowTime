
/**
 * Created by zet on 2016/2/16.
 */
$(document).ready(function() {
    var int=self.setInterval("tick()",50);
    function tick() {
        var hours, minutes, seconds,dd;
        var intHours, intMinutes, intSeconds;
        var today, theday,state1,state2,state3,computerstate;
        today = new Date();
        function initArray(){
            this.length=initArray.arguments.length;
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
        seconds  = today.getSeconds();
        hours = intHours+":";
        dd = today.getDay();
        if (intMinutes < 10) {
            minutes = "0"+intMinutes+",";
        } else {
            minutes = intMinutes+",";
        }
        if(intHours<=21&&dd!=4)
        {
            state1="开放中";
            state2="开放中";
            state3="开放中";
        }
        else
        {
            state1="未开放";
            state2="未开放";
            state3="未开放"
        }
        //timeString = theday+hours+minutes+seconds;
        //computer
        if(intHours<=12&&intHours>=8)
        {
            computerstate="开放中";

        }
        if (intHours>=14&&intHours<=22)
        {
            computerstate="开放中";

        }
        else
        {
            computerstate="未开放";

        }
        //library
        if(intHours<=12&&intHours>=8)
        {
            library0state="开放中";

        }
        if (intHours>=14&&intHours<=22)
        {
            library0state="开放中";

        }
        else
        {
            library1state="未开放";

        }


        computer.innerHTML = computerstate;
        library0.innerHTML = library0state;
        library1.innerHTML = library1state;
        library2.innerHTML = library2state;
        library3.innerHTML = library3state;
        timeString = theday+hours+minutes;
        Clock.innerHTML = timeString;
        yulan.innerHTML = state1;
        huicui.innerHTML = state2;
        tangdao.innerHTML = state3;
        //window.setTimeout("tick();", 100);
    }
    window.onload = tick();
});
