<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondo-1
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Costos

    div(style="background-color: #DDEFFD ")(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/4.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Es de recordar que los costos hacen énfasis al dinero que una empresa invierte para la producción de algún tipo de bien o servicio, es decir, son los recursos económicos que se utilizan para la producción, donde se incluyen los valores del producto y/o prestación del servicio, con el fin de determinar el precio de venta para ofrecer en el mercado.

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1  Concepto de contabilidad de costos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p(data-aos="fade-left") En el ámbito empresarial este concepto es aplicable a los diferentes tipos de contabilidad, como pueden ser financiera, administrativa o de costos; en esta unidad se hace énfasis en la contabilidad de costos, teniendo en cuenta su importancia en las diferentes empresas.
        p(data-aos="fade-right") La contabilidad de costos hace referencia al proceso de recopilar información que permita calcular el valor de la producción de un bien o prestación de servicios para planear, controlar y tomar decisiones que permitan generar rentabilidad a la empresa.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/5.png', alt='').mx-auto.mt-4.mt-lg-0
    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2  Importancia y objetivos de la contabilidad de costos
    p.mb-4(data-aos='fade-right') Esta contabilidad es una variable muy importante dentro de una organización, teniendo en cuenta que:
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        ul.lista-ul
          li.d-flex(data-aos='fade-left')
            i.fas.fa-angle-right
            p.mb-0 Es una contabilidad analítica en la cual se pueden identificar todas las partes involucradas para dar vida a un producto o un servicio específico.
          li.d-flex(data-aos='fade-right')
            i.fas.fa-angle-right
            p.mb-0 Los costos permiten ver con claridad cómo está la organización, su punto de partida y de llegada para ajustar algunas variables en el camino del desarrollo de la misma.
          li.d-flex(data-aos='fade-left')
            i.fas.fa-angle-right
            p.mb-0 Contribuye a la toma de decisiones para mejorar, ver el crecimiento y la evolución de la organización en el tiempo.
          li.d-flex(data-aos='fade-right')
            i.fas.fa-angle-right
            p.mb-0 Controla el manejo de los recursos y la forma de optimizarlos.
          li.d-flex(data-aos='fade-left')
            i.fas.fa-angle-right
            p.mb-0 Permite a la alta gerencia poseer un mayor control sobre los recursos utilizados para el desarrollo de la actividad económica.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/6.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.d-none.d-lg-block: img(src='@/assets/curso/temas/7.png', alt='').mx-auto.mb-4.mb-lg-0
      .col-lg-7
        p.mb-4(data-aos='fade-right') La contabilidad de costos persigue como objetivos principales:
        
        ol.lista-ol--cuadro.lista-ol--cuadro--separador
          li.d-flex(data-aos='fade-left')
            .lista-ol--cuadro__vineta
              span A
            p.mb-0 Planificar y controlar las operaciones y los costos.
          li.d-flex(data-aos='fade-right')
            .lista-ol--cuadro__vineta
              span B
            p.mb-0 Determinación del costo unitario y su valoración (ya sea bienes o servicios).
          li.d-flex(data-aos='fade-left')
            .lista-ol--cuadro__vineta
              span C
            p.mb-0 Servir de herramienta administrativa para la toma de decisiones.
          li.d-flex(data-aos='fade-right')
            .lista-ol--cuadro__vineta
              span D
            p.mb-0 Facilitar el control, asignación y optimización de recursos.
          li.d-flex(data-aos='fade-left')
            .lista-ol--cuadro__vineta
              span E
            p.mb-0 Es una herramienta para la elaboración de presupuestos (Emprendefx.com,s.f.,p.).
    p.mb-4(data-aos='fade-right') A continuación, se realiza una breve descripción de los objetivos:
    .row.justify-content-center.mb-5
      .col-lg-3.col-7.d-none.d-lg-block: img(src='@/assets/curso/temas/8.png', alt='').mx-auto.mb-4.mb-lg-0
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--morada")
          div(titulo="Planificar y controlar las operaciones y los costos")
            p.mb-4(data-aos='fade-left') Es necesario que toda empresa cuente con un proceso de planificación, en la que se van a establecer todas las metas y objetivos que deben cumplir en diferentes periodos (corto, mediano y largo plazo).
          div(titulo="Determinar del costo unitario y su valoración")
            p.mb-4(data-aos='fade-right') Algunas empresas no aplican la contabilidad de costos en la producción de sus bienes, y muchas de ellas no conocen cuánto les cuesta producir, distribuir y administrar sus productos o servicios; y, por ende, lo que logran es un fracaso silencioso.
            p(data-aos='fade-left') Podría decirse que el principal objetivo de la contabilidad de costos es la correcta determinación del costo unitario; ya que una vez definido este, se puede fijar un precio de venta.
            p(data-aos='fade-right') La determinación y valoración del costo unitario pretenden:
            ul.lista-ul
              li.d-flex(data-aos='fade-left')
                i.fas.fa-angle-right
                p.mb-0 Conocer el costo total de producción.
              li.d-flex(data-aos='fade-right')
                i.fas.fa-angle-right
                p.mb-0 Tomar decisiones sobre comprar o fabricar un producto.
              li.d-flex(data-aos='fade-left')
                i.fas.fa-angle-right
                p.mb-0 Valuar la producción del período.
              li.d-flex(data-aos='fade-right')
                i.fas.fa-angle-right
                p.mb-0 Establecer un precio de venta determinando el margen de utilidad por cada producto.
          div(titulo="Servir de herramienta administrativa para la toma de decisiones")
            p.mb-4(data-aos='fade-left') Los costos dentro de una empresa pueden influir en la toma de decisiones. La contabilidad de costos dispone los instrumentos necesarios para determinar las políticas de producto o servicio más convenientes.
          div(titulo="Facilitar el control, asignación y optimización de recursos")
            p.mb-4(data-aos='fade-right') De acuerdo con las necesidades de producción y los recursos asignados, se realizan registros que permitan controlar y optimizar los mismos.
          div(titulo="Es una herramienta para la elaboración de presupuestos")
            p.mb-4(data-aos='fade-left') Para la elaboración del presupuesto de producción se requiere obtener información actualizada sobre los elementos y variables que intervienen en el proceso con el fin de proyectar conforme a las políticas empresariales (Emprendefx.com, s.f., p. 1).
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3  Diferencia entre costo de venta y costo de producción
    p.mb-4(data-aos='fade-left') En este apartado se conocerá un poco más de las definiciones de los costos y, de esta manera, seguir fortaleciendo el proceso formativo.
    TabsB.color-acento-contenido
      .py-4.py-md-5(titulo="¿Qué es un costo de venta?" :icono="require('@/assets/curso/temas/icon.svg')")
        .p-4
          .row.justify-content-center.mb-5.align-items-center
            .col-lg-4.col-7(data-aos='fade-left'): img(src='@/assets/curso/temas/9.png', alt='')
            .col-lg-8
              h4(data-aos='fade-right') ¿Qué es un costo de venta?
              p.mb-4(data-aos='fade-left') Este se da al comercializar un bien (producto), y hace referencia al valor que se genera al comprar un producto que se espera vender; es decir, es el valor de adquisición.
              p(data-aos='fade-left') Cabe resaltar que, al vender el producto, los recursos obtenidos no se consideran en su totalidad ganancias para el empresario; teniendo en cuenta que se deben asumir costos y gastos para el buen funcionamiento de la empresa. Una vez se realice la depuración se obtiene la utilidad y/o ganancias de acuerdo con el margen de utilidad que se esté trabajando.
      .py-4.py-md-5(titulo=" ¿Qué es un costo de producción?" :icono="require('@/assets/curso/temas/icon.svg')")
        .p-4
          .row
            .col-lg-4.col-7: img(src='@/assets/curso/temas/10.png', alt='')
            .col-lg-8
              h4  ¿Qué es un costo de producción?
              p.mb-0 Son los recursos necesarios para elaborar o crear un bien o un servicio. Para determinar su valor se tienen en cuenta los elementos del costo: materia prima directa, mano de obra directa y Costos Indirectos de Fabricación (CIF).
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4  Diferencia entre costo y gasto
    p.mb-4(data-aos='fade-left') Con el fin de avanzar satisfactoriamente en el proceso formativo, es importante apropiarse de los diferentes conceptos; por lo que, a continuación, se analiza la diferencia entre costo y gasto:
    .titulo-tres: h3 Costo
    p.mb-4(data-aos='fade-right') Es el valor que se genera al producir un bien o prestar un servicio, el costo es recuperable al realizar la venta de este. Para identificar el costo es fundamental conocer el tipo de empresa, la cual puede ser comercial, industrial y de servicios; conforme a ello se identifica lo que cuesta el bien o servicio. A continuación, se observa el comparativo de cada una de estas mediante un ejemplo:
    TabsC.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Empresa comercial")
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-5.col-7.mb-4.mb-md-0: img(src='@/assets/curso/temas/11.png', alt='')
            
          .col-lg-7
            h4(data-aos='fade-left') Empresa comercial
            p(data-aos='fade-right') El costo en este tipo de empresa es el valor de adquisición del producto que se desea vender.
            p(data-aos='fade-left') #[strong Ejemplo:]
            p(data-aos='fade-right') La empresa Surtimodas S.A.S. se dedica a vender Jeans. Por lo tanto, el costo del producto es el valor de la compra del Jean, posteriormente se fija el precio de venta al público.
      .py-4.py-md-5(titulo="Empresa industrial")
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-5.col-7.mb-4.mb-md-0: img(src='@/assets/curso/temas/12.png', alt='')
            
          .col-lg-7
            h4 Empresa industrial
            p Para determinar el costo en empresas manufactureras intervienen los tres elementos del costo. Materia Prima Directa (MPD), Mano de Obra Directa (MOD) y los Costos Indirectos de Fabricación (CIF).
            p #[strong Ejemplo]
            p La empresa #[em Fashion’s] se dedica a producir Jeans. Los elementos del costo son:
            p #[b MPD:] tela, botones, cremalleras, hilos.
            p #[b MOD:] salario de los operarios que confeccionan el jean, como lo son: cortadores, fileteadoras, hojalateros, cosedores, bordadores, etc.
            p #[b CIF:] depreciación y mantenimiento de maquinaria y equipo, arrendamiento, seguros y servicios de la planta de producción, etc.
      .py-4.py-md-5(titulo="Empresa de servicios")
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-5.col-7.mb-4.mb-md-0: img(src='@/assets/curso/temas/13.png', alt='')
            
          .col-lg-7
            h4 Empresa de servicios
            p En este tipo de empresa prima el factor intelectual y los insumos que se requieren para llevar a cabo la prestación del servicio.
            p #[strong Ejemplo]
            p En una empresa de servicio de telefonía interviene en el costo: pago de servicios públicos de telefonía fija y celular, licencias de #[em software], salarios de los operadores, insumos de papelería, tintas.
    .titulo-tres: h3 Gasto
    .row.justify-content-center.mb-5
      .col-lg-5.mb-lg-0.mb-3
        .p-5.h-100(style="background-color: #DDEFFD ").d-flex.align-items-center
          p.mb-0 Es el pago que se realiza por la contraprestación, no es recuperable y hace parte de los gastos de funcionamiento de la empresa, entre ellos figuran los gastos operacionales de administración y ventas; de acuerdo con su naturaleza se reconocen de forma mensual, cumpliendo con las necesidades de la empresa, por ejemplo: gastos de sueldos, pago de arrendamiento, servicios públicos, papelería, seguros, entre otros.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/14.svg', alt='')
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.5  Diferencia entre costo del producto y costo del periodo
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El costo del producto o servicio es el que se da al realizar la adquisición de los tres elementos del costo: materias primas, mano de obra y costos indirectos de fabricación, para poder producir. Mientras que los costos del periodo son los gastos en los que se incurre en un periodo de tiempo determinado, los cuales se espera que a futuro no rindan beneficios. Se encuentran clasificados en gastos administrativos, gastos de ventas y gastos financieros. Se pueden tomar como ejemplo los costos del periodo, costos de venta, costos de mercadeo, costos de investigación y desarrollo, entre otros.
    Separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.6  Diferencia entre contabilidad de costos y contabilidad financiera
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-5
        .tarjeta.p-4.h-100(style="background-color: #FED6A8", data-aos='fade-left')
          p.mb-0 La contabilidad de costos, también conocida como contabilidad analítica, es una técnica contable que tiene como finalidad crear un sistema de información que permita conocer cuál es el costo de los productos fabricados. Es un instrumento que sirve de apoyo a la contabilidad financiera, estudiando la estructura de costes en las empresas. La contabilidad de costes consiste en realizar una imputación razonable de costes directos e indirectos que permita obtener información analítica en la que apoyarse para la toma de decisiones por parte de la dirección de la empresa (Sinisterra, 2017, p. 2).
      .col-lg-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/16.png', alt='', data-aos='zoom-in')
      .col-lg-3
        img(src='@/assets/curso/temas/17.svg', alt='', style="max-width: 90px;", data-aos='fade-up')
        p.mb-0(data-aos='fade-left') La contabilidad financiera es una disciplina que consiste en recopilar, ordenar y registrar la información de la actividad económica de una empresa. Es una rama del área de la contabilidad que se ocupa de sistematizar la información de las actividades y la situación económica de una empresa en un momento del tiempo y a lo largo de su desarrollo (Contabilidad financiera, 2021).
    p.mb-4 La contabilidad financiera permite tener un registro histórico y cuantificable de las actividades que realiza una empresa y de los eventos económicos que le afectan.
    Separador
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.7  Normas contables aplicables a los costos de ventas y producción
    p.mb-4 En este contexto es fundamental tener en cuenta la Norma Internacional de Contabilidad (NIC) 2 Inventarios, que se encuentra compuesta así:
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3.col-7
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1.
          span  Elementos de la NIC 2
        img(src='@/assets/curso/temas/18.svg', alt='Diagrama sobre los elementos de la NIC 2 que organiza los inventarios en tres categorías: activos mantenidos para la venta (producto terminado), activos en proceso de producción para la venta (producto en proceso) y activos para ser consumidos en el proceso de producción (materia prima).')
    .titulo-tres: h3 Medición NIC 2
    p.mb-4 Para la medición de inventarios es importante tener en cuenta:
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3.col-7
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 2.
          span  Elementos de la NIC 2
        img(src='@/assets/curso/temas/19.svg', alt='Diagrama sobre la medición del inventario según la NIC 2 que indica la valoración al menor entre el costo y el valor neto realizable, y establece el uso de una fórmula uniforme para inventarios de uso o naturaleza similar dentro de una organización.')
    .p-5(style="background-color: #F3F0EA").mb-5
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-lg-0.mb-3: img(src='@/assets/curso/temas/20.svg', alt='', style="max-width: 90px;")
        .col-lg
          p.mb-0 Según la NIC 2, el costo de inventarios incluye el costo de adquisición, costos de transformación y otros costos atribuibles. Cabe resaltar que los costes de transformación de las existencias comprenderán aquellos costes directamente relacionados con las unidades producidas, tales como la mano de obra directa. También comprenderán una parte, calculada de forma sistemática, de los costes indirectos, variables o fijos, en los que se haya incurrido para transformar las materias primas en productos terminados (NIC 2, s.f., pp. 1-8).
    .titulo-tres: h3 Métodos de valoración
    p.mb-4 Dentro de los métodos de valoración de inventarios se encuentran:
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        .row.justify-content-center.mb-5
          .col-lg-10
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 3.
              span  Métodos de valoración NIC 2
            img(src='@/assets/curso/temas/21b.svg', alt='Diagrama sobre métodos de valoración de inventarios según la NIC 2 que incluye el método PEPS (primeros en entrar, primeros en salir) y el costo promedio ponderado como formas de determinar el valor del inventario.', style="max-width: 505px;").mx-auto
        ul.lista-ul
          li
            i.fas.fa-angle-right
            | #[b Método PEPS:] Primeras en entrar, primeras en salir. Significa que las unidades del inventario quedan valoradas a los últimos precios de las entradas.
          li
            i.fas.fa-angle-right
            | #[b Método Promedio Ponderado:] Hace referencia al cálculo promedio de cada uno de los artículos del inventario.
      .col-lg-5.d-none.d-lg-block.align-self-end: img(src='@/assets/curso/temas/22.svg', alt='', style="max-width: 505px;").mx-auto
    .titulo-tres: h3 Valor neto realizable
    p.mb-4 Es el precio estimado de venta de un activo en el curso normal de la explotación, menos los costes estimados para terminar su producción y los necesarios para llevar a cabo la venta (Varón, 2017, párr. 2).
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/23.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El costo de los inventarios puede no ser recuperable en caso de que los mismos estén dañados, si han devenido parcial o totalmente obsoletos, o bien si sus precios de mercado han caído. Asimismo, el costo de los inventarios puede no ser recuperable si los costos estimados para su terminación o su venta han aumentado. La práctica de rebajar el saldo, hasta que el costo sea igual al valor neto realizable, es coherente con el punto de vista según el cual los activos no deben registrarse en libros por encima de los importes que se espera obtener a través de su venta o uso.
    .tarjeta.color-primario.p-3.mb-5(style="background-color:#412976 ").px-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/24.svg")
        .col
          .row.justify-content-between.align-items-center
            .col-10.mb-3.mb-sm-0
              h3.mb-1(style="color: #FD9826 ") NIC 2 Inventarios.
              p.text-small.text-white Lo invitamos a visitar el siguiente PDF, para conocer Los costos indirectos de fabricación hacen parte de los costos de transformación, según se describe en los párrafos 12 a 14 de la NIC 2 Inventarios
            .col.mb-3.mb-sm-0
              a.boton.color-acento-botones(:href="obtenerLink('downloads/2_NIC.pdf')" target="_blank" type="application/pdf")
                span(style='color: #12263F') Descargar 
                i.fas.fa-file-download(style='color: #12263F')
    .titulo-tres: h3 Norma Internacional de Contabilidad (NIC) 2 Inventarios
    .row.justify-content-center.mb-5
      .col-lg-5.col-7: img(src='@/assets/curso/temas/25.png', alt='')
      .col-lg-7
        p.mb-4(data-aos='fade-right') En abril de 2001 el Consejo de Normas Internacionales de Contabilidad (Consejo) adoptó la NIC 2 Inventarios, que había sido originalmente emitida por el Comité de Normas Internacionales de Contabilidad en diciembre de 1993. La NIC 2 Inventarios reemplazó a la NIC 2 Valoración y presentación de inventarios en el contexto del sistema de costo histórico (originalmente emitida en octubre de 1975). En diciembre de 2003 el Consejo emitió una NIC 2 revisada como parte de su agenda inicial de proyectos técnicos. La NIC 2 revisada también incorporó las guías contenidas en una Interpretación relacionada (SIC-1 Uniformidad - Diferentes fórmulas para el cálculo del costo de los inventarios).
        p.mb-0(data-aos='fade-left') Otras normas han realizado modificaciones consiguientes de menor importancia a la NIC 2. Estas incluyen la NIIF 13 Medición del valor razonable (emitida en mayo de 2011), la NIIF 9 Instrumentos financieros (contabilidad de coberturas y modificaciones a las NIIF 9, NIIF 7 y NIC 39) (emitida en noviembre de 2013), NIIF 15 Ingresos de actividades ordinarias procedentes de contratos con clientes (emitida en mayo de 2014), NIIF 9 Instrumentos financieros (emitida en julio de 2014) y NIIF 16 Arrendamientos (emitida en enero de 2016) (NIC, s.f., pp. 4-16).

    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color: #DDEFFD ", data-aos='fade-right')
          p.mb-0 #[b Objetivo:] El objetivo de esta norma es prescribir el tratamiento contable de los inventarios. Un tema fundamental en la contabilidad de los inventarios es la cantidad de costo que debe reconocerse como un activo, para que sea diferido hasta que los ingresos correspondientes sean reconocidos. Esta norma suministra una guía práctica para la determinación de ese costo, así como para el subsiguiente reconocimiento como un gasto del periodo, incluyendo también cualquier deterioro que rebaje el importe en libros al valor neto realizable. También suministra directrices sobre las fórmulas del costo que se usan para atribuir costos a los inventarios (NIC, s.f., pp. 4-16).
      .col-lg-6.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color: #F3F0EA ", data-aos='fade-left')
          p.mb-4 #[b Alcance:] Esta norma se aplica a todos los inventarios, excepto a: (a) [eliminado] (b) los instrumentos financieros (véanse las NIC 32 Instrumentos financieros: presentación y NIIF 9 Instrumentos financieros); y (c) los activos biológicos relacionados con la actividad agrícola y productos agrícolas en el punto de cosecha o recolección (ver la NIC 41 Agricultura).
          p Esta norma no se aplica en la medición de los inventarios mantenidos por: a) Productores de productos agrícolas y forestales, de productos agrícolas tras la cosecha o recolección, de minerales y de productos minerales, siempre que sean medidos por su valor neto realizable, de acuerdo con prácticas bien consolidadas en esos sectores industriales.
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p.mb-4(data-aos='fade-right') En el caso de que esos inventarios se midan al valor neto realizable, los cambios en este valor se reconocerán en el resultado del periodo en que se produzcan dichos cambios. b) Intermediarios que comercian con materias primas cotizadas, siempre que midan sus inventarios al valor razonable menos costos de venta. En el caso de que esos inventarios se lleven al valor razonable menos costos de venta, los cambios en el importe del valor razonable menos costos de venta se reconocerán en el resultado del periodo en que se produzcan dichos cambios.
        p.mb-0(data-aos='fade-left') Los inventarios a que se ha hecho referencia se miden por su valor neto realizable en ciertas fases de la producción. Ello ocurre, por ejemplo, cuando se han recogido las cosechas agrícolas o se han extraído los minerales, siempre que su venta esté asegurada por un contrato a plazo sea cual fuere su tipo o garantizada por el gobierno, o bien cuando existe un mercado activo y el riesgo de fracasar en la venta sea mínimo. Esos inventarios 1. 2. 3. 4. NIC 2 A1062 © IFRS Foundation se excluyen únicamente de los requerimientos de medición establecidos en esta Norma.
      .col-lg-5.col-7: img(src='@/assets/curso/temas/26.png', alt='', data-aos='zoom-in')
    div(style="background-color: #E6DCFB ").mb-5
      .row.justify-content-center.mb-0
        .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/27.png', alt='', data-aos='zoom-in')
        .col-lg-7
          .p-4.d-flex.align-items-center
            p.mb-0(data-aos='fade-right') Los intermediarios que comercian son aquellos que compran o venden materias primas cotizadas por cuenta propia, o bien por cuenta de terceros. Los inventarios a que se ha hecho referencia en el apartado b se adquieren, principalmente, con el propósito de venderlos en un futuro próximo, y generar ganancias procedentes de las fluctuaciones en el precio, o un margen de comercialización. Cuando esos inventarios se contabilicen por su valor razonable menos los costos de venta quedarán excluidos únicamente de los requerimientos de medición establecidos en esta Norma (NIC, s.f., pp. 4-16).
    .tarjeta.color-primario.p-3.mb-5(style="background-color:#412976 ").px-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/24.svg")
        .col
          .row.justify-content-between.align-items-center
            .col-10.mb-3.mb-sm-0
              h3.mb-1(style="color: #FD9826 ") NIC 2 Inventarios.
              p.text-small.text-white Para ampliar los conocimientos sobre la norma, le invitamos a descargar el siguiente recurso en formato PDF para profundizar en el conocimiento de la norma NIC 2 sobre inventarios.
            .col.mb-3.mb-sm-0
              a.boton.color-acento-botones(:href="obtenerLink('downloads/NIC_2_Inventarios.pdf')" target="_blank" type="application/pdf")
                span(style='color: #12263F') Descargar 
                i.fas.fa-file-download(style='color: #12263F')
    Separador
    #t_1_8.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.8  Elementos de costo
    p.mb-4(data-aos='fade-right') Los elementos de costo de producción intervienen en una empresa industrial o manufacturera que se encarga de transformar materia prima en productos terminados. La sumatoria de los conceptos de MPD; MOD y CIF es lo que se considera como costo de producción.
    .tarjeta.p-4(style="background-color: #BCE0FC").mb-4 
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-lg-0.mb-3: img(src='@/assets/curso/temas/28.svg', alt='', style="max-width: 95px;")
        .col-lg
          p.mb-0 La fabricación de artículos o productos acabados requiere de la intervención de ciertos factores, elementos importantes que expresan el costo de producción de estos. Una industria de transformación incurre en costos como son: consumo de materias primas y/o materiales directos, uso de la mano y la inteligencia del hombre (físico-mental), y una serie de costos adicionales que son imprescindibles para la conclusión de una obra, entre otros se menciona: uso de maquinaria, equipos, herramientas, espacios físicos, etc., con los que es posible llevar a cabo el proceso de transformación (Solo contabilidad, s.f., p. 1).
    p.mb-4 En consecuencia, el costo de producción de modo general está formado por tres elementos:
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color: #E2DACC", data-aos='fade-right')
          .row.justify-content-center.mb-2
            .col-4: img(src='@/assets/curso/temas/29.svg', alt='')
          .text-center
            h4 Materia prima y/o material directo
            p.mb-0 Para ser considerado materiales directos debe ser de fácil identificación en cada unidad de producto.
      .col-lg-4.col-7.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color: #E2DACC", data-aos='flip-up')
          .row.justify-content-center.mb-2
            .col-4: img(src='@/assets/curso/temas/29.svg', alt='')
          .text-center
            h4 Sueldos y salarios y/o obra de mano
            p.mb-0 Se refiere a los salarios de los trabajadores por la transformación de los materiales en productos acabados.
      .col-lg-4.col-7.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color: #E2DACC", data-aos='fade-left')
          .row.justify-content-center.mb-2
            .col-4: img(src='@/assets/curso/temas/29.svg', alt='')
          .text-center
            h4 Gastos indirectos de producción
            p.mb-0 Considerados como el tercer elemento del costo, son los que no se identifican fácilmente en un producto (Solo contabilidad, s.f., p. 1).
    p.mb-4(data-aos='fade-right') Ahora, se presenta el ejemplo de una empresa manufacturera para su respectivo análisis:
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4(style="background-color: #F2ECFD ")
          .row.justify-content-center.mb-5
            .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/30.svg', alt='')
            .col-lg-8
              p.mb-3 La empresa Sánchez S.A.S., dedicada a la producción de muebles de madera requiere los siguientes elementos:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-angle-right
                  p.mb-0 #[b MPD:] madera, pintura, sellantes, tornillos, materiales de tapicería, etc.
                li.d-flex
                  i.fas.fa-angle-right
                  p.mb-0 #[b MOD:] salarios de los operarios como cortadores, armadores, pintores, cepilladores, etc.
                li.d-flex
                  i.fas.fa-angle-right
                  p.mb-0 #[b CIF:] depreciación y mantenimiento de la máquina, servicios públicos de la planta de producción, supervisores, jefes de planta.
    p.mb-5 A continuación, se profundizará en los elementos del costo.
    .titulo-tres: h3 Materia prima y/o material directo
    p.mb-4 Son los elementos que están sujetos a transformación y conviene diferenciarlos de la siguiente manera:
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo=" Materia prima" :icono="require('@/assets/curso/temas/31.svg')")
        .row.justify-content-center.mb-5.align-items-centerb
          .col-lg-4.col-7: img(src='@/assets/curso/temas/32.png', alt='')
          .col-lg-8
            h4  Materia prima
            p.mb-0 Son los elementos extraídos de la naturaleza que es la fuente de aprovisionamiento de todos los elementos que son necesarios para satisfacer necesidades humanas o convertirse en el primer elemento del costo para las empresas industriales. Se pueden citar como ejemplos: el hierro en su estado natural, el algodón en la fábrica de hilo o telas, los callapos o bolillos para la obtención de madera en los aserraderos, etc.; es decir, en las empresas tomadas como ejemplo se puede denominar el primer elemento de costo como “materia prima” (Solo contabilidad, s.f. p.1).
      .py-4.py-md-5(titulo="Material directo" :icono="require('@/assets/curso/temas/31.svg')")
        .row.justify-content-center.mb-5.align-items-centerb
          .col-lg-4.col-7: img(src='@/assets/curso/temas/33.png', alt='')
          .col-lg-8
            h4 Material directo
            p.mb-0 Se llama así a los elementos que son sometidos a uno o varios procesos de transformación por otra empresa, los cuales serán sujetos de otros procesos de transformación hasta convertirlos en un producto acabado apto para satisfacer las necesidades humanas. Se hace esta diferenciación debido a que se tiene una confusión al usar en forma indiscriminada el denominativo de “materia prima”, por lo tanto, será costo de “materia prima” para todas las empresas que utilizan los elementos que aún no han sido sometidos a procesos de transformación, y para aquellas que utilizan como principal elemento de transformación los productos sometidos a procesos de manufactura por otra entidad, se denominará “material directo”.
              br
              br
              |En general, “material” comprende todos aquellos artículos en su estado natural o transformado son los elementos que sirven para la confección o manufactura de un artículo nuevo y que pueden ser perfectamente medibles y por esta razón son cargables a una unidad identificada; por lo tanto, es el primer elemento del costo de producción.
    .titulo-tres: h3 Mano de obra
    div(style="background-color: #DDEFFD ").mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-7: img(src='@/assets/curso/temas/34.png', alt='')
        .col-lg-7
          .p-4
            p.mb-0 Para transformar la materia prima y/o material directo en un producto acabado es necesario, además de la maquinaria y equipo, herramientas, muebles y enseres, etc., que determinado número de personas desarrollen un esfuerzo mental y material, el cual recibe el nombre de labor, todas las erogaciones por este concepto se consideran dentro de este título. Por lo tanto, se puede decir que: “sueldos y salarios” es el costo de la retribución que los obreros u operarios perciben por su trabajo en la transformación de los materiales en su estado natural o procesado por otra entidad, en un producto terminado (Solo contabilidad, s.f., p. 1).
    .titulo-tres: h3 Costos indirectos de fabricación

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/35.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Dentro del proceso productivo, hay costos que no pueden identificarse con unidades específicas de producción o con un departamento o con un proceso específico, tales como: la depreciación de bienes de uso, luz y fuerza, combustibles, lubricantes, repuestos y accesorios, etc.; por lo que se denominan: “Servicios de planta”, “Gastos indirectos de fabricación”, “Gastos indirectos de producción”, etc. Es decir, están constituidos por todos los desembolsos o aplicaciones necesarias para llevar a cabo la producción y los cuales, por su naturaleza, no son aplicables directamente al costo de un producto en particular (Solo contabilidad, s.f., p. 1).


    .row.justify-content-center.mb-5
      .col-lg-3.col-7: img(src='@/assets/curso/temas/36.png', alt='')
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--morada")
          div(titulo="Tipos de sistemas de producción")
            p.mb-4 Entre los tipos de sistemas de producción más conocidos se encuentran:
            ul.lista-ul
              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 Bajo pedido: este se realiza por solicitud directa de un cliente.

              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 Por lotes: es la producción que se realiza por una referencia determinada o un producto.

              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 Continúa: por la alta demanda del producto siempre se está fabricando
          div(titulo="Tipos de costos de producción")
            ul.lista-ul
              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 #[b Costos fijos:] son los costos que hay que pagar en un periodo determinado sin importar si sube o baja la producción.
              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 #[b Costos variables:] son aquellos que varían según la producción si se aumenta o disminuye.
              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 #[b Costo total:] es la suma de los costos fijos y los costos variables.
              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 #[b Costo unitario:] es lo que cuesta producir cada unidad.
          div(titulo=" Fórmulas costos de producción")
            p.mb-4 Dentro de las fórmulas de los costos de producción encontramos:
            ul.lista-ul
              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 #[b Costo total] = Costos fijos + costos variables
              li.d-flex
                i.fas.fa-angle-right
                p.mb-0 #[b Costo unitario] = Costo total / número de unidades a producir
    .titulo-tres: h3 Punto de equilibrio
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        .p-4(style="background-color: #FEEAD4 ").mb-4
          p.mb-0 Es una herramienta estratégica para determinar la solvencia de un negocio y su rentabilidad, es el punto de partida para determinar dónde empieza una empresa a obtener utilidad sobre sus ventas.
        p.mb-4 La fórmula que se presenta es:
        img(src='@/assets/curso/temas/37.svg', alt='Fórmula sobre el punto de equilibrio (PE) que representa la división del costo fijo total entre la diferencia entre el precio de venta y el costo variable por unidad.', style="max-width: 504px;").mx-auto
      .col-lg-5.col-7: img(src='@/assets/curso/temas/38.png', alt='')
    .titulo-tres: h3 Proceso contable de los costos
    p.mb-4 De acuerdo con los costos de producción, es importante tener en cuenta la estructura y naturaleza de las cuentas para el reconocimiento y medición.
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/39.png', alt='')
      .col-lg-8
        LineaTiempoD.color-acento-contenido
          div(numero="1" titulo="Costo primo")
            p.mb-4 Para determinar el costo primo se suma el concepto de Materia Prima Directa (MPD) y Mano de Obra Directa (MOD), como se presenta a continuación:
            img(src='@/assets/curso/temas/40.svg', alt='Fórmula sobre el costo primo que resulta de la suma de la materia prima directa (MPD) y la mano de obra directa (MOD).', style="max-width: 335px;").mx-auto
          div(numero="2" titulo="Costo de conversión")
            p.mb-4 Para hallar el total de los costos de conversión se suma el concepto de mano de obra directa y costos indirectos de fabricación, así:
            img(src='@/assets/curso/temas/41.svg', alt='Fórmula sobre el costo de conversión que se obtiene al sumar la mano de obra directa (MOD) y los costos indirectos de fabricación (CIF).', style="max-width: 433px;").mx-auto
          div(numero="3" titulo="Costo de producción")
            p.mb-4 Es de recordar que los costos de producción se encuentran conformados por los siguientes elementos:
            img(src='@/assets/curso/temas/42.svg', alt='Fórmula sobre el total del costo de producción que resulta de la suma de materia prima directa (MPD), mano de obra directa (MOD) y costos indirectos de fabricación (CIF).', style="max-width: 433px;").mx-auto
          div(numero="4" titulo="Costo unitario")
            p.mb-4 Para determinar el costo unitario de un producto se debe tener en cuenta el valor total de la producción y se divide entre las unidades producidas o fabricadas, de la siguiente manera:
            .row.justify-content-center.mb-5
              .col-lg-8
                img(src='@/assets/curso/temas/43.svg', alt='Fórmula sobre el costo unitario que se calcula dividiendo el costo total de producción entre el número de unidades fabricadas.', style="max-width: 294px;").mx-auto
    .titulo-tres: h3 Devengo de los costos
    p.mb-4 Para realizar el reconocimiento y medición del costo de producción, es fundamental tener en cuenta las políticas de la empresa y la normatividad vigente. A continuación, se presenta un ejemplo de las cuentas que se utilizan y la naturaleza de estas:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 1.
          span Registro contable de movimientos de inventarios de materias primas y productos en proceso
        .tabla-a.color-acento-botones.mb-5
          table#tabla-1(style="width: 100%")
            colgroup
              col(style="width: 25%")
              col(style="width: 25%")
              col(style="width: 25%")
              col(style="width: 25%")
            thead.border-0(style="background-color: #FD9826")
              tr
                th Código
                th Cuenta
                th Débito
                th Crédito
            tbody
              tr
                td 7105
                td.text-left Materiales directos
                td.text-right $24.893.000
              tr
                td 7105
                td.text-left Materiales directos
                td.text-right $15.841.000
                td
              tr
                td 7105
                td.text-left Materiales directos
                td.text-right $905.200
                td
              tr
                td 7105
                td.text-left Materiales directos
                td.text-right $2.263.000
                td
              tr
                td 7105
                td.text-left Materiales directos
                td.text-right $11.315.000
                td
              tr
                td 1405
                td.text-left Materias primas
                td
                td.text-right $55.217.200
              tr
                td 1410
                td.text-left Productos en proceso
                td.text-right $55.217.200
                td
              tr
                td 7105
                td.text-left Materiales directos
                td
                td.text-right $55.217.200
              tr
                td 1410
                td.text-left Productos en proceso
                td.text-right $3.758.448
                td
              tr
                td 7205
                td.text-left Mano de obra directa
                td
                td $3.758.448
              tr
                td 7305
                td.text-left Costos indirectos de fabricación
                td.text-right $6.485.758
                td
              tr
                td 2335
                td.text-left Costos y gastos por pagar
                td
                td.text-right $6.485.758
              tr
                td 1410
                td.text-left Productos en proceso
                td.text-right $6.485.758
                td
              tr
                td 7305
                td.text-left Costos indirectos de fabricación
                td
                td.text-right $6.485.758
              tr
                td 7305
                td.text-left Costos indirectos de fabricación
                td
                td.text-right $6.485.758
              tr
                td 1410
                td.text-left Productos en proceso
                td.text-right $65.461.406
                td
              tr
                td 1413
                td.text-left Productos terminados
                td
                td.text-right $65.461.406
              tr
                td 
                td.text-left #[strong Sumas iguales]
                td.text-right #[strong $192.625.770]
                td.text-right #[strong $192.625.770]
    

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
#tabla-1
  table-layout: fixed
  width: 100%
</style>
