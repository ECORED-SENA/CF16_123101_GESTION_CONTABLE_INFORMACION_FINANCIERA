<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Nómina de producción
    p.mb-4 Es momento de abordar las generalidades de la nómina de producción, teniendo en cuenta que esta aplica para empresas que fabrican bienes. De acuerdo con la naturaleza de la actividad desempeñada por el colaborador, la nómina se divide en los siguientes:
    .row.justify-content-center.mb-5
      .col-lg-3.col-7.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #FEEAD4 ")
          .row.justify-content-center.align-items-center
            .col-lg-4.col-2: img(src='@/assets/curso/temas/44.svg', alt='')
            .col-lg-10
              p.mb-0 Nomina administrativa
      .col-lg-3.col-7.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #FEEAD4 ")
          .row.justify-content-center.align-items-center
            .col-lg-4.col-2: img(src='@/assets/curso/temas/44.svg', alt='')
            .col-lg-10
              p.mb-0 Nómina de ventas
      .col-lg-3.col-7.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #FEEAD4 ")
          .row.justify-content-center.align-items-center
            .col-lg-4.col-2: img(src='@/assets/curso/temas/44.svg', alt='')
            .col-lg-10
              p.mb-0 Nómina de producción
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1  Concepto
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        .p-4(style="background-color: #DDEFFD")
          p.mb-0 La nómina es un documento en el cual se refleja el pago a los empleados a cambio de realizar un trabajo determinado. Es el resumen de todos los registros contables para realizar el pago a los colaboradores, donde se encuentra el registro del salario, días laborados, devengos, deducciones y apropiaciones para finalmente saber cuál es el neto para pagar a cada empleado.
      .col-lg-3.col-7: img(src='@/assets/curso/temas/45.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/46.svg', alt='')
      .col-lg-8
        p.mb-4 Según la Norma Internacional de Contabilidad (NIC 19), se definen los beneficios a los empleados, así:
        ul.lista-ul
          li.d-flex
            i.fas.fa-angle-right
            p.mb-0 Beneficios a los empleados son todas las formas de contraprestación concedidas por una entidad a cambio de los servicios prestados por los empleados o por indemnizaciones por cese.
          li.d-flex
            i.fas.fa-angle-right
            p.mb-0 Beneficios a los empleados a corto plazo, son beneficios a los empleados (diferentes de las indemnizaciones por cese) que se espera liquidar totalmente antes de los doce meses siguientes al final del periodo anual sobre el que se informa, en el que los empleados hayan prestado los servicios relacionados.
          li.d-flex
            i.fas.fa-angle-right
            p.mb-0 Beneficios #[em post]-empleo son beneficios a los empleados (diferentes de las indemnizaciones por cese y beneficios a los empleados a corto plazo) que se pagan después de completar su periodo de empleo.
          li.d-flex
            i.fas.fa-angle-right
            p.mb-0 Otros beneficios a los empleados a largo plazo son todos los beneficios a los empleados diferentes de los beneficios a los empleados a corto plazo, beneficios posteriores al periodo de empleo e indemnizaciones por cese.
    p.mb-4 Los beneficios a los empleados comprenden:
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--morada")
          div(titulo="Beneficios a corto plazo")
            p.mb-4 Si se esperan liquidar totalmente antes de los doce meses posteriores al final del periodo anual sobre el que se informa, en el que los empleados presten los servicios relacionados:
            ul.lista-ul
              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 Sueldos, salarios y aportaciones a la seguridad social.
              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 Derechos por permisos y ausencia retribuidos por enfermedad.
              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 Participación en ganancias e incentivos.
              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 Beneficios no monetarios a los empleados actuales (tales como atenciones médicas, alojamiento, automóviles y entrega de bienes y servicios gratuitos o parcialmente subvencionados).
          div(titulo="Beneficios <em>post</em>-empleo")
            p.mb-4 Tales como los siguientes:
            ul.lista-ul
              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 Beneficios por retiro (por ejemplo, pensiones y pagos únicos por retiro); y
              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 Otros beneficios #[em post]-empleo, tales como los seguros de vida y los beneficios de atención médica posteriores al empleo
          div(titulo="Otros beneficios a los empleados a largo plazo")
            p.mb-4 Tales como los siguientes:
            ul.lista-ul
              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 Las ausencias retribuidas a largo plazo, tales como vacaciones tras largos periodos de servicio o años sabáticos.
              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 Los premios de antigüedad u otros beneficios por largo tiempo de servicio.
              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 Los beneficios por invalidez permanente.
              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 Beneficios por terminación. Norma Internacional de Contabilidad (NIC 19, s.f., p.1-46).
      .col-lg-3.col-7: img(src='@/assets/curso/temas/47.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-4(style="background-color: #F3F0EA ")
          p.mb-4 Con el fin de profundizar sobre la Norma Internacional (NIC) 19, se sugiere explorar los siguientes recursos.
          .row.justify-content-center
            .col-lg-6.mb-lg-0.mb-3
              a.anexo.mb-4(:href="obtenerLink('downloads/19_NIC_1.pdf')" target="_blank")
                .row.justify-content-around.align-items-center
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p Anexo. Norma internacional de Contabilidad 19
            .col-lg-6.mb-lg-0.mb-3
              a.anexo.mb-4(:href="obtenerLink('downloads/19_NIC_2.pdf')" target="_blank")
                .row.justify-content-around.align-items-center
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p Anexo. NIC 19 - Beneficios a los empleados
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2  Elementos de la nómina de producción
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-4(style="background-color: #F9F7F4")
          p.mb-4 La nómina de producción está compuesta por los siguientes elementos:
          .row.justify-content-center
            .col-lg-8
              ol.lista-ol--cuadro
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span A
                  p.mb-0 Datos de la empresa y dirección del centro de trabajo.

                li.d-flex
                  .lista-ol--cuadro__vineta
                    span B
                  p.mb-0 Fecha del periodo de cotización de la nómina.

                li.d-flex
                  .lista-ol--cuadro__vineta
                    span C
                  p.mb-0 Debe decir explícitamente a qué área o departamento pertenece la nómina.

                li.d-flex
                  .lista-ol--cuadro__vineta
                    span D
                  p.mb-0 Datos básicos del trabajador, tipo de contrato, número de días laborados.

                li.d-flex
                  .lista-ol--cuadro__vineta
                    span E
                  p.mb-0 Salario y prestaciones extrasalariales.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span F
                  p.mb-0 Detalle de todas las deducciones que se practican en el periodo y que estén constituidas legalmente.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span G
                  p.mb-0 Apropiaciones que tengan lugar en el periodo de tiempo.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span H
                  p.mb-0 Líquido para percibir.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span I
                  p.mb-0 Detalle de las bases de cotización.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span J
                  p.mb-0 Lugar de emisión y firma del empleador si hay lugar a esta.
            .col-lg-4.col-7: img(src='@/assets/curso/temas/48.svg', alt='')
    .titulo-tres: h3 Devengado

    .row.mb-5.align-items-center
      .col-lg-7
        p(data-aos="fade-left").mb-4 El devengado es el valor total de ingresos que obtiene un empleado en un periodo de tiempo determinado. El devengo está compuesto por el salario básico, horas extras, recargos diurnos y nocturnos, dominicales, festivos, comisiones, auxilio de transporte, entre otras (Gerencie, 2017).
    
        p(data-aos="fade-left").mb-4 El artículo 127 del Código Sustantivo del Trabajo expresa:
    
        .bg-color(style="background-color: #FED5A7").p-4(data-aos="fade-left").mb-4.tarjeta
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/49.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Constituye salario no sólo la remuneración ordinaria, fija o variable, sino todo lo que recibe el trabajador en dinero o en especie como contraprestación directa del servicio, sea cualquiera la forma o denominación que se adopte, como primas, sobresueldos, bonificaciones habituales, valor del trabajo suplementario o de las horas extras, valor del trabajo en días de descanso obligatorio, porcentajes sobre ventas y comisiones (Gerencie, 2020).
    
    
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/70.png", data-aos="zoom-in")
    

    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3
        .tarjeta.p-4.h-100.card-hover
          .row.justify-content-center.mb-2
            .col-4: img(src='@/assets/curso/temas/29.svg', alt='')
          .text-center
            .card-hover__titulo.mb-4
              h4 Salario
            p.mb-0 De acuerdo con lo anterior, el salario es la cantidad de dinero que recibe un trabajador por desarrollar su función sin que se le realice ningún descuento.
      .col-lg-4.col-7.mb-lg-0.mb-3
        .tarjeta.p-4.h-100.card-hover
          .row.justify-content-center.mb-2
            .col-4: img(src='@/assets/curso/temas/29.svg', alt='')
          .text-center
            .card-hover__titulo.mb-4
              h4 Salario básico
            p.mb-0 Es el valor acordado en el contrato laboral y la base para determinar las horas extras y recargos.
      .col-lg-4.col-7.mb-lg-0.mb-3
        .tarjeta.p-4.h-100.card-hover
          .row.justify-content-center.mb-2
            .col-4: img(src='@/assets/curso/temas/29.svg', alt='')
          .text-center
            .card-hover__titulo.mb-4
              h4 Salario integral
            p.mb-0 Se encuentra conformado por 13 salarios mínimos mensuales legales vigentes (SMMLV). El salario compensa prestaciones sociales, recargos y beneficios que correspondan al colaborador de acuerdo con la normativa legal o convencional.
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3
        .tarjeta.p-4.h-100.card-hover
          .row.justify-content-center.mb-2
            .col-4: img(src='@/assets/curso/temas/29.svg', alt='')
          .text-center
            .card-hover__titulo.mb-4
              h4 Mano de obra directa
            p.mb-0 Son los salarios que se les pagan a las personas que participan directamente en la transformación de la materia prima en producto terminado y se puede identificar o cuantificar plenamente en el producto terminado.
      .col-lg-4.col-7.mb-lg-0.mb-3
        .tarjeta.p-4.h-100.card-hover
          .row.justify-content-center.mb-2
            .col-4: img(src='@/assets/curso/temas/29.svg', alt='')
          .text-center
            .card-hover__titulo.mb-4
              h4 Mano de obra indirecta
            p.mb-0 Son los salarios y sueldos que se pagan al personal de apoyo a la producción, y que no se pueden identificar o cuantificar plenamente con la elaboración de productos.
      .col-lg-4.col-7.mb-lg-0.mb-3
        .tarjeta.p-4.h-100.card-hover
          .row.justify-content-center.mb-2
            .col-4: img(src='@/assets/curso/temas/29.svg', alt='')
          .text-center
            .card-hover__titulo.mb-4
              h4 Hora-hombre
            p.mb-0 Es la manera para cuantificar las horas de intervención de personas en un proceso y permite establecer el costo de mano de obra directa de un proceso; también es útil para determinar la eficiencia.
    .titulo-tres: h3 Remuneración trabajo ordinario y suplementario
    p.mb-4 Según la jornada laboral acordada entre las partes y la efectivamente desarrollada, se puede presentar trabajo suplementario relacionado a continuación:


    
    .tarjeta.px-4.py-5(style="background-color:#F9F7F4 ").mb-5
      .timeline-vertical
        .timeline-item(v-for="(item, i) in timelineItems" :key="i")
          .timeline-icon
            img(:src="require(`@/assets/curso/temas/${item.icon}`)", alt="").mx-auto
          .timeline-dot(v-if="i !== timelineItems.length - 1")
          .timeline-content
            h4 {{ item.title }}
            p {{ item.desc }}
    .row.justify-content-center.mb-5
      .col-lg-9
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 2.
          span Factores y porcentajes de recargo por clase de trabajo suplementario y recargos en Colombia    
        .tabla-a.color-acento-botones.mb-5
          table#tabla-2
            colgroup
              col(style="width: 40%")
              col(style="width: 30%")
              col(style="width: 30%")
            caption Fuente: Arts. 168 y 179 CST
            thead.border-0(style="background-color: #FD9826")
              th Clase de trabajo
              th Recargo %
              th Factor
            tbody
              tr
                td.text-left Extra diurno ordinario
                td 25
                td 1.25
              tr(style="background-color: #fdecd8;")
                td.text-left Extra nocturno ordinario
                td 75
                td 1.75
              tr
                td.text-left Dominical y festivo
                td 75
                td 1.75
              tr(style="background-color: #fdecd8;")
                td.text-left Dominical y festivo nocturno
                td 110
                td 2.10
              tr
                td.text-left Extra diurno festivo
                td 100
                td 2.00
              tr(style="background-color: #fdecd8;")
                td.text-left Extra nocturno festivo
                td 150
                td 2.50
              tr
                td.text-left Recargo nocturno
                td 35
                td 0.35    
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 4.
          span Flujo de la distribución de la nómina de fábrica
        img.mb-3(src='@/assets/curso/temas/57.svg', alt='Diagrama de flujo que detalla el proceso para calcular el costo de la mano de obra directa e indirecta, incluyendo salario base, días trabajados, deducciones, tipos de trabajadores, exclusiones, y prestaciones sociales.')
        figcaption Tomada de Sinisterra (2017).
    .titulo-tres: h3 Deducciones
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        .p-4(style="background-color: #FEEAD4").mb-4
          p.mb-0 Son el valor que se le descuenta a cada trabajador. Entre estos están los aportes a salud y pensión que le corresponden al empleado, las libranzas, los embargos judiciales, la retención en la fuente si hubiere, y cualquier otro descuento autorizado por el empleado (Gerencie, 2017).
        p.mb-4 Conceptos principales para descontar al trabajador:
        .row.justify-content-center.mb-5
          .col-lg-6.mb-lg-0.mb-3
            ul.lista-ul
              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 Aportes a salud 4 %.
              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 Aportes a pensión 4 %.
              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 Aportes a fondo de solidaridad pensional, el porcentaje depende del valor devengado y comienza desde 1% para los trabajadores que devenguen en el periodo cuatro o más salarios mínimos legales vigentes.
          .col-lg-6.mb-lg-0.mb-3
            ul.lista-ul
              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 Cuotas sindicales.
              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 Aportes a cooperativas.
              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 Embargos judiciales.
              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 Cuotas o créditos a entidades financieras “libranza”.
              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 Deudas del trabajador con la entidad o empresa.
              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 Retención en la fuente.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/58.svg', alt='')
    .titulo-tres: h3 Seguridad social y parafiscales
    p.mb-4 A continuación, se relacionan las siguientes definiciones:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.p-5(style="background-color: #412976 ")
        .row.justify-content-center.mb-0
          .col-2
            figure
              img(src='@/assets/curso/temas/59.svg', alt='')
          .col-10
            .p-1.d-inline-block(style="background-color:#FD9826 ").mb-3
              h5.mb-0 Seguridad Social
            p.text-white Es el derecho que tiene toda persona natural, y en especial todo trabajador, a que se le garantice la seguridad social integral, entendida ésta como la cobertura en salud, riesgos de invalidez, vejez y muerte, igualmente cobertura en accidentes de trabajo (Gerencie, 2018).
        h2.text-center
        p
      .col-md.tarjeta.p-5(style="background-color:#E8E8E8 ")
        .row.justify-content-center.mb-0
          .col-2
            figure
              img(src='@/assets/curso/temas/60.svg', alt='')
          .col-10
            .p-1.d-inline-block(style="background-color:#FD9826 ").mb-3
              h5.mb-0 Parafiscales
            p Son los pagos que las entidades o empresas y personas naturales realizan a: Servicio Nacional de Aprendizaje SENA, Instituto Colombiano de Bienestar Familiar ICBF y Caja de Compensación Familiar CCF con el propósito de financiar actividades sociales que presta el estado por intermedio de estas entidades.
    .row.justify-content-center.mb-3
      .col-lg-10
        .bloque-texto-f.pt-4.px-5.mb-5(style="background-color: #DDEFFD ")
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto Estarán exoneradas del pago de los aportes parafiscales a favor del Servicio Nacional de Aprendizaje (SENA), del Instituto Colombiano de Bienestar Familiar (ICBF) y las cotizaciones al Régimen Contributivo de Salud, las sociedades y personas jurídicas y asimiladas contribuyentes declarantes del impuesto sobre la renta y complementarios, correspondientes a los trabajadores que devenguen, individualmente considerados, menos de diez (10) salarios mínimos mensuales legales vigentes
          .bloque-texto-f__autor.mb-3
            h3.mb-0 Art.114-1 del Estatuto Tributario. Exoneración de aportes
    p.mb-4 Así mismo, las personas naturales empleadoras estarán exoneradas de la obligación de pago de los aportes parafiscales al SENA, al ICBF y al Sistema de Seguridad Social en Salud por los empleados que devenguen menos de diez (10) salarios mínimos legales mensuales vigentes. Lo anterior no aplicará para personas naturales que empleen menos de dos trabajadores, los cuales seguirán obligados a efectuar los aportes de que trata este inciso (Accounter, 2017).
    .titulo-tres: h3 Las apropiaciones
    p.mb-4 Son los pagos que la empresa debe hacer sobre la nómina, que son adicionales a los pagos que hace al trabajador, y que están a cargo en su totalidad.
      br
      br
      |Aportes a la seguridad social y parafiscales:
    .row.justify-content-center.mb-5
      .col-lg-9
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 3.
          span Distribución porcentual de aportes a la seguridad social y parafiscales en Colombia
        .tabla-a.color-acento-botones.mb-5
          table#tabla-3
            colgroup
              col(style="width: 25%")
              col(style="width: 25%")
              col(style="width: 25%")
              col(style="width: 25%")
            caption Fuente: Arts. 168 y 179 CST
            thead.border-0
              tr(style="background-color: #f58221")
                th Tipo de entidad
                th % Aporte empleador
                th % Aporte empleado
                th % Total aporte
            tbody
              tr
                td.text-left Salud
                td 8.5 %
                td 4 %
                td 12.5 %
              tr(style="background-color: #FEEAD4;")
                td.text-left Pensión
                td 12 %
                td 4 %
                td 16 %
              tr
                td.text-left ARL
                td 0.522 %
                td 0 %
                td 0.522 %
              tr(style="background-color: #FEEAD4;")
                td.text-left Fondo de solidaridad
                td 0 %
                td 1 %
                td 1 %
              tr
                td.text-left Caja de compensación
                td 4 %
                td 0 %
                td 4 %
              tr(style="background-color: #FEEAD4;")
                td.text-left ICBF
                td 3 %
                td 0 %
                td 3 %
              tr
                td.text-left SENA
                td 2 %
                td 0 %
                td 2 %  
    .row.justify-content-center.mb-5
      .col-lg-8
        LineaTiempoD.color-acento-contenido
          div(numero="1" titulo="ARL")
            p.mb-4 La cotización de ARL varía según el riesgo a que se exponga cada trabajador y es pagada en su totalidad por el empleador. Los aportes varían entre un 0,348 % para el nivel I y 8,7 % para el nivel V de riesgo. La tarifa más común es del 0,522 %.
          div(numero="2" titulo="Fondo de solidaridad")
            p.mb-4 Los trabajadores con sueldos entre 4 y 16 salarios mínimos deben realizar un aporte adicional del 1 %.
            p Los trabajadores que devenguen mensualmente 16 salarios mínimos o más, adicional al 1 %, deben hacer un aporte adicional del 0,2 % por cada sueldo mínimo adicional que devenguen hasta los 20 salarios mínimos.
          div(numero="3" titulo="Prestaciones sociales")
            p.mb-4 Es el conjunto de beneficios adicionales al salario que la ley ha otorgado a los trabajadores con el fin de contribuir a su bienestar; constituyen un gasto de los empleadores, quienes deben causarse o reconocerlos con cargo a los gastos por prestaciones sociales que adeudan a los trabajadores y constituir las provisiones sobre su nómina mensual. 
          div(numero="4" titulo="Cesantías")
            p.mb-4 Corresponden a 30 días por año trabajado; se deben liquidar al final de cada año o al finalizar el contrato de trabajo. El valor liquidado se debe consignar en el fondo de cesantías que el empleado haya elegido, y en el caso de terminación del contrato de trabajo, el valor liquidado se paga directamente al trabajado.
          div(numero="5" titulo="Intereses sobre cesantías")
            p.mb-4 El empleador debe pagar a sus empleados intereses sobre las cesantías que tenga acumuladas a 31 de diciembre, a una tasa del 12 % anual. 
          div(numero="6" titulo="Prima de servicios")
            p.mb-4 Corresponde a 30 días por año trabajado; se debe pagar en dos cuotas en el año; la primera a más tardar el último día del mes de junio y la segunda durante los primeros 20 días del mes de diciembre.
          div(numero="7" titulo="Vacaciones")
            p.mb-4 Corresponden a 15 días hábiles de descanso remunerado por cada año laborado, o proporcional por fracción de año si el tiempo laborado es inferior a un año (Prestaciones sociales, s.f., p. 1).
      .col-lg-4.col-7: img(src='@/assets/curso/temas/61.png', alt='') 
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3  Liquidación de la nómina
    .fondo-sly.mn.p-5.mb-5
      .tarjeta.bg-white.p-5
        SlyderA(tipo='b')
          div
            p.mb-4 Para liquidar de manera adecuada la nómina de producción se debe tener en cuenta el inciso primero del artículo 114-1 del Estatuto Tributario:
            .bloque-texto-f.pt-4.px-5.mb-5(style="background-color: #DDEFFD ")
              .bloque-texto-f__comillas
                i.fas.fa-quote-left
                i.fas.fa-quote-right
              h4.text-regular.bloque-texto-f__texto Estarán exoneradas del pago de los aportes parafiscales a favor del Servicio Nacional de Aprendizaje (SENA), del Instituto Colombiano de Bienestar Familiar (ICBF) y las cotizaciones al Régimen Contributivo de Salud, las sociedades y personas jurídicas y asimiladas contribuyentes declarantes del impuesto sobre la renta y complementarios, correspondientes a los trabajadores que devenguen, individualmente considerados, menos de diez (10) salarios mínimos mensuales legales vigentes
              .bloque-texto-f__autor.mb-3
                h3.mb-0 Estatuto Tributario Nacional, art. 114.
          div
            p.mb-4 Inciso segundo del artículo 114-1 del Estatuto Tributario:
            .bloque-texto-f.pt-4.px-5.mb-5(style="background-color: #DDEFFD ")
              .bloque-texto-f__comillas
                i.fas.fa-quote-left
                i.fas.fa-quote-right
              h4.text-regular.bloque-texto-f__texto Así mismo las personas naturales empleadoras estarán exoneradas de la obligación de pago de los aportes parafiscales al SENA, al ICBF y al Sistema de Seguridad Social en Salud por los empleados que devenguen menos de diez (10) salarios mínimos legales mensuales vigentes. Lo anterior no aplicará para personas naturales que empleen menos de dos trabajadores, los cuales seguirán obligados a efectuar los aportes de que trata este inciso.
              .bloque-texto-f__autor.mb-3
                h3.mb-0 Estatuto Tributario Nacional, art. 114.
          div
            p.mb-4 El parágrafo 3 del artículo 903 del Estatuto Tributario señala lo siguiente respecto a estos contribuyentes:
            .bloque-texto-f.pt-4.px-5.mb-5(style="background-color: #DDEFFD ")
              .bloque-texto-f__comillas
                i.fas.fa-quote-left
                i.fas.fa-quote-right
              h4.text-regular.bloque-texto-f__texto Los contribuyentes que opten por acogerse al impuesto unificado bajo el régimen simple de tributación SIMPLE deberán realizar los respectivos aportes al Sistema General de Pensiones de conformidad con la legislación vigente y estarán exonerados de aportes parafiscales en los términos del artículo 114-1 del Estatuto Tributario 
              .bloque-texto-f__autor.mb-3
                h3.mb-0 Estatuto Tributario Nacional, art. 114.
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p.mb-4 Además, el Decreto 1174 de 1991, artículo 1°. El salario integral a que se refiere el numeral 2° del artículo 132 del Código Sustantivo del Trabajo, modificado por el artículo 18 de la Ley 50 de 1990, será una sola suma convenida libremente y por escrito entre el trabajador y el empleador, suma que será la base para las cotizaciones del Instituto de Seguros Sociales, la liquidación de las indemnizaciones a que se refiere el artículo 64 del Código Sustantivo del Trabajo y la remuneración por vacaciones (Gerencie, 2020).
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-2.col-2.mb-lg-0.mb-3: img(src='@/assets/curso/temas/62.svg', alt='')   
          .col-lg-10
            p.mb-0  Lo anterior, corresponde al proceso mediante el cual se determinan el devengo, deducciones y neto a pagar al colaborador. Además, se tiene en cuenta apropiaciones con el fin de realizar la respectiva provisión de acuerdo con el periodo de pago y políticas establecidas para el área de producción.
      .col-lg-5.col-7: img(src='@/assets/curso/temas/63.png', alt='')    
    .titulo-tres: h3 Elementos en la liquidación de nómina
    .row.justify-content-center.mb-5
      .col-lg-6.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/64.png', alt='')
      .col-lg-6
        ol.lista-ol--cuadro
          li.d-flex
            .lista-ol--cuadro__vineta
              span A
            p.mb-0 Devengados.
          li.d-flex
            .lista-ol--cuadro__vineta
              span B
            p.mb-0 Deducciones.
          li.d-flex
            .lista-ol--cuadro__vineta
              span C
            p.mb-0 Neto a pagar.
          li.d-flex
            .lista-ol--cuadro__vineta
              span D
            p.mb-0 Aportes parafiscales y seguridad social.
          li.d-flex
            .lista-ol--cuadro__vineta
              span E
            p.mb-0 Prestaciones sociales.
    .titulo-tres: h3 Fases y liquidación de nómina
    .fondo-sly.mn.p-5.mb-5
      .tarjeta.bg-white.p-5
        SlyderA(tipo='b')
          .row.justify-content-center
            .col-lg-8.mb-lg-0.mb-3
              h4 Devengado
              p.mb-4 Se debe liquidar y relacionar cada concepto por separado correspondiente a lo ganado y al tiempo laborado.
              ul.lista-ul
                li.d-flex
                  i.fas.fa-angle-right
                  p.mb-0 Sueldo básico devengado = sueldo básico concertado entre las partes dividido en 30 multiplicado por días trabajados.
                li.d-flex
                  i.fas.fa-angle-right
                  p.mb-0 Auxilio de transporte devengado = auxilio transporte vigente dividido en 30 multiplicado por días trabajados.
                li.d-flex
                  i.fas.fa-angle-right
                  p.mb-0 Demás conceptos, liquidados previamente.
            .col-lg-4.col-7: img(src='@/assets/curso/temas/65.svg', alt='')
          .row.justify-content-center
            .col-lg-8.mb-lg-0.mb-3
              h4 Deducciones
              p.mb-4 Se debe liquidar y relacionar cada concepto por separado correspondiente a lo descontado (salud, pensión, retención en la fuente, otros descuentos).
              ul.lista-ul
                li.d-flex
                  i.fas.fa-angle-right
                  p.mb-0 Salud = Ingreso base de cotización “IBC” (total devengado menos auxilio de transporte) multiplicado por porcentaje vigente para el trabajador (4 % 2020).
                li.d-flex
                  i.fas.fa-angle-right
                  p.mb-0 Pensión = Ingreso base de cotización “IBC” (total devengado menos auxilio de transporte) multiplicado por porcentaje vigente para el trabajador (4 % 2020).
                li.d-flex
                  i.fas.fa-angle-right
                  p.mb-0 Fondo de solidaridad pensional = Ingreso base de cotización “IBC” (total devengado menos auxilio de transporte) multiplicado por porcentaje vigente para el trabajador, a partir de 4 salarios mínimos vigentes.
                li.d-flex
                  i.fas.fa-angle-right
                  p.mb-0 Retención en la fuente. Según previa liquidación.
            .col-lg-4.col-7: img(src='@/assets/curso/temas/65.svg', alt='')
          .row.justify-content-center
            .col-lg-8.mb-lg-0.mb-3
              h4 Neto a pagar
              p.mb-4 Según la liquidación de cada trabajador se dispone a restar el total de deducciones al total devengado
            .col-lg-4.col-7: img(src='@/assets/curso/temas/65.svg', alt='')
          .row.justify-content-center
            .col-lg-8.mb-lg-0.mb-3
              h4 Aportes parafiscales y seguridad social
              p.mb-4 Teniendo en cuenta el ingreso base de cotización “IBC” se calculará los siguientes aportes, que debe realizar el empleador:
              .row.justify-content-center
                .col-lg-6
                  ul.lista-ul
                    li.d-flex
                      i.fas.fa-angle-right
                      p.mb-0 SENA 2 % (revisar exoneración).
                    li.d-flex
                      i.fas.fa-angle-right
                      p.mb-0 ICBF 3 % (revisar exoneración).
                    li.d-flex
                      i.fas.fa-angle-right
                      p.mb-0 Caja de compensación 4 %.
                .col-lg-6
                  ul.lista-ul
                    li.d-flex
                      i.fas.fa-angle-right
                      p.mb-0 Salud 8,5 % (revisar exoneración).
                    li.d-flex
                      i.fas.fa-angle-right
                      p.mb-0 ARL (según riesgo de cada trabajador).
                    li.d-flex
                      i.fas.fa-angle-right
                      p.mb-0 Pensión 12 %.
            .col-lg-4.col-7: img(src='@/assets/curso/temas/65.svg', alt='')
          .row.justify-content-center
            .col-lg-8.mb-lg-0.mb-3
              h4 Prestaciones sociales
              p.mb-4 Teniendo en cuenta el total devengado de cada trabajador, se liquidará el valor de la provisión a cada una de las prestaciones o beneficios a empleados.
              ul.lista-ul
                li.d-flex
                  i.fas.fa-angle-right
                  p.mb-0 Cesantías = Total devengado x 8,33 %.
                li.d-flex
                  i.fas.fa-angle-right
                  p.mb-0 Intereses sobre cesantías = Total devengado x 1 %.
                li.d-flex
                  i.fas.fa-angle-right
                  p.mb-0 Prima de servicios = Total devengado x 8,33 %.
                li.d-flex
                  i.fas.fa-angle-right
                  p.mb-0 Vacaciones = Total devengado x 4,17 %.
            .col-lg-4.col-7: img(src='@/assets/curso/temas/65.svg', alt='')
    p.mb-4 A continuación, se refleja la contabilización de la nómina de producción:
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 4.
          span Registro contable de costos laborales y beneficios legales
        .tabla-a.color-acento-botones.mb-5
            table#tabla-4
              colgroup
                col(style="width: 20%")
                col(style="width: 40%")
                col(style="width: 20%")
                col(style="width: 20%")
              //- caption Fuente: Arts. 168 y 179 CST
              thead.border-0
                tr(style="background-color: #f58221") 
                  th Código
                  th Cuenta
                  th Débito
                  th Crédito
              tbody
                tr
                  td 720506
                  td.text-left Sueldos
                  td.text-right $328.116,00
                  td.text-right -
                tr(style="background-color: #fdecd8;")
                  td 720527
                  td.text-left Auxilio de transporte
                  td.text-right $91.032,00
                  td.text-right -
                tr
                  td 720530
                  td.text-left Cesantías
                  td.text-right $76.565,00
                  td.text-right -
                tr(style="background-color: #fdecd8;")
                  td 720533
                  td.text-left Intereses de cesantías
                  td.text-right $9.187,00
                  td.text-right -
                tr
                  td 720536
                  td.text-left Prima de servicios
                  td.text-right $76.565,00
                  td.text-right -
                tr(style="background-color: #fdecd8;")
                  td 720539
                  td.text-left Vacaciones
                  td.text-right $34.532,00
                  td.text-right -
                tr
                  td 720568
                  td.text-left Aportes a administradores de riesgos profesionales
                  td.text-right $4.322,00
                  td.text-right -
                tr(style="background-color: #fdecd8;")
                  td 720570
                  td.text-left Aportes de fondos de pensiones
                  td.text-right $99.373,00
                  td.text-right -
                tr
                  td 720572
                  td.text-left Aportes cajas de compensación familiar
                  td.text-right $33.124,00
                  td.text-right -
                tr(style="background-color: #fdecd8;")
                  td 237005
                  td.text-left Aportes a entidades promotoras de salud EPS
                  td.text-right -
                  td.text-right $33.124,00
                tr
                  td 237006
                  td.text-left Aportes a administradores de riesgos profesionales
                  td.text-right -
                  td.text-right $4.322,00
                tr(style="background-color: #fdecd8;")
                  td 237010
                  td.text-left Aportes al I.C.B.F, SENA y cajas de compensación
                  td.text-right -
                  td.text-right $33.124,00
                tr
                  td 238030
                  td.text-left Fondos de cesantías y/o pensiones
                  td.text-right -
                  td.text-right $132.498,00
                tr(style="background-color: #fdecd8;")
                  td 261005
                  td.text-left Cesantías
                  td.text-right -
                  td.text-right $76.565,00
                tr
                  td 261010
                  td.text-left Intereses sobre cesantías
                  td.text-right -
                  td.text-right $9.187,00
                tr(style="background-color: #fdecd8;")
                  td 261015
                  td.text-left Vacaciones
                  td.text-right -
                  td.text-right $34.532,00
                tr
                  td 261020
                  td.text-left Prima de servicios
                  td.text-right -
                  td.text-right $76.565,00
                tr(style="background-color: #fdecd8;")
                  td 250501
                  td.text-left Empleados
                  td.text-right -
                  td.text-right $852.899,00
                tr(style="font-weight: bold; background-color: #fff3e6;")
                  td(colspan="2").text-left #[strong Sumas iguales]
                  td.text-right #[strong $1.252.816,00]
                  td.text-right #[strong $1.252.816,00]
    .p-5(style="background-color: #EDF7FE").mb-5
      p.mb-0 Es importante explorar las páginas sugeridas y la biblioteca SENA para ampliar los conocimientos en cuanto al tema.
          











</template>

<script>
import Linea from '@/views/Linea.vue'
export default {
  name: 'Tema2',
  components: {
    Linea,
  },
  data: () => ({
    timelineItems: [
      {
        icon: 'icono1.svg',
        title: 'Hora extraordinaria diurna "HEOD"',
        desc:
          'La hora extra diurna es la que se labora luego de la jornada laboral, y entre las 6 de la mañana y las 9 de la noche.',
      },
      {
        icon: 'icono2.svg',
        title: 'Hora extraordinaria nocturna "HEON"',
        desc:
          'La hora extra nocturna es la que se labora luego de la jornada laboral, y entre las 9 de la noche y las 6 de la mañana.',
      },
      {
        icon: 'icono3.svg',
        title: 'Hora dominical y festivo diurna',
        desc:
          'Se presenta durante la jornada ordinaria que se labora el domingo o festivo y entre las 6 de la mañana y las 9 de la noche.',
      },
      {
        icon: 'icono4.svg',
        title: 'Hora dominical y festivo nocturna',
        desc:
          'Se presenta durante la jornada ordinaria que se labora el domingo o festivo, entre las 9 de la noche y las 6 de la mañana.',
      },
      {
        icon: 'icono5.svg',
        title: 'Hora extra dominical diurna "HEDD"',
        desc:
          'La hora extra dominical diurna es la que se labora luego de la jornada laboral, y entre las 6 de la mañana y las 9 de la noche; siempre y cuando se trabaje en un domingo o festivo y, se trabajen más de 8 horas diarias si esa es la jornada ordinaria.',
      },
      {
        icon: 'icono6.svg',
        title: 'Hora extra-dominical nocturna "HEDN"',
        desc:
          'La hora extra dominical nocturna es la que se labora luego de la jornada laboral, entre las 9 de la noche y las 6 de la mañana, cuando se labora domingo o festivo.',
      },
      {
        icon: 'icono7.svg',
        title: 'Recargo nocturno',
        desc:
          'El numeral 1 del artículo 168 del Código Sustantivo del Trabajo señala que el trabajo nocturno se remunera con un recargo del 35 %.',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.timeline-vertical
  display: flex
  flex-direction: column
  align-items: flex-start
  position: relative
  @media (min-width: $bp-min-lg)
    margin-left: 1.5rem

.timeline-item
  display: flex
  align-items: flex-start
  position: relative
  margin-bottom: 2.5rem

.timeline-icon
  width: 90px
  height: 90px
  background: transparent
  display: flex
  align-items: center
  justify-content: center
  position: relative
  z-index: 2
  @media (max-width: $bp-max-sm)
    width: 60px
    height: 60px

.timeline-dot
  width: 3px
  height: 80px
  background: repeating-linear-gradient(to bottom, #3d4a5c 0, #3d4a5c 6px, transparent 6px, transparent 12px)
  position: absolute
  left: 45px
  top: 60px
  z-index: 1
  @media (max-width: $bp-max-md)
    height: 120px
  @media (max-width: $bp-max-sm)
    display: none


.timeline-content
  margin-left: 1.5rem
  width: 80%
  h4
    margin: 0
    font-weight: bold
    @media (max-width: $bp-max-md)
      font-size: 0.9em
  p
    margin: 0.5rem 0 0 0
    @media (max-width: $bp-max-md)
      font-size: 0.92em
      line-height: 1.25

#tabla-2, #tabla-3, #tabla-4
  table-layout: fixed
  width: 100%


#tabla-2
  margin-left: auto
  margin-right: auto
  max-width: 800px

#tabla-3
  margin-left: auto
  margin-right: auto
  max-width: 800px
</style>
