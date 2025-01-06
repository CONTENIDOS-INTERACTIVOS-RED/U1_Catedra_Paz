export default {
  global: {
    componenteFormativo: '',
    descripcionCurso: '',
    imagenBannerPrincipal: '',
    fondoBannerPrincipal: '',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '',
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: '',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      // {
      //   nombreRuta: 'inicio',
      //   icono: 'fas fa-home',
      //   titulo: 'Volver al inici',
      // },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        unidad: 'UNIDAD 1.',
        numero: '',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        unidad: 'Unidad 1.',
        numero: '1.',
        titulo: 'Conceptos de paz y cultura de paz',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Componentes de una cultura de paz',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        unidad: 'Unidad 1.',
        numero: '2.',
        titulo: 'Tipos o niveles de conflicto',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Factores desencadenantes de los conflictos',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        unidad: 'Unidad 1.',
        numero: '3.',
        titulo: 'Factores estructurales y dinámicas de poder',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Dinámicas de poder en los conflictos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Interrelación entre factores estructurales y dinámicas de poder',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        unidad: 'Unidad 1.',
        numero: '4.',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      // {
      //   icono: 'far fa-registered',
      //   titulo: 'Síntesis',
      //   nombreRuta: 'sintesis',
      // },
    ],
  },
  referencias: [
    {
      referencia: 'Naciones Unidas. (sf). Organización de las Naciones Unidas',
      link: 'https://www.un.org/es',
    },
    {
      referencia:
        'García, JL (2019, 21 de mayo). 9 causas de conflicto en las empresas que interesa conocer para evitarlos. Laboral Social.',
      link:
        'https://www.laboral-social.com/9-causas-conflicto-empresas-interesa-conocer-evitarlos.html',
    },
    {
      referencia:
        'Unidad para las Víctimas. (sf). Análisis de dinámicas territoriales.',
      link: 'https://datospaz.unid.gov.c/an-Delaware--dinamicas-territoriales/',
    },
    {
      referencia:
        'Universidad Panamericana. (sf). ¿Por qué conocer la teoría de la burocracia? Blog de Posgrados de Gobierno y Economía.',
      link:
        'https://blog.up.edu.mx/posgrados-de-gobierno-y-economia/por-que-conocer-la-teoria-de-la-burocracia',
    },
    {
      referencia: 'Centro Hera. (sf). Modelos de mediación.',
      link: 'https://www.centrohera.es/modelos-mediacion/',
    },
    {
      referencia:
        'Escuela Europea de Psicología. (sf). ¿Qué es la comunicación asertiva?',
      link:
        'https://psicologia.com/que-es-comunicacion-asertiva/#:~:text=La%20comunicaci%C3%B3n%20asertiva%20es%20un,y%20las%20de%20los%20dem%C3%A1s',
    },
    {
      referencia:
        'Jurisdicción Especial para la Paz. (Dakota del Norte). Jurisdicción Especial para la Paz. JEP.',
      link:
        'https://www.jep.gov.co/JEP/Paginas/Jurisdiccion-Especial-para-la-Paz.aspx',
    },
    {
      referencia: 'Naciones Unidas. (Dakota del Norte). Derechos Humanos.',
      link: 'https://www.un.org/es/global-issues/human-rights',
    },
    {
      referencia:
        'Caja de herramientas comunitaria. (Dakota del Norte). Foros de conducta pública: Involucrar a la comunidad en la identificación de problemas y soluciones.',
      link:
        'https://ctb.ku.edu/es/tabla-de-contenidos/valoracion/valorar-las-necesidades-y-recursos-comunitarios/foros-de-conducta-publica/principal',
    },
    {
      referencia:
        'Cabello-Tijerina, P. A., Carmona, V. S. E., Gorjón, G. F. J., Iglesias, O. E., Sáenz, L. K. A., & Vásquez-Gutiérrez, R. L. (2016). Cultura de paz. Universidad Autónoma de Nuevo León.',
      link:
        'https://santic.cl/mt-content/uploads/2023/08/cabello-et-al_cultura_de_paz.pdf',
    },
    {
      referencia:
        'Naciones Unidad. (1948). Declaración Universal de Derechos Humanos.',
      link:
        'https://www.un.org/es/about-us/universal-declaration-of-human-rights',
    },
    {
      referencia:
        'Roldán-Loyola, E. (2020). Educación para la paz como herramienta para construir la cultura de paz. Acta Colombiana de Psicología, 23(1), 369-370.',
      link:
        'http://www.scielo.org.co/scielo.php?pid=S0123-91552020000100369&script=sci_arttext',
    },
    {
      referencia:
        'González Rey, F. (2016). Introducción a la teoría de la cooperación en conflictos. Ediciones Humanistas.',
      link: 'https://dialnet.unirioja.es/descarga/libro/737248.pdf',
    },
    {
      referencia:
        'La Rosa, J., & Rivas, G. (2018). Teoría del conflicto y mecanismos de solución (Vol. 33). Fondo Editorial de la PUCP.',
      link:
        'https://books.google.es/books?hl=es&lr=&id=GaHNDwAAQBAJ&oi=fnd&pg=PT4&dq=6.+La+Rosa,+M.,+%26+Rivas+M%C3%A9todos+alternativos+de+resoluci%C3%B3n+de+conflictos.+Ediciones+Jur%C3%ADdicas.&ots=mhZi4uw68c&sig=n-DdITDA1bR8305WfiWVk0mx63V0',
    },
    {
      referencia:
        'Chilito Piamba, E. A. (2018). Participación comunitaria, gobernanza y gobernabilidad. Experiencias de construcción de paz en el departamento del Cauca, Colombia, y su aporte a posconflicto, el caso del corregimiento de Lerma. Estudios Politicos, (53), 51-72.',
      link:
        'http://www.scielo.org.co/scielo.php?pid=S0121-51672018000200051&script=sci_arttext',
    },
    {
      referencia:
        'Sánchez Cardona, M. (2016). Educación para la cultura de paz: Una aproximación psicopedagógica',
      link:
        'https://books.google.es/books?hl=es&lr=&id=CvqN-DwAAQBAJ&oi=fnd&pg=PR13&dq=8.%09S%C3%A1nchez+Cardona,+M.+(2016).+Educaci%C3%B3n+para+la+cultura+de+paz:+Una+aproximaci%C3%B3n+psicopedag%C3%B3gica.&ots=arifg35kTd&sig=ZSRqEe4PJw1PwtSOag9IOsQ1UaM',
    },
    {
      referencia:
        'de Derechos Humanos, D. U. (2008). Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura.',
      link:
        'http://coordinadoradelamujer.org.bo/observatorio/archivos/marco/paralaedducacionylacienciadelacultura_486.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Conflicto comunitario',
      significado:
        '"Son los que surgen cuando diferentes grupos o individuos dentro de una comunidad tienen intereses contrapuestos, generalmente relacionados con el acceso a recursos o decisiones colectivas que afectan a toda la comunidad." (Lederach, 2003).',
    },
    {
      termino: 'Conflicto estructural',
      significado:
        '"Es el conflicto que surge a partir de las desigualdades sistémicas dentro de una sociedad, ya sea en términos económicos, sociales o políticos. Estas desigualdades perpetúan la injusticia y marginación de ciertos grupos." (Galtung, 1996).',
    },
    {
      termino: 'Conflicto interpersonal',
      significado:
        '"Es el enfrentamiento que se presenta entre dos o más personas debido a discrepancias en valores, creencias o expectativas, lo cual puede generar tensiones y malentendidos." (Fisher, Ury, Patton, 2011).',
    },
    {
      termino: 'Conflicto intrapersonal',
      significado:
        '"Es el conflicto que ocurre dentro de una persona, cuando sus deseos, valores o creencias están en contradicción, lo que genera tensión y estrés interno." (Galtung, 1996).',
    },
    {
      termino: 'Cultura de paz',
      significado:
        '"Conjunto de valores, actitudes y comportamientos que rechazan la violencia y previenen los conflictos, abordando sus causas para resolverlos mediante el diálogo y la negociación". (UNESCO, 1995).',
    },
    {
      termino: 'Dinámicas de poder',
      significado:
        '“Son la forma en que se distribuye y utiliza el poder dentro de una sociedad o grupo. Quienes controlan los recursos y las decisiones suelen tener más poder, mientras que otros se ven subordinados o excluidos." (Lederach, 2003).',
    },
    {
      termino: 'Exclusión social',
      significado:
        '"La exclusión social ocurre cuando ciertos grupos de la sociedad son marginados y se les niega el acceso equitativo a los recursos, derechos y oportunidades, perpetuando la desigualdad." (Martínez, 2001).',
    },
    {
      termino: 'Factores desencadenantes',
      significado:
        '"Son de los conflictos pueden ser sociales, económicos, políticos o culturales, y actúan como causas inmediatas que provocan tensiones o enfrentamientos entre los actores implicados" (Freire, 2000).',
    },
    {
      termino: 'Mediación',
      significado:
        '“Proceso de resolución de conflictos en el que un tercero neutral ayuda a las partes a alcanzar un acuerdo mediante el diálogo y la cooperación." (Fisher, Ury, Patton, 2011).',
    },
    {
      termino: 'Paz negativa',
      significado:
        '“Se refiere a la ausencia de violencia directa o física, sin abordar las causas estructurales que pueden seguir perpetuando el conflicto a nivel más profundo." (Galtung, 1996).',
    },
    {
      termino: 'Paz positiva',
      significado:
        '“Se refiere a la construcción de una sociedad donde las estructuras promuevan la justicia, la igualdad y el bienestar para todos los individuos, más allá de la mera ausencia de violencia." (Galtung, 1996).',
    },
    {
      termino: 'Violencia estructural',
      significado:
        'Es la violencia que se manifiesta cuando las instituciones y estructuras sociales perpetúan la exclusión, la desigualdad y la injusticia, generando tensiones y conflictos que no se resuelven con la mera ausencia de violencia física." (Galtung, 1996).',
    },
  ],
}
