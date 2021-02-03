import {ACatalog} from "../../constants/actions";
import {
  filterItem,
  getFiltersData,
  sortBy
} from "../../components/CatalogPage/CatalogPageFunctions";

interface IInitialState {
  initialCatalog: Array<any>,
  filtredCatalog: [],
  initialFilter: {
    attributeFilter: any;
    priceRange: [number, number]
  },
  filtredFilter: {
    collection: Array<any> ;
    attributeFilter: any;
  },
  activeFilter: {
    collection: Array<string>;
    attributeFilter: any;
    stock : boolean | 0 | 1,
  },
  lastClickedCategory: any,
  lastClickedColor: string,
  defaultPerPAge: number,
  perPage: number,
  page: number,
  defaultSort: 'priceAsc',
  sort: string,
  acceptIsActive: boolean
}


const  initialState : IInitialState = {
  initialCatalog: [],
  filtredCatalog: [],
  initialFilter: {
    attributeFilter: [],
    priceRange: [0, 0]
  },
  filtredFilter: {
    collection: [],
    attributeFilter: []
  },
  activeFilter: {
    collection: [],
    attributeFilter: {},
    stock : false
  },
  lastClickedCategory: {
    name: '',
    data: []
  },
  lastClickedColor: '',
  defaultPerPAge: 16,
  perPage: 16,
  page: 1,
  defaultSort: 'priceAsc',
  sort: 'priceAsc',
  acceptIsActive : false
}

const catalogReducer = ( state = initialState, action ) => {
  switch( action.type ){
    case ACatalog.INIT: {
      let tempFilter = getFiltersData(action.payload.catalog, action.payload.activeFilter)
      const  activeFilter = {...action.payload.activeFilter, priceRange: action.payload.activeFilter.priceRange.length ? action.payload.activeFilter.priceRange : tempFilter.priceRange}
      let filtredCatalog = sortBy(action.payload.catalog.filter(item => filterItem(item, activeFilter) ),  action.payload.sort )
      return {
        ...state,
        initialCatalog: action.payload.catalog,
        activeFilter,
        initialFilter: tempFilter,
        filtredFilter: getFiltersData(filtredCatalog, activeFilter),
        filtredCatalog,
        page: action.payload.page,
        perPage: action.payload.perPage,
        sort: action.payload.sort,
      }
    }
    case ACatalog.CHANGE_PRICE: {
      const activeFilter =  {...state.activeFilter, priceRange: action.payload.priceRange}
      let filtredCatalog = sortBy(state.initialCatalog.filter(item => filterItem(item, activeFilter) ), state.sort )

      return {
        ...state,
        activeFilter,
        filtredCatalog,
        filtredFilter: getFiltersData(filtredCatalog, activeFilter),
        lastClickedCategory: {
          name: '',
          data: []
        },
        page: 1,
        acceptIsActive: true,
      }
    }
    case ACatalog.CHANGE_ACTIVE_FILTER_ATTRIBUTES: {
      let isDeleteActiveAttr = false;
      const activeFilter = {
        ...state.activeFilter,
        // проходимся по массиву активных атрибутов
        attributeFilter: state.activeFilter.attributeFilter.map(attr => {
          // если совпадает с нашим атрибутом
          if (attr.taxonomy_slug === action.payload.slug) {
            isDeleteActiveAttr = action.payload.value && attr.term_slug.includes(action.payload.value.term_slug)
            // меняем значение активного атрибута, если это активное значение
            attr.term_slug = action.payload.value
                    // если оно уже имеется в активных, удалеям его иначе добавляем
                    ? attr.term_slug.includes(action.payload.value.term_slug)
                            ? attr.term_slug.filter(val => val !== action.payload.value.term_slug)
                            : [...attr.term_slug, action.payload.value.term_slug]
                    // сброс значений
                    : []
          }
          return attr
        })
      }

      let filtredCatalog = sortBy(state.initialCatalog.filter(item => filterItem(item, activeFilter) ), state.sort )
      return {
        ...state,
        activeFilter,
        filtredCatalog,
        filtredFilter: getFiltersData(filtredCatalog, activeFilter),
        lastClickedCategory: isDeleteActiveAttr ? {name: '', data: []} : state.filtredFilter.attributeFilter
          .find(attr => attr.taxonomy_slug === action.payload.slug).taxonomy_slug === state.lastClickedCategory.name
            ? state.lastClickedCategory
            : {
              name: action.payload.slug,
              data: state.filtredFilter.attributeFilter.find(attr => attr.taxonomy_slug === action.payload.slug).values
            },
        lastClickedColor: action.payload.slug === 'pa_color' ? action.payload.value.term_slug : '',
        page: 1,
        acceptIsActive: true
      }
    }
    case ACatalog.CHANGE_ACTIVE_FILTER_ATTRIBUTES_RANGE: {
      const valToNumber = action.payload.value.map( val => Number(val))
      const activeFilter = {
      ...state.activeFilter,
          // проходимся по массиву активных атрибутов
          attributeFilter: state.activeFilter.attributeFilter.map(attr => {
            // если совпадает с нашим атрибутом
            if (attr.taxonomy_slug === action.payload.slug) {
              //если знчение ренджа равно изначальному, сбрасываем фильтр
              let initialState = state.initialFilter.attributeFilter.find(attr => attr.taxonomy_slug === action.payload.slug).values

              initialState[0].term_slug === valToNumber[0] && initialState[initialState.length - 1].term_slug === valToNumber[1]
                ? attr.term_slug = []
                // меняем значение активного атрибута, если это активное значение
                : attr.term_slug = valToNumber
            }
          return attr
        })
      }
      let filtredCatalog = sortBy(state.initialCatalog.filter(item => filterItem(item, activeFilter) ), state.sort )

      return {
        ...state,
        activeFilter,
        filtredCatalog,
        filtredFilter: getFiltersData(filtredCatalog, activeFilter),
        page: 1,
        acceptIsActive: true,
        lastClickedCategory: action.payload.value.length
          ? {
            name: action.payload.slug,
            data: state.filtredFilter.attributeFilter.find(attr => attr.taxonomy_slug === action.payload.slug).values
          }
          : {name: '', data: []},
      }
    }
    // case ACatalog.CHANGE_ACTIVE_FILTER_COLLECTION: {
    //   const activeFilter = {
    //     ...state.activeFilter,
    //     collection: state.activeFilter.collection.includes(action.payload.value)
    //             ? state.activeFilter.collection.filter( col => col !== action.payload.value)
    //             : [...state.activeFilter.collection, action.payload.value]
    //   }
    //   let filtredCatalog = sortBy(state.initialCatalog.filter(item => filterItem(item, activeFilter) ), state.sort )
    //   return {
    //     ...state,
    //     activeFilter,
    //     filtredCatalog,
    //     filtredFilter: getFiltersData(filtredCatalog, activeFilter),
    //     page: 1,
    //     acceptIsActive: true,
    //     lastClickedCategory: state.activeFilter.collection.includes(action.payload.value)
    //       ? {name: '', data: []}
    //       : state.lastClickedCategory.name === 'collection'
    //         ? state.lastClickedCategory
    //         : {
    //           name: 'collection',
    //           data: state.filtredFilter.collection
    //         }
    //     }
    // }
    case ACatalog.CHANGE_ACTIVE_FILTER_DATA: {
      const activeFilter = {
        ...state.activeFilter,
        [action.payload.category] : state.activeFilter[action.payload.category].includes(action.payload.value)
                ? state.activeFilter[action.payload.category].filter( col => col !== action.payload.value)
                : [...state.activeFilter[action.payload.category], action.payload.value]
      }
      let filtredCatalog = sortBy(state.initialCatalog.filter(item => filterItem(item, activeFilter) ), state.sort )

      return {
        ...state,
        activeFilter,
        filtredCatalog,
        filtredFilter: getFiltersData(filtredCatalog, activeFilter),
        page: 1,
        acceptIsActive: true,
        lastClickedCategory: state.activeFilter[action.payload.category].includes(action.payload.value)
          ? {name: '', data: []}
          : state.lastClickedCategory.name === action.payload.category
            ? state.lastClickedCategory
            : {
              name: action.payload.category,
              data: state.filtredFilter[action.payload.category]
            }
        }
    }
    // case ACatalog.CHANGE_STOCK: {
    //   const activeFilter = {
    //     ...state.activeFilter,
    //     stock: action.payload.value
    //   }
    //   let filtredCatalog = sortBy(state.initialCatalog.filter(item => filterItem(item, activeFilter) ), state.sort )
    //
    //   return {
    //     ...state,
    //     activeFilter,
    //     filtredCatalog,
    //     filtredFilter: getFiltersData(filtredCatalog, activeFilter),
    //     page: 1,
    //     lastClickedCategory: {name: '', data: []}
    //   }
    // }
    case ACatalog.CHANGE_STOCK_OR_OUTLET: {
      const activeFilter = {
        ...state.activeFilter,
        [action.payload.key]: action.payload.value
      }
      let filtredCatalog = sortBy(state.initialCatalog.filter(item => filterItem(item, activeFilter) ), state.sort )

      return {
        ...state,
        activeFilter,
        filtredCatalog,
        filtredFilter: getFiltersData(filtredCatalog, activeFilter),
        page: 1,
        lastClickedCategory: {name: '', data: []}
      }
    }

    case ACatalog.CLEAR_ACTIVE_FILTER: {
      let activeFilter = {
        attributeFilter: state.activeFilter.attributeFilter.map(attr => { return {...attr, term_slug: []} }),
        priceRange: state.initialFilter.priceRange,
      }

      for (let key in state.activeFilter) {
        if (key !== 'attributeFilter' && key !== 'priceRange') {
          if (key === 'stock' || key === 'outlet') {
            activeFilter = {
              ...activeFilter,
              [key]: false
            }
          }else {
            activeFilter = {
              ...activeFilter,
              [key]: []
            }
          }
        }
      }

      return {
        ...state,
        activeFilter: activeFilter,
        filtredCatalog: sortBy(state.initialCatalog.filter(item => filterItem(item, activeFilter) ), state.sort ),
        filtredFilter: getFiltersData(state.initialCatalog, activeFilter),
        lastClickedCategory: {
          name: '',
          data: []
        },
        page: 1,
      }
    }
    case ACatalog.CHANGE_SORT_TYPE: {
      return {
        ...state,
        sort: action.payload.sort,
        filtredCatalog: [...sortBy(state.filtredCatalog, action.payload.sort )],
        page: 1,
        acceptIsActive: true
      }
    }
    case ACatalog.CHANGE_PAGE: {
      return {
        ...state,
        page: action.payload.page
      }
    }
    case ACatalog.CHANGE_PER_PAGE: {
      return {
        ...state,
        perPage: action.payload.perPage,
        page: 1,
        acceptIsActive: true
      }
    }
    case ACatalog.SET_NOT_ACCEPT_FILTER: {
      return {
        ...state,
        acceptIsActive: action.payload.notAccept
      }
    }

    default:
      return state
  }
}

export default catalogReducer;