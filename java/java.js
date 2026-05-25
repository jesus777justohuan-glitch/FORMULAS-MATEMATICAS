


// ==========================================Función Factorial (!) ==========================================
function factorialIterativo(num) {     //entrada num
    let res = 1;                       // acumulador
    for (let i = 1; i <= num; i++) {   //va hasta el num 
        res = res * i;                 //multiplica cada iteracion y se guarda en res
    }
    return res;                        //retorna res 
}

// ==========================================Función aplica la ecuación de combinaciones C(n, r)========================
function calcularCombinacion(n, r) {                                       //entrada n,r
    let numerador = factorialIterativo(n);                                 //llama al funcion factorial para n
    let denominador = factorialIterativo(r) * factorialIterativo(n - r);   //llama al funcion factorial para r y n-r
    return numerador / denominador;                                        //retorna la division 
}




// ==========================================
// 1 LEY DE ENFRIAMIENTO
// ==========================================
function calcularCalor() {
    let t0 = parseFloat(document.getElementById("t0").value) || 0;         // CAPTURA DE DATOS  
    let ts = parseFloat(document.getElementById("ts").value) || 0;         // CAPTURA DE DATOS 
    let k = parseFloat(document.getElementById("k").value) || 0;           // CAPTURA DE DATOS 
    let t = parseFloat(document.getElementById("t_tiempo").value) || 0;    // CAPTURA DE DATOS 
    let pantalla = document.getElementById("resultadoCalor");              // CAPTURA DE DATOS 

    // Aplica fórmula: T = Ts + (T0 - Ts) * e^(-k * t)
    let temperaturaFinal = ts + (t0 - ts) * Math.exp(-k * t);             
    
    // Redondeo obligatorio al entero más cercano
    let resultadoRedondeado = Math.round(temperaturaFinal);

    // Renderizado dinámico y estético de éxito
    pantalla.style.backgroundColor = "#e2f0d9";
    pantalla.style.borderLeftColor = "#28a745";
    pantalla.style.color = "#385723";
    pantalla.innerText = "Temperatura Final: " + resultadoRedondeado + " °C";
}



// ==========================================
// 2 COMBINACIONES
// ==========================================
function calcularSorteo() {
    let n1 = parseInt(document.getElementById("n1").value) || 0;
    let r1 = parseInt(document.getElementById("r1").value) || 0;
    let n2 = parseInt(document.getElementById("n2").value) || 0;
    let r2 = parseInt(document.getElementById("r2").value) || 0;
    let pantalla = document.getElementById("resultadoSorteo");   

    // VALIDACIÓN OBLIGATORIA: PARA QUE NO HAYA FACTORIALES NEGATIVOS
    if (r1 > n1 || r2 > n2) {
        pantalla.style.backgroundColor = "#fce4d6";
        pantalla.style.borderLeftColor = "#c55a11";
        pantalla.style.color = "#c55a11";
        pantalla.innerText = "❌ Error: No puedes extraer (r) más elementos de los disponibles en el bombo (n).";
        return; 
    }

    // Procesamiento matemático por grupos independientes
    let grupo1 = calcularCombinacion(n1, r1);            //  LLAMA A LA FUNCION CALCULARCOMBINACIONES
    let grupo2 = calcularCombinacion(n2, r2);            //  LAMA A LA FUNCION CALCULARCOMBINACIONES

    // Multiplicación total 
    let granTotal = grupo1 * grupo2;

    // Renderizado estético de éxito con formato local boliviano para miles
    pantalla.style.backgroundColor = "#e2f0d9";
    pantalla.style.borderLeftColor = "#28a745";
    pantalla.style.color = "#385723";
    pantalla.innerText = "Total de combinaciones posibles: " + granTotal.toLocaleString('es-BO');  
}