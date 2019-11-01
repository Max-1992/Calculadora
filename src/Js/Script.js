

import { Imprimir_Numero_Display, Seleccionar_Operador, Run_Calculo, Clear, Imprimir_Punto, Validar_Tecla} from './functions'


// Selección de componentes

export const display = document.getElementById("Display");
display.textContent = "0";

// Seleccion de Botones

export const Boton_0 = document.getElementById("Boton-0");
export const Boton_1 = document.getElementById("Boton-1");
export const Boton_2 = document.getElementById("Boton-2");
export const Boton_3 = document.getElementById("Boton-3");
export const Boton_4 = document.getElementById("Boton-4");
export const Boton_5 = document.getElementById("Boton-5");
export const Boton_6 = document.getElementById("Boton-6");
export const Boton_7 = document.getElementById("Boton-7");
export const Boton_8 = document.getElementById("Boton-8");
export const Boton_9 = document.getElementById("Boton-9");
export const Boton_Borrar = document.getElementById("Boton-Borrar");
export const Boton_Division = document.getElementById("Boton-Division");
export const Boton_Multiplicacion = document.getElementById("Boton-Multiplicar");
export const Boton_Resta = document.getElementById("Boton-Restar");
export const Boton_Suma = document.getElementById("Boton-Suma");
export const Boton_Igual = document.getElementById("Boton-Igual");
export const Boton_Punto = document.getElementById("Boton-Punto");


// Declaración de variables operacionales

let Tecla_Pulsada;

// Escuchar Eventos de mouse

Boton_0.addEventListener("click", () => Imprimir_Numero_Display(Boton_0));
Boton_1.addEventListener("click", () => Imprimir_Numero_Display(Boton_1));
Boton_2.addEventListener("click", () => Imprimir_Numero_Display(Boton_2));
Boton_3.addEventListener("click", () => Imprimir_Numero_Display(Boton_3));
Boton_4.addEventListener("click", () => Imprimir_Numero_Display(Boton_4));
Boton_5.addEventListener("click", () => Imprimir_Numero_Display(Boton_5));
Boton_6.addEventListener("click", () => Imprimir_Numero_Display(Boton_6));
Boton_7.addEventListener("click", () => Imprimir_Numero_Display(Boton_7));
Boton_8.addEventListener("click", () => Imprimir_Numero_Display(Boton_8));
Boton_9.addEventListener("click", () => Imprimir_Numero_Display(Boton_9));
Boton_Multiplicacion.addEventListener("click", () => Seleccionar_Operador(Boton_Multiplicacion));
Boton_Division.addEventListener("click",  () => Seleccionar_Operador(Boton_Division));
Boton_Suma.addEventListener("click", () => Seleccionar_Operador(Boton_Suma));
Boton_Resta.addEventListener("click", () => Seleccionar_Operador(Boton_Resta));
Boton_Igual.addEventListener("click", () => Run_Calculo(Boton_Igual));
Boton_Borrar.addEventListener("click", () => Clear());
Boton_Punto.addEventListener("click", () => Imprimir_Punto(Boton_Punto));

// Escuchar Eventos de Teclado

window.addEventListener("keydown", (event) =>{
    
    Tecla_Pulsada = event.keyCode;

    Validar_Tecla(Tecla_Pulsada)

});





