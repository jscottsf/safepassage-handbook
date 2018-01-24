import bestPractices from '../data/bestPractices.json'

export const state = () => ({
  bestPractices,

  filterTag: 'public'
})

export const getters = {
  bestPractices (state) {
    const pred = el => {
      return (el.include && el.include.includes(state.filterTag)) ||
        !el.exclude ||
        !el.exclude.includes(state.filterTag)
    }

    return {
      areas: state.bestPractices.areas.filter(pred).map(area => {
        return Object.assign({}, area, {
          sections: area.sections.filter(pred).map(section => {
            return Object.assign({}, section, {
              items: section.items.filter(pred)
            })
          })
        })
      })
    }
  }
}

export const mutations = {
  setFilterTag (state, filterTag) {
    state.filterTag = filterTag
  }
}
