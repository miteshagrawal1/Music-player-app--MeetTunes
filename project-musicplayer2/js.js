let ppdkp = new Audio('pal_pal_dil_ke_pass.mp3');
let cmmk = new Audio('chookarmeremanko.mp3');
let ysm = new Audio('yeshammastani.mp3');
let dek = new Audio('dekhaekkhwab.mp3');
let dm = new Audio('dilbarmere.mp3');
let pdhh = new Audio('pyardewanahotahain.mp3');
let omdkc = new Audio('omeredilkechain.mp3');
let ihg = new Audio('intehahogayi.mp3');
let mnmr = new Audio('meetnamilare.mp3');
let osr = new Audio('osathire.mp3');
let rjgs = new Audio('rimjhimgiresawan.mp3');
let sei = new Audio('salameishq.mp3');

const arrayofsong = [ppdkp, cmmk, ysm , dek, dm , pdhh, omdkc, ihg , mnmr , osr , rjgs , sei];

let range = document.getElementById('range');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let title = document.getElementById('songname');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let ten = document.getElementById('ten');
let oneone = document.getElementById('oneone');
let onetwo = document.getElementById('onetwo');
let gif = document.getElementById("gif");

// 1111111
one.addEventListener("click", ()=>{
    arrayofsong.forEach((ele)=>{
        ele.pause();
    })
    ppdkp.play();
    gif.style.opacity = 1;
    title.innerHTML = "PAL PAL DIL KE PASS"
})
one.addEventListener("dblclick", ()=>{
    ppdkp.pause();
    gif.style.opacity = 0;
})
// 222222
two.addEventListener("click", ()=>{
    arrayofsong.forEach((ele)=>{
        ele.pause();
    })
    dek.play();
    gif.style.opacity = 1;
    title.innerHTML = "DEKHA EK KHWAB"
})
two.addEventListener("dblclick", ()=>{
    dek.pause();
    gif.style.opacity = 0;
})
// 333333
three.addEventListener("click", ()=>{
    arrayofsong.forEach((ele)=>{
        ele.pause();
    })
    dm.play();
    gif.style.opacity = 1;
    title.innerHTML = "DILBAR MERE KAB TAK MUJHE"
})
three.addEventListener("dblclick", ()=>{
    dm.pause();
    gif.style.opacity = 0;
})
// 44444444444
four.addEventListener("click", ()=>{
    arrayofsong.forEach((ele)=>{
        ele.pause();
    })
    ysm.play();
    gif.style.opacity = 1;
    title.innerHTML = "YEH SHAM MASTANI"
})
four.addEventListener("dblclick", ()=>{
    ysm.pause();
    gif.style.opacity = 0;
})
// 555555555
five.addEventListener("click", ()=>{
    arrayofsong.forEach((ele)=>{
        ele.pause();
    })
    pdhh.play();
    gif.style.opacity = 1;
    title.innerHTML = "PYAR DEEWANA HOTA HAIN"
})
five.addEventListener("dblclick", ()=>{
    pdhh.pause();
    gif.style.opacity = 0;
})
// 6666666
six.addEventListener("click", ()=>{
    arrayofsong.forEach((ele)=>{
        ele.pause();
    })
    cmmk.play();
    gif.style.opacity = 1;
    title.innerHTML = "CHOOKAR MERE MAN KO"
})
six.addEventListener("dblclick", ()=>{
    cmmk.pause();
    gif.style.opacity = 0;
})
// 7777777777777777
seven.addEventListener("click", ()=>{
    arrayofsong.forEach((ele)=>{
        ele.pause();
    })
    omdkc.play();
    gif.style.opacity = 1;
    title.innerHTML = "O MERE DIL KE CHAIN"
})
seven.addEventListener("dblclick", ()=>{
    cmmk.pause();
    gif.style.opacity = 0;
})
// 888888888
eight.addEventListener("click", ()=>{
    arrayofsong.forEach((ele)=>{
        ele.pause();
    })
    ihg.play();
    gif.style.opacity = 1;
    title.innerHTML = "INTEHA HO GAYI"
})
eight.addEventListener("dblclick", ()=>{
    ihg.pause();
    gif.style.opacity = 0;
})
// 99999999999
nine.addEventListener("click", ()=>{
    arrayofsong.forEach((ele)=>{
        ele.pause();
    })
    mnmr.play();
    gif.style.opacity = 1;
    title.innerHTML = "MEET NA MILE RE"
})
nine.addEventListener("dblclick", ()=>{
    mnmr.pause();
    gif.style.opacity = 0;
})
// 1010101010
ten.addEventListener("click", ()=>{
    arrayofsong.forEach((ele)=>{
        ele.pause();
    })
    osr.play();
    gif.style.opacity = 1;
    title.innerHTML = "O SATHI RE"
})
ten.addEventListener("dblclick", ()=>{
    osr.pause();
    gif.style.opacity = 0;
})
// 1111111
oneone.addEventListener("click", ()=>{
    arrayofsong.forEach((ele)=>{
        ele.pause();
    })
    rjgs.play();
    gif.style.opacity = 1;
    title.innerHTML = "RIM JHIM GIRE SAWAN"
})
oneone.addEventListener("dblclick", ()=>{
    rjgs.pause();
    gif.style.opacity = 0;
})
// 1212121212
onetwo.addEventListener("click", ()=>{
    arrayofsong.forEach((ele)=>{
        ele.pause();
    })
    sei.play();
    gif.style.opacity = 1;
    title.innerHTML = "SALAM-E-ISHQ"
})
onetwo.addEventListener("dblclick", ()=>{
    sei.pause();
    gif.style.opacity = 0;
})


//final progress bar
arrayofsong.forEach((sname)=>{
sname.addEventListener("timeupdate", ()=>{
    progress = parseInt((sname.currentTime / sname.duration) * 100);
    range.value = progress;
})

range.addEventListener("change", ()=>{
    sname.currentTime = range.value * sname.duration / 100;
})
})