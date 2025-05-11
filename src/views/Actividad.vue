<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar la comprensión y el uso adecuado de las herramientas básicas en la ventana <em>Board</em> del <em>software</em> EAGLE.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de los siguientes elementos hace parte del costo de producción?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Materia prima directa, mano de obra directa y costos indirectos de fabricación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Materia prima indirecta, mano de obra directa y gastos de administración.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Materia prima, gastos operacionales y costos financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Materia prima, nómina administrativa y costos financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'El principal objetivo de la contabilidad de costos es:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el capital de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir los impuestos anuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Determinar el costo unitario de los productos o servicios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Auditar todos los procesos administrativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es una característica de la contabilidad financiera en contraste con la contabilidad de costos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se enfoca en asignar costos a unidades producidas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es utilizada para determinar precios de venta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Permite valorar inventarios según NIC 2.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Recopila y presenta información económica global de la empresa.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué elemento no se incluye en la nómina de producción?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Datos del trabajador.', esCorrecta: false },
            { id: 'b', texto: 'Estado de resultados.', esCorrecta: true },
            { id: 'c', texto: 'Días laborados.', esCorrecta: false },
            { id: 'd', texto: 'Salario básico.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el significado de PEPS en la valoración de inventarios según la NIC 2?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pagos Especiales Para el Servicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pérdidas Estimadas Por Saldos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Primeras Entradas Primeras Salidas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Provisiones Establecidas Para Servicios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'En una empresa de servicios, el costo está compuesto principalmente por:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Salarios, insumos de oficina y servicios públicos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Materia prima, costos indirectos y publicidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Materia prima directa y mano de obra directa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Costos financieros y depreciación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Cuál es la fórmula del costo de producción?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Costos financieros + gastos de administración.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Materia Prima Directa + Mano de Obra Directa + CIF.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mano de Obra Directa + Gastos de ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Inventarios iniciales + compras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: 'Según la NIC 19, los beneficios post-empleo incluyen:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Horas extras y recargos nocturnos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pensiones y seguros de vida.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Auxilio de transporte.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Remuneraciones por dominicales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué representa el costo de conversión?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'MOD + CIF.', esCorrecta: true },
            { id: 'b', texto: 'MPD + MOD.', esCorrecta: false },
            { id: 'c', texto: 'Costos fijos + variables.', esCorrecta: false },
            {
              id: 'd',
              texto: 'MOD + salarios administrativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué porcentaje aporta el empleador a la pensión según el documento?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '4%.', esCorrecta: false },
            { id: 'b', texto: '12%.', esCorrecta: true },
            { id: 'c', texto: '16%.', esCorrecta: false },
            { id: 'd', texto: '1%.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El costo es siempre un gasto recuperable en la venta del producto.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'La contabilidad de costos sirve solo para grandes empresas manufactureras.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'El valor neto realizable puede ser menor al costo del inventario cuando hay deterioro.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'La mano de obra indirecta se incluye dentro de los costos indirectos de fabricación.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Los aportes a salud, pensión y riesgos laborales son deducciones que realiza el empleador al salario del trabajador.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
