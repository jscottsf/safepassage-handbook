<template>
  <section class="container-fluid pt-header">
    <div class="row" v-if="current">
      <div class="col-12 pt-4 text-center">
        <div class="card" :class="cardClass">
          <div class="card-block">
            <div class="card-body display-2 py-2">
              {{ question }}
            </div>
            <div class="card-body h1 py-2" :class="answerClass">
              {{ answer }}
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 pt-4 text-center">
        <button type="button" class="btn btn-secondary btn-lg mx-1" @click="reveal"><i class="fa fa-eye" aria-hidden="true"></i></button>
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

const CORNER_HINT = '_ _ corner of Street and Street'
const PLACE_HINT = '_ side of Street, between Street and Street'

export default {
  data () {
    return {
      items: [
        // General
        {
          q: 'Harry Harrington\'s Pub',
          a: 'SE corner of Turk and Larkin',
          h: CORNER_HINT
        }, {
          q: 'Vincent Hotel',
          a: 'S side of Turk between Hyde and Larkin',
          h: PLACE_HINT
        }, {
          q: 'Hyde/Turk Grocery',
          a: 'SW corner of Turk and Hyde',
          h: CORNER_HINT
        }, {
          q: 'Mini Park',
          a: 'NW corner of Turk and Hyde',
          h: CORNER_HINT
        }, {
          q: 'Oasis Apartments',
          a: 'S side of Turk between Leavenworth and Hyde',
          h: PLACE_HINT
        }, {
          q: 'Mosser Towers',
          a: 'N side of Turk between Leavenworth and Hyde',
          h: PLACE_HINT
        }, {
          q: 'Central Tower Market',
          a: 'N side of Turk between Leavenworth and Hyde',
          h: PLACE_HINT
        }, {
          q: 'Curry Senior Center',
          a: 'S side of Turk between Leavenworth and Hyde',
          h: PLACE_HINT
        }, {
          q: 'Taqueria La Paz',
          a: 'S side of Turk between Leavenworth and Hyde',
          h: PLACE_HINT
        }, {
          q: 'Peerless General Supply',
          a: 'SE corner of Turk and Leavenworth',
          h: CORNER_HINT
        }, {
          q: 'Compass Children\'s Center',
          a: 'E side of Leavenworth between Golden Gate and Turk',
          h: PLACE_HINT
        }, {
          q: 'Cross Cultural Family Center',
          a: 'S side of Turk between Jones and Leavenworth',
          h: PLACE_HINT
        }, {
          q: '201 Turk Street Apartments',
          a: 'S side of Turk between Jones and Leavenworth',
          h: PLACE_HINT
        }, {
          q: 'Radman\'s Produce Market',
          a: 'S side of Turk between Jones and Leavenworth',
          h: PLACE_HINT
        }, {
          q: 'Clean-X-Press Laundry',
          a: 'S side of Turk between Jones and Leavenworth',
          h: PLACE_HINT
        }, {
          q: 'Salvation Army Kroc Center',
          a: 'N side of Turk between Jones and Leavenworth',
          h: PLACE_HINT
        }, {
          q: 'Emo\'s Cafe',
          a: 'SW corner of Turk and Jones',
          h: CORNER_HINT
        }, {
          q: 'Boys & Girls Clubs TL Clubhouse',
          a: 'W side of Jones between Golden Gate and Turk',
          h: PLACE_HINT
        }, {
          q: '111 Jones Street Apartments',
          a: 'NW corner of Golden Gate and Jones',
          h: CORNER_HINT
        }, {
          q: 'Yemen Kitchen',
          a: 'W side of Jones between Turk and Eddy',
          h: PLACE_HINT
        }, {
          q: 'SFPD Tenderloin Station',
          a: 'SW corner of Eddy and Jones',
          h: CORNER_HINT
        }, {
          q: 'SF City Impact - Rescue Mission',
          a: 'E side of Jones between Turk and Eddy',
          h: PLACE_HINT
        }, {
          q: 'Boeddeker Park',
          a: 'NE corner of Eddy and Jones',
          h: CORNER_HINT
        }, {
          q: 'Glide Family Resource Center',
          a: 'N side of Ellis between Jones and Leavenworth',
          h: PLACE_HINT
        }, {
          q: 'Tadu Ethiopian Kitchen',
          a: 'N side of Ellis between Jones and Leavenworth',
          h: PLACE_HINT
        }, {
          q: 'Jessica Silverman Gallery',
          a: 'NE corner of Ellis and Leavenworth',
          h: CORNER_HINT
        }, {
          q: 'Amigo\'s Market',
          a: 'NW corner of Ellis and Leavenworth',
          h: CORNER_HINT
        }, {
          q: 'TLCBD',
          a: 'N side of Ellis between Leavenworth and Hyde',
          h: PLACE_HINT
        }, {
          q: 'SF Yellow Bike Project',
          a: 'N side of Ellis between Leavenworth and Hyde',
          h: PLACE_HINT
        }, {
          q: 'Tenderloin Children\'s Playground',
          a: 'N side of Ellis between Leavenworth and Hyde',
          h: PLACE_HINT
        }, {
          q: 'Tenderloin National Forest',
          a: 'S side of Ellis between Leavenworth and Hyde',
          h: PLACE_HINT
        }, {
          q: 'Tenderloin Museum',
          a: 'NE corner of Eddy and Leavenworth',
          h: CORNER_HINT
        }, {
          q: 'St. Anthony Foundation',
          a: 'N side of Golden Gate between Jones and Leavenworth',
          h: PLACE_HINT
        }, {
          q: 'De Marillac Academy',
          a: 'S side of Golden Gate between Jones and Leavenworth',
          h: PLACE_HINT
        }, {
          q: 'Saint Boniface Catholic Church',
          a: 'S side of Golden Gate between Jones and Leavenworth',
          h: PLACE_HINT
        }, {
          q: '826 Valencia Tenderloin Center',
          a: 'NE corner of Golden Gate and Leavenworth',
          h: CORNER_HINT
        }, {
          q: 'Antonia Manor',
          a: 'NE corner of Turk and Jones',
          h: CORNER_HINT
        }, {
          q: 'G & H Liquor & Grocery',
          a: 'NW corner of Turk and Jones',
          h: CORNER_HINT
        }, {
          q: 'T & L Market',
          a: 'SW corner of Turk and Leavenworth',
          h: CORNER_HINT
        }, {
          q: 'Tsunami Market',
          a: 'S side of Turk between Hyde and Larkin',
          h: PLACE_HINT
        }, {
          q: 'Group 1 (PM)',
          a: 'SW corner of Turk and Hyde',
          h: CORNER_HINT
        }, {
          q: 'Group 2 (PM)',
          a: 'SW corner of Turk and Leavenworth',
          h: CORNER_HINT
        }, {
          q: 'Group 3 (PM)',
          a: 'SE corner of Turk and Leavenworth',
          h: CORNER_HINT
        }, {
          q: 'Group 4 (PM)',
          a: 'NE corner of Ellis and Leavenworth',
          h: CORNER_HINT
        }, {
          q: 'Group 5 (PM)',
          a: 'SW corner of Turk and Jones',
          h: CORNER_HINT
        }, {
          q: 'Group 6 (PM)',
          a: 'SE corner of Turk and Larkin',
          h: CORNER_HINT
        }, {
          q: 'Group 7 (PM)',
          a: 'NW corner of Turk and Jones',
          h: CORNER_HINT
        }
      ],
      current: {},
      showsAnswer: false
    }
  },

  mounted () {
    this.next()
  },

  computed: {
    question () {
      return this.current.q
    },
    answer () {
      return this.showsAnswer ? this.current.a : this.current.h
    },
    answerClass () {
      return this.showsAnswer ? 'text-success' : 'text-muted'
    },
    cardClass () {
      return ''
    }
  },

  methods: {
    next () {
      const avails = this.items.filter(item => !item.isDone)

      if (!avails || (avails.length === 0)) {
        this.current = null
        return
      }

      this.showsAnswer = false

      this.current = avails[random(0, avails.length - 1)]
      this.current.isDone = true
    },
    reveal () {
      this.showsAnswer = true
    }
  }
}
</script>
