/**
 * Created by zet on 2016/2/16.
 */
//$(document).ready(function() {
    var int=self.setInterval("tick()",50);
    function tick() {
        var hours, minutes, seconds,dd;
        var intHours, intMinutes, intSeconds;
        var today, theday,state1,state2,state3,computerstate;
        var library0state,library1state,library2state,library3state;
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
        if(intHours>=6&&intHours<=9||intHours>=10&&intHours<=13||intHours>=14&&intHours<=21)
        {
            state1="开放中";
            state2="开放中";
            //state3="开放中";
        }
        else
        {
            state1="未开放";
            state2="未开放";
            //state3="未开放"
        }
        //timeString = theday+hours+minutes+seconds;
        //computer
        if(intHours<=12&&intHours>=8)
        {
            computerstate="开放中";

        }
        else if (intHours>=14&&intHours<=22)
        {
            computerstate="开放中";

        }
        else
        {
            computerstate="未开放";

        }
        //library
        //library0
        if(intHours>=8)
        {
            if (intHours==8)
            {
                if(intMinutes>=30)
                {
                    library0state="开放中";
                }
                else
                {
                    library0state="未开放";
                }
            }
            else if (intHours<22)
            {
                library0state="开放中";
            }
            else if(intHours==22)
            {
                if (intMinutes>=30)
                {
                    library0state="未开放";
                }
                else
                {
                    library0state="开放中";
                }
            }
            else
            {
                library0state="未开放";
            }
        }
        //library1
        if(intHours<=22&&intHours>=8)
        {
            library1state="开放中";

        }
        else
        {
            library1state="未开放";

        }
        //library2、3
        if(intHours<=12&&intHours>=8)
        {
            library2state="开放中";
            library3state="开放中";
        }
        else if (intHours>=14)
        {
            if(intHours<17)
            {
                library2state="开放中";
                library3state="开放中";
            }
            else if (intHours==17)
            {
                if(intMinutes>=30)
                {
                    library2state="未开放";
                    library3state="未开放";
                }
                else
                {
                    library2state="开放中";
                    library3state="开放中";
                }
            }
        }
        else if (intHours>=19&&intHours<=22)
        {
            library2state="开放中";
            library3state="开放中";
        }
        else
        {
            library2state="未开放";
            library3state="未开放";
        }


        computer.innerHTML = computerstate;
//<<<<<<< HEAD
        timeString = theday+hours+minutes+seconds;
//=======
        library0.innerHTML = library0state;
        library1.innerHTML = library1state;
        library2.innerHTML = library2state;
        library3.innerHTML = library3state;
        //timeString = theday+hours+minutes;
        Clock.innerHTML = timeString;
        yulan.innerHTML = state1;
        huicui.innerHTML = state2;
        tangdao.innerHTML = state3;
        window.setTimeout("tick();", 1000);
    }
    window.onload = tick();
//});