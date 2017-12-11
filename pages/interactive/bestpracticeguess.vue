<template>
  <section class="container-fluid pt-header">
    <div class="row" v-if="texts">
      <div class="col-12 pt-4 text-center" v-for="text in texts">
        <div class="card" :class="cardClass">
          <div class="card-block">
            <samp class="card-title display-3" style="letter-spacing: 0.1em;">
              <mark class="d-inline-block mx-2 my-2" v-for="word in text">
                {{ word }}
              </mark>
            </samp>
          </div>
        </div>
      </div>

      <div class="col-12 pt-4 text-center">
        <button type="button" class="btn btn-secondary btn-lg mx-1" @click="reveal"><i class="fa fa-eye" aria-hidden="true"></i></button>
        <button type="button" class="btn btn-secondary btn-lg mx-1" @click="revealAll"><i class="fa fa-check" aria-hidden="true"></i></button>
        <button type="button" class="btn btn-secondary btn-lg mx-1" @click="next"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-12 pt-4 text-center">
        <h1>No more!</h1>
      </div>
    </div>
  </section>
</template>

<script>
import random from 'lodash/random'

const NON_WORD = ' -,’“”'

export default {
  data () {
    return {
      items: [
        // General
        {
          translations: {
            en: 'Be safe',
            es: 'Estar a salvo'
          }
        }, {
          translations: {
            en: 'Strive to model safe behavior',
            es: 'Esforzarse de tener una conducta y modelo de seguridad'
          }
        }, {
          translations: {
            en: 'Individual safety is our top priority',
            es: 'Seguridad Individual es nuestra mayor prioridad'
          }
        },
        // Awareness
        {
          translations: {
            en: 'Use peripheral vision',
            es: 'Use visión periférica'
          }
        }, {
          translations: {
            en: 'Look out for your partner',
            es: 'Cuide a su compañero'
          }
        }, {
          translations: {
            en: 'No headphones',
            es: 'No audífonos'
          }
        },
        // Communication
        {
          translations: {
            en: 'Courteous',
            es: 'Cortes'
          }
        }, {
          translations: {
            en: 'Professional',
            es: 'Profesional'
          }
        }, {
          translations: {
            en: 'Clear and concise',
            es: 'Claro y conciso'
          }
        }, {
          translations: {
            en: 'Positive engagement',
            es: 'Compromiso positivo'
          }
        }, {
          translations: {
            en: 'Confident posture',
            es: 'Postura confiada'
          }
        }, {
          translations: {
            en: 'Acknowledge people and drivers',
            es: 'Ponga atención a la gente y conductores'
          }
        }, {
          translations: {
            en: 'De-escalate',
            es: 'De-escala'
          }
        }, {
          translations: {
            en: 'Think first, pause',
            es: 'Piense primero, haga una pausa'
          }
        },
        // Movement
        {
          translations: {
            en: 'Balanced footing',
            es: 'Equilibrio de pie'
          }
        }, {
          translations: {
            en: 'Stay out of reach',
            es: 'Quédese fuera de alcance'
          }
        }, {
          translations: {
            en: 'Be ready to move',
            es: 'Este preparado para moverse'
          }
        }, {
          translations: {
            en: 'Step back',
            es: 'Retroceda'
          }
        }, {
          translations: {
            en: 'Keep one hand available',
            es: 'Mantenga una mano disponible'
          }
        }, {
          translations: {
            en: 'Safety stance',
            es: 'Postura de seguridad'
          }
        }, {
          translations: {
            en: 'Don’t overreact',
            es: 'So sobre reaccione'
          }
        },
        // Presence
        {
          translations: {
            en: 'Respectful confidence',
            es: 'Confianza controlada'
          }
        }, {
          translations: {
            en: 'Calm and relaxed',
            es: 'Tranquilo y relajado'
          }
        }, {
          translations: {
            en: 'Be a brand ambassador',
            es: 'Sea un embajador distinguido'
          }
        },
        // Crosswalk
        {
          translations: {
            en: 'Follow traffic signals',
            es: 'Siga las señales de trafico'
          }
        }, {
          translations: {
            en: 'Stay within designated crossing areas',
            es: 'Manténgase dentro de las áreas de cruce asignadas'
          }
        }, {
          translations: {
            en: 'Do not block crosswalk',
            es: 'No obstruya el cruce de peatones'
          }
        }, {
          translations: {
            en: 'Do not step off corner early',
            es: 'No se quite de la esquina antes de tiempo'
          }
        }, {
          translations: {
            en: 'Use caution if cars are in crosswalk',
            es: 'Use precaución si hay carros en el cruce de peatones'
          }
        }, {
          translations: {
            en: 'Strive for consistency',
            es: 'Esfuérzate para la consistencia'
          }
        },
        // Equipment
        {
          translations: {
            en: 'Do not “pop” or jerk while clicking',
            es: 'No haga movimientos bruscos, repentinos o jalonea el dispositivo cuando lo esté presionando'
          }
        }, {
          translations: {
            en: 'Do not swing or point signs',
            es: 'No gire o apunte con los letreros'
          }
        }, {
          translations: {
            en: 'Press the talk button, pause, then speak',
            es: 'Presione el botón de hablar, pause, luego hable'
          }
        }, {
          translations: {
            en: 'Split your attention',
            es: 'Divide tu atención'
          }
        }
      ],
      current: {},
      hidden: [],
      texts: []
    }
  },

  mounted () {
    this.next()
  },

  computed: {
    cardClass () {
      return this.hidden.length > 0 ? '' : 'card-inverse card-info'
    }
  },

  methods: {
    updateTexts () {
      this.texts = Object.entries(this.current.translations).map(([lang, text]) => {
        return Array.from(text).map(c => this.hidden.includes(c) ? '_' : c).join('').split(' ')
      })
    },
    next () {
      const avails = this.items.filter(item => !item.isDone)

      if (!avails || (avails.length === 0)) {
        this.current = this.texts = null
        return
      }

      this.current = avails[random(0, avails.length - 1)]
      this.current.isDone = true

      this.hidden = [...new Set(Object.entries(this.current.translations).reduce((ary, [lang, text]) => {
        return ary.concat(Array.from(text))
      }, []))].filter(l => !NON_WORD.includes(l))

      this.updateTexts()
    },
    reveal () {
      this.hidden[random(0, this.hidden.length - 1)] = null
      this.hidden = this.hidden.filter(ch => ch > '')

      this.updateTexts()
    },
    revealAll () {
      this.hidden = []

      this.updateTexts()
    }
  }
}
</script>
