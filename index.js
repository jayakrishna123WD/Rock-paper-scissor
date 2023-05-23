document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector(".a").classList.add("loaded");
    }, 2500)
});

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const game = document.getElementById('maingame');
const p1img = document.getElementById('p1s');
const p2img = document.getElementById('p2s');
const tit = document.getElementById('title');
const rock = document.getElementById('rock');
const pap = document.getElementById('pap');
const sis = document.getElementById('scis');
const comp = document.getElementById('comp');
const your = document.getElementById('mine');
const reset = document.getElementById('rs');
const ds1 = document.getElementById('ds1');
const ds2 = document.getElementById('ds2');
const res = document.getElementById('res');
const restart = document.getElementById('restart');
const out = document.getElementById('output');
const end = document.getElementById('end');
const outtext = document.getElementById('outtext');

const ch = document.getElementById('chiru');
const aa = document.getElementById('alluarjun');
const bk = document.getElementById('balakrishna');
const ng = document.getElementById('nagarjuna');
const nn = document.getElementById('nani');
const nt = document.getElementById('ntr');
const pk = document.getElementById('pawankalyan');
const vk = document.getElementById('venkatesh');

function p1screennone() {
    p1.style.display = 'none';
    p2.style.display = 'flex';
    tit.style.display = 'none';
}
function p2screennone() {
    p2.style.display = 'none';
    game.style.display = 'block';
    tit.style.display = 'none';
} 


ch.addEventListener('click', p1screennone);
ch.addEventListener('click', () => {
    p1img.src = 'chiru.jpg';
});
nn.addEventListener('click', p1screennone);
nn.addEventListener('click', () => {
    p1img.src = 'nani.jpg';
});
nt.addEventListener('click', p1screennone);
nt.addEventListener('click', () => {
    p1img.src = 'ntr.jpg';
});
vk.addEventListener('click', p1screennone);
vk.addEventListener('click', () => {
    p1img.src = 'venkatesh.jpg';
});

aa.addEventListener('click', p2screennone);
aa.addEventListener('click', () => {
    p2img.src = 'alluarjun.jpg';
});
bk.addEventListener('click', p2screennone);
bk.addEventListener('click', () => {
    p2img.src = 'balakrishna.jpg';
});
ng.addEventListener('click', p2screennone);
ng.addEventListener('click', () => {
    p2img.src = 'nagarjuna.jpg';
});
pk.addEventListener('click', p2screennone);
pk.addEventListener('click', () => {
    p2img.src = 'pawankalyan.jpg';
});


var player1score = 0;
var player2score = 0;
var count = 0;

rps = ['&#129704;', '&#128220;', '&#9986;'];
rock.addEventListener('click', () => {
    your.innerHTML = rps[0];
    var option = rps[Math.floor(Math.random()*rps.length)]
    comp.innerHTML = option;
    if(option == rps[2]){
        player1score++;
    }
    else if(option == rps[1]){
        player2score++;
    }
    count++;
    console.log(count);
    ds1.innerText = player1score;
    ds2.innerText = player2score;
    check(count);
})
pap.addEventListener('click', () => {
    your.innerHTML = rps[1];
    var option = rps[Math.floor(Math.random()*rps.length)];
    comp.innerHTML = option;
    if(option == rps[0]){
        player1score++;
    }
    else if(option == rps[2]){
        player2score++;
    }
    count++;
    console.log(count);
    ds1.innerText = player1score;
    ds2.innerText = player2score;
    check(count);
})
sis.addEventListener('click', () => {
    your.innerHTML = rps[2];
    var option = rps[Math.floor(Math.random()*rps.length)];
    comp.innerHTML = option;
    if(option == rps[1]){
        player1score++;
    }
    else if(option == rps[0]){
        player2score++;
    }
    count++;
    console.log(count);
    ds1.innerText = player1score;
    ds2.innerText = player2score;
    check(count);
})


function check(num){
    if(num == 5){
        game.style.display = 'none';
        res.style.display = 'block';
        if(player1score > player2score){
            out.src = p1img.src;
        }
        else if(player1score == player2score){
            outtext.innerHTML = "Match Tie";
        }
        else{
            out.src = p2img.src;
        }
    }
}
reset.addEventListener('click', () => {
    count = 0;
    player1score = 0;
    player2score = 0;
    ds1.innerText = 0;
    ds2.innerHTML = 0;
})
restart.addEventListener('click', () => {
    game.style.display = 'block';
    res.style.display = 'none';
    count = 0;
    player1score = 0;
    player2score = 0;
    ds1.innerText = 0;
    ds2.innerHTML = 0;  
})

end.addEventListener('click', () => {
    res.style.display = 'none';
    p1.style.display = 'flex';
})
