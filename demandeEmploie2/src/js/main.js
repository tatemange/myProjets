

function PGCD(a, b){
    while (b) [a, b] = [b, a % b]
    return a;
}

function PGCD_Recursif(a, b){
    if(b == 0) return a
    return PGCD(b, a % b)
}

function PPCM(a, b){
    return (a * b) / PGCD(a, b)
}


function factoriel(a){
    r = 1
    for(let i = a; i > 1; i--){
        r *= i
    }

    return r;
}

