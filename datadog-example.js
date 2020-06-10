
var StatsD = require('node-dogstatsd').StatsD;
var dogstatsd = new StatsD();

function visitorCame(){
    console.log("new visitor")
    dogstatsd.increment('page.views')
}

setInterval(()=>{
    visitorCame()
}, 5000)