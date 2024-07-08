setInterval(()=>{
    d=new Date();
    htime=d.getHours();
    mtimes=d.getMinutes();
    stimes=d.getSeconds();
    hrotation=(30*htime)+(.5*mtimes)+(.0083*stimes);
    mrotation=(6*mtimes)+(.1*stimes);
    srotation=6*stimes;
    HOURS.style.transform=`rotate(${hrotation}deg)`;
    MINUTES.style.transform=`rotate(${mrotation}deg)`;
    SECONDS.style.transform=`rotate(${srotation}deg)`
},1000);