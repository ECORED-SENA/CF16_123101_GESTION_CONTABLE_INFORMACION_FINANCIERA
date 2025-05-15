export default {
  global: {
    Name: 'Identificación de los elementos del costo',
    Description:
      'En el presente componente se desarrollan los temas relacionados con las generalidades de los costos, se identifica su concepto, importancia, características, elementos, reconocimiento y medición de los hechos económicos. Adicionalmente, se aborda la nómina en empresas industriales, teniendo en cuenta los elementos que intervienen para su liquidación y contabilización conforme con la normatividad legal vigente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Costos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto de contabilidad de costos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Importancia y objetivos de la contabilidad de costos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Diferencia entre costo de venta y costo de producción',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Diferencia entre costo y gasto',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Diferencia entre costo del producto y costo del periodo',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo:
              'Diferencia entre contabilidad de costos y contabilidad financiera',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo:
              'Normas contables aplicables a los costos de ventas y producción',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Elementos de costo',
            hash: 't_1_8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Nómina de producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Elementos de la nómina de producción',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Liquidación de la nómina',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Accounter. (2017). ¿A quiénes aplica la exoneración de aportes?',
      link:
        'https://accounter.co/boletines/a-quienes-aplica-la-exoneracion-de-aportes.html',
    },
    {
      referencia: 'Consultor contable. (2020). Prestaciones sociales.',
      link:
        'https://www.consultorcontable.com/datos-hist%C3%B3ricos/prestaciones-sociales/',
    },
    {
      referencia:
        'Emprendefx.com. (s. f.). Objetivos de la contabilidad de costos.',
      link: 'https://emprendefx.com/objetivos-de-la-contabilidad-de-costos/',
    },
    {
      referencia: 'Economipedia. (2017) La contabilidad financiera.',
      link:
        'https://economipedia.com/definiciones/contabilidad-financiera.html',
    },
    {
      referencia:
        'Estatuto Tributario Nacional. (2012). Art. 114 - 1. Exoneración de aportes.',
      link: 'https://estatuto.co/?e=1460',
    },
    {
      referencia: 'Gerencie.com. (2021). Devengado.',
      link: 'https://www.gerencie.com/partes-de-la-nomina.html',
    },
    {
      referencia: 'Gerencie. com. (2020). Salario.',
      link: 'https://www.gerencie.com/salario.html ',
    },
    {
      referencia: 'Gerencie.com. (2021). Deducciones.',
      link: 'https://www.gerencie.com/partes-de-la-nomina.html',
    },
    {
      referencia: 'Gerencie.com. (2021). Seguridad social.',
      link:
        'https://www.gerencie.com/que-es-la-seguridad-social-en-una-relacion-laboral.html',
    },
    {
      referencia: 'Incp.org.co. (2021). NIC 19.',
      link: 'https://incp.org.co/Site/publicaciones/guias/nic-19.pdf',
    },
    {
      referencia:
        'Norma Internacional de Contabilidad. (2020). Beneficios a los empleados.',
      link:
        'https://www.mef.gob.pe/contenidos/conta_publ/con_nor_co/vigentes/nic/19_NIC.pdf',
    },
    {
      referencia: 'Norma Internacional de Contabilidad. (2020). Inventarios.',
      link:
        'https://www.mef.gob.pe/contenidos/conta_publ/con_nor_co/vigentes/nic/2_NIC.pdf',
    },
    {
      referencia: 'Sinisterra, V., G. (2017) Contabilidad de costos.',
      link:
        'https://www.ecoeediciones.com/wp-content/uploads/2015/09/Contabilidad-de-costos.pdf',
    },
    {
      referencia:
        'Sinisterra, G. (2017). Contabilidad de costos con aproximación a las normas internacionales. (2a. ed.). Ecoe Ediciones.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5713',
    },
    {
      referencia:
        'Solocontabilidad.com. (2020b). Materia prima y/o material directo. Sueldos y salarios. Gastos indirectos de producción.',
      link:
        'https://www.solocontabilidad.com/costos/materia-prima-y-material-directo-sueldos-y-salarios-gastos-indirectos-de-produccion',
    },
    {
      referencia:
        'Solo contabilidad. (2020a). Elementos del costo y clasificación de los costos.',
      link:
        'https://www.solocontabilidad.com/costos/elementos-del-costo-y-clasificacion-de-los-costos',
    },
    {
      referencia: 'Tafen S.A. (2021). Contabilidad financiera.',
      link: 'https://tafensolutions.com/portafolio/contabilidad-financiera/',
    },
    {
      referencia: 'Varón, L. (2017). Valor neto realizable.',
      link:
        'https://www.gerencie.com/valor-neto-realizable-y-valor-razonable-nic.html',
    },
  ],
  glosario: [
    {
      termino: 'Contabilidad de costos',
      significado:
        'parte de la contabilidad financiera que se encarga de la acumulación de los costos de fabricación para determinar el costo unitario del producto.',
    },
    {
      termino: 'Costo',
      significado:
        'representa la erogación y el cargo asociado clara y directamente con la producción del artículo, del cual el ente económico obtiene sus ingresos.',
    },
    {
      termino: 'Costo de conversión',
      significado:
        'término utilizado para describir el costo de la mano de obra directa con los costos indirectos.',
    },

    {
      termino: 'Costos indirectos',
      significado:
        'costos incurridos en el proceso productivo, diferentes de los materiales directos y de la mano de obra directa.',
    },
    {
      termino: 'Costos del periodo',
      significado:
        'todos los costos que se enfrentan con los ingresos del período; incluyen los gastos operacionales de administración y de ventas.',
    },
    {
      termino: 'Costos del producto',
      significado:
        'costos involucrados en la fabricación de bienes, tales como materiales directos, mano de obra directa y costos indirectos de fabricación.',
    },
    {
      termino: 'Costo fijo',
      significado:
        'costo que permanece constante en su total, independientemente de cambios en el nivel de actividad.',
    },
    {
      termino: 'Mano de obra',
      significado:
        'salario y prestaciones sociales que devenga el personal que transforma materia prima en producto terminado.',
    },
    {
      termino: 'Materia prima',
      significado:
        'elementos básicos adquiridos para uso en el proceso de fabricación que requieren procesamiento adicional.',
    },
    {
      termino: 'Producción',
      significado:
        'conversión de materias primas en productos terminados gracias al esfuerzo de los colaboradores de fábrica y al uso del equipo de manufactura.',
    },
  ],
  complementario: [
    {
      tema: 'Costos',
      referencia:
        'Contabilidad de costos con aproximación a las normas internacionales -<br> Sinisterra, G. (2017). Contabilidad de costos con aproximación a las normas internacionales. (2a. ed.) Ecoe Ediciones.',
      tipo: 'Libro',
      link:
        'https://login.bdigital.sena.edu.co/login?url=http://www.ebooks7-24.com/?il=5713',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nathaly Tatiana Wilches Ayala',
          cargo: 'Experta temática',
          centro: 'Centro de Servicios Financieros - Regional Distrito Capital',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Diana Milena Picón Rincón',
          cargo: 'Diseñador de contenidos',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
