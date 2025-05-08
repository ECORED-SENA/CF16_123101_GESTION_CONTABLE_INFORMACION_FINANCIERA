<template lang="pug">
.container.my-5
  .timeline
    .timeline-item(v-for="(item, index) in horas" :key="index")
      .row.no-gutters.align-items-start
        .col-auto.icon-container(:class="item.iconClass")
          i(:class="[item.icon, 'rotate-icon', { open: item.open }]")
        .col
          h5.font-weight-bold.mb-1
            | {{ item.title }}
            button.btn.btn-sm.btn-link(@click="toggle(index)") 
              i.fas(:class="item.open ? 'fa-chevron-up' : 'fa-chevron-down'")
          transition(name="fade")
            .collapse-content(v-show="item.open")
              p.mb-0 {{ item.description }}
</template>

<script>
export default {
  name: 'HorasLaborales',
  data() {
    return {
      horas: [
        {
          title: 'Hora extraordinaria diurna “HEDD”',
          description:
            'La hora extra diurna es la que se labora luego de la jornada laboral, y entre las 6 de la mañana y las 9 de la noche.',
          icon: 'fas fa-sun',
          iconClass: 'diurna',
          open: false,
        },
        {
          title: 'Hora extraordinaria nocturna “HEON”',
          description:
            'La hora extra nocturna es la que se labora luego de la jornada laboral, y entre las 9 de la noche y las 6 de la mañana.',
          icon: 'fas fa-moon',
          iconClass: 'nocturna',
          open: false,
        },
        {
          title: 'Hora dominical y festivo diurna',
          description:
            'Se presenta durante la jornada ordinaria que se labora el domingo o festivo y entre las 6 de la mañana y las 9 de la noche.',
          icon: 'fas fa-sun',
          iconClass: 'diurna',
          open: false,
        },
        {
          title: 'Hora dominical y festivo nocturna',
          description:
            'Se presenta durante la jornada ordinaria que se labora el domingo o festivo, entre las 9 de la noche y las 6 de la mañana.',
          icon: 'fas fa-moon',
          iconClass: 'nocturna',
          open: false,
        },
        {
          title: 'Hora extra dominical diurna “HEDD”',
          description:
            'La hora extra dominical diurna es la que se labora luego de la jornada laboral, y entre las 6 de la mañana y las 9 de la noche siempre y cuando se trabaje en un domingo o festivo y se trabajen más de 8 horas diarias si esa es la jornada ordinaria.',
          icon: 'fas fa-sun',
          iconClass: 'diurna',
          open: false,
        },
        {
          title: 'Hora extra-dominical nocturna “HEDN”',
          description:
            'La hora extra dominical nocturna es la que se labora luego de la jornada laboral, entre las 9 de la noche y las 6 de la mañana, cuando se labora domingo o festivo.',
          icon: 'fas fa-moon',
          iconClass: 'nocturna',
          open: false,
        },
        {
          title: 'Recargo nocturno',
          description:
            'El numeral 1 del artículo 168 del Código Sustantivo del Trabajo señala que el trabajo nocturno se remunera con un recargo del 35%.',
          icon: 'fas fa-moon',
          iconClass: 'diurna',
          open: false,
        },
      ],
    }
  },
  methods: {
    toggle(index) {
      this.horas[index].open = !this.horas[index].open
    },
  },
}
</script>

<style lang="sass" scoped>
.timeline
  border-left: 3px dotted #0056b3
  margin-left: 20px
  padding-left: 20px
  position: relative

  .timeline-item
    margin-bottom: 2rem
    position: relative

    &:before
      content: ''
      position: absolute
      left: -11px
      top: 0
      width: 20px
      height: 20px
      background-color: #fff
      border: 3px solid #007bff
      border-radius: 50%


    .icon-container
      width: 50px
      font-size: 24px
      text-align: center

      &.diurna
        color: #f9c74f


      &.nocturna
        color: #577590


      .rotate-icon
        transition: transform 0.3s ease

        &.open
          transform: rotate(20deg)




    h5
      display: flex
      justify-content: space-between
      align-items: center
      flex-wrap: wrap


    .collapse-content
      padding-left: 10px
      margin-top: 5px


/* Fade transition */
.fade-enter-active,
.fade-leave-active
  transition: opacity 0.4s


.fade-enter,
.fade-leave-to
  opacity: 0
</style>
