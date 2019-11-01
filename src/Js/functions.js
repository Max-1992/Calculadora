
import { display, Boton_0, Boton_1, Boton_2, Boton_3, Boton_4, Boton_5, Boton_6, Boton_7, Boton_8, Boton_9, Boton_Division, Boton_Multiplicacion, Boton_Resta, Boton_Suma, Boton_Igual, Boton_Punto } from './Script';

// Declaración de variables operacionales

let Operacion;
let Numero1 = 0;
let Numero2;
let Resultado;


// Funciones principales del programa

export function Imprimir_Numero_Display(Boton){
    
    let numero = Boton.value;
    if(display.textContent === "0"){
        display.textContent = numero;
    }else{
        display.textContent += numero;
    }   
};

export function Seleccionar_Operador (Boton) {
    Asignar_Valor()
    Iluminar_Boton(Boton);
    Seleccion_Operacion(Boton);
    Clear_Display()
};

export function Run_Calculo(Boton){
    Iluminar_Boton(Boton)
    Asignar_Valor()
    Calculo()
    Encadenar_Operacion()
    Mostrar_Resultado_en_Display()
    
};

function Imprimir_Punto(Boton){
    let numero = Boton.value;
    if(display.textContent === "0"){
        
    }else{
        display.textContent += numero;
    }
};

export function Clear(){
    display.textContent = 0
    Numero1 = 0;
    Operacion;
};

export function Validar_Tecla(Tecla){
    switch(Tecla){
        case 96:
        case 48:
            return Imprimir_Numero_Display(Boton_0)
        case 97:
        case 49:
            return Imprimir_Numero_Display(Boton_1)
        case 98:
        case 50:
            return Imprimir_Numero_Display(Boton_2)
        case 99:
        case 51: 
            return Imprimir_Numero_Display(Boton_3)
        case 100:
        case 52:
            return Imprimir_Numero_Display(Boton_4)
        case 101:
        case 53:
            return Imprimir_Numero_Display(Boton_5)
        case 102:
        case 54:
            return Imprimir_Numero_Display(Boton_6)
        case 103:
        case 55:
            return Imprimir_Numero_Display(Boton_7)
        case 104:
        case 56:
            return Imprimir_Numero_Display(Boton_8)
        case 105:
        case 57:
            return Imprimir_Numero_Display(Boton_9)
        case 109:
        case 189:
            return Seleccionar_Operador(Boton_Resta)
        case 107:
        case 187:
            return Seleccionar_Operador(Boton_Suma)
        case 111:
            return Seleccionar_Operador(Boton_Division)
        case 106:
            return Seleccionar_Operador(Boton_Multiplicacion)
        case 13:
            return Run_Calculo(Boton_Igual)
        case 110:
        case 190:
            return Imprimir_Punto(Boton_Punto)
        case 8:
            return Clear()  
    }
};



// Funciones Secundarias

export function Seleccion_Operacion (operacion){
    Operacion = Transformar_Operación_Numero(operacion)
};

export function Iluminar_Boton(Boton){
    Boton.classList.add("Iluminacion")
    setTimeout(() => Remover_Iluminacion(Boton), 500);
};

export function Remover_Iluminacion(Boton){
    Boton.classList.remove("Iluminacion")   
};

export function Transformar_Operación_Numero (operacion) {
    switch (operacion){
        case Boton_Division:
            return 1
        case Boton_Multiplicacion:
            return 2
        case Boton_Resta:
            return 3
        case Boton_Suma:
            return 4 
    }
};

export function Asignar_Valor(){
    if(Numero1 === 0){
        Numero1 = Number(display.textContent)
    }else{
        Numero2 = Number(display.textContent)
    }
};

export function Clear_Display(){
    display.textContent = 0;
};


export function Calculo(){
    if(Operacion === 1){
        return Resultado = Numero1 / Numero2
    }else if(Operacion === 2){
        return Resultado = Numero1 * Numero2
    }else if(Operacion === 3){
        return Resultado = Numero1 - Numero2
    }else if(Operacion === 4){
        return Resultado = Numero1 + Numero2
    }
};

export function Mostrar_Resultado_en_Display(){
    display.textContent = Resultado
}

export function Encadenar_Operacion(){
    Numero1 = Resultado;
}