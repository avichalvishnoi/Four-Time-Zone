function setFourTime() 
 {                 
    const date = new Date();     

    let fourTimeZone =
    [
    {date: "indiaDate", time: 'indiaTime', timezone:'IST'},
    {date: "usaDate", time: 'usaTime', timezone: 'PST'},
    {date: 'japanDate', time: 'japanTime', timeZone: 'JST'},
    {date: 'englandDate', time: "englandTime", timezone: "BST"}
    ];
 
    for(var i=0; i<fourTimeZone.length; i++)
    {
        document.getElementById(fourTimeZone[i].date).innerHTML = 'Date: '+date.toLocaleDateString('en-US', {timeZone: fourTimeZone[i].timezone});                   
        document.getElementById(fourTimeZone[i].time).innerHTML = 'Time: '+date.toLocaleTimeString('en-US', {timeZone: fourTimeZone[i].timezone});  
    }
                    
    setTimeout(setFourTime,1000);
}