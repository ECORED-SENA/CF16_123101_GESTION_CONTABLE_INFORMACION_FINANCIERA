<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        .p-5.h-100(style="background-color: #BCE0FC").d-flex.align-items-center
          p.mb-0 Durante el recorrido por este componente se fortalecerá el conocimiento sobre las generalidades de costos, su importancia, elementos, clasificación y normatividad, así como la temática de la nómina en empresas industriales, lo anterior permite adquirir mayores herramientas para enfrentarse al mundo contable y poner en práctica los conocimientos adquiridos.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/1.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/2.svg', alt='')
      .col-lg-9
        .row.justify-content-center.align-items-center.mb-3
          .col-2.mb-lg-0.mb-3: img(src='@/assets/curso/temas/3.svg', alt='')
          .col-lg-10
            p.mb-0 #[b Notas aclaratorias:] Las tablas que se toman como referencia en los ejemplos en cada uno de los temas desarrollados, elaboradas mediante el programa Excel, son derivadas de los mismos, por lo tanto no se numeran y la elaboración es propia salvo donde se indique lo contrario.
        .p-4(style="background-color: #E6DCFB").d-flex.align-items-center
          p.mb-0 Además, para la elaboración de este apartado se abordaron diversas fuentes de conceptos de gestión contable e información financiera las que se han citado y referenciado para los fines educativos de esta materia en el entendido que el conocimiento es social y, por lo tanto, es para usarlo por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos, aprendices y lectores en general
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
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

<style lang="sass"></style>
