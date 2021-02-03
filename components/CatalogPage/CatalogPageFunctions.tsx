import * as React from "react"
import {IVariations} from "../../types/ICatalog";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {shallow} from "enzyme";
import {ACatalog} from "../../constants/actions";
import {useRouter} from "next/router";
import {formatPrice} from "../../utils";

export function getRealPrice(item) {
  if (item.default_variation_id &&  item.variations[item.default_variation_id] && item.variations[item.default_variation_id].fabric) {
    let rate = (100 + item.variations[item.default_variation_id]?.variation_attributes
            .find(varAttr => varAttr.taxonomy_slug === 'pa_fabric')?.details?.category.rate ) / 100
    return rate
      ? item.variations[item.default_variation_id].price * rate
      : item.variations[item.default_variation_id].price

  }
  return item.variations[item.default_variation_id].price
}

function getMinPrice(item) {
  let minPrice = 999999;
  for (let variation in item.variations) {
    if (item.variations[variation].price < minPrice) {
      minPrice = item.variations[variation].price
    }
  }

  return Number(minPrice)
}

function getMaxPrice(item) {
  let maxPrice = 0;
  for (let variation in item.variations) {
    if (item.variations[variation].price > maxPrice) {
      maxPrice = item.variations[variation].price
    }
  }
  return Number(maxPrice)
}

function getDiscount(item) {
  return Math.round(item.variations[item.default_variation_id].price / item.variations[item.default_variation_id].price)
}

interface ICatalog {
  default_variation_id: string;
  stock?: any;
  outlet?: any;
  showrooms?: any;
  discount?: any,
  city?: any,
  category?: any,
  static_attributes : any,
  variable_attributes : any
  variations : {
    fabric : any
  }
  collection : any
}


export function getFiltersData(catalog : Array<ICatalog>, initialActiveFilter : any) {
  let tempFilter : any = {
    collection: [],
    priceRange: initialActiveFilter.priceRange,
    attributeFilter : initialActiveFilter.attributeFilter.map( attr => {
      return {taxonomy_slug: attr.taxonomy_slug, taxonomy_name: attr.taxonomy_name, values: [] };
    }),

  }

  tempFilter = initialActiveFilter.discount ? tempFilter = {
    ...tempFilter,
    discount: [],
    city: [],
    category: []
  } : tempFilter

  let minPrice = 0;
  let maxPrice = 0;


  catalog.length && catalog.map( item => {
    // собираем все статические атрибуты по категориям
    item.static_attributes.map( attr => {
      tempFilter.attributeFilter.map(activeAttr => {
        if (activeAttr.taxonomy_slug === attr.taxonomy_slug) {


          if (!activeAttr.taxonomy_name) {
            activeAttr.taxonomy_name = attr.taxonomy_name
          }


          let attrVal = activeAttr.values.find(val => val.term_slug === attr.term_slug)
          attrVal
                  ? attrVal.count++
                  : activeAttr.values.push({term_slug: attr.term_slug, term_name: attr.term_name, count: 1})
        }
      })
    })

    // все по аналогии с вариативными атрибутами
    if (item.variable_attributes && item.variable_attributes.length > 0) {
      item.variable_attributes.map( attr => {

        tempFilter.attributeFilter.map(activeAttr => {
          if (attr.taxonomy_slug === 'pa_fabric' && activeAttr.taxonomy_slug === 'pa_color') {
            if (!activeAttr.taxonomy_name) {activeAttr.taxonomy_name = 'Цвет'}

            attr.taxonomy_options.map(opt => {
              if (!activeAttr.values.find(val => val.term_slug === opt.color.slug) ) {
                let neededVar = Object.values(item.variations).find(variation =>
                        variation?.variation_attributes.find(vartAttr => vartAttr.taxonomy_slug === 'pa_fabric')?.details.color.slug === opt.color.slug)

                if (!neededVar) return
                activeAttr.values.push({
                  term_slug: opt.color.slug,
                  hex:  opt.color.hex,
                  term_name : neededVar.variation_attributes.find(vartAttr => vartAttr.taxonomy_slug === 'pa_fabric')?.details.color.name
                })
              }
            })
          }


          attr.taxonomy_options.map(opt => {
            if (activeAttr.taxonomy_slug === attr.taxonomy_slug) {

              if (!activeAttr.taxonomy_name) {
                activeAttr.taxonomy_name = attr.taxonomy_name
              }

              let attrVal = activeAttr.values.find(val => val.term_slug === opt.term_slug)
              attrVal
                ? attrVal.count++
                : activeAttr.values.push({term_slug: opt.term_slug, term_name: opt.term_name, count: 1})
            }

          })
        })
      })
    }

    // находим минимальную цену
    let itemMinPrice = getMinPrice(item)
    if (!minPrice || itemMinPrice < minPrice) {
      minPrice = itemMinPrice
    }

    // находим максимальную цену
    let itemMaxPrice = getMaxPrice(item)
    if (!maxPrice || itemMaxPrice > maxPrice) {
      maxPrice = itemMaxPrice
    }

    // for (let key in tempFilter) {
    //   if (key === 'collection' || key === 'category') {
    //     setFilterCategoryItems(item, tempFilter, key)
    //   }
    // }

    if (tempFilter.city && item?.stock?.entities?.length) {
      item?.stock?.entities?.map( showroom => {
        if (!tempFilter.city.find(val => val.slug === showroom.location.city.slug) ) {
          tempFilter.city = [
            ...tempFilter.city, {
              slug: showroom.location.city.slug,
              name: showroom.location.city.name,
            }]

        }
      })
    }

    if (tempFilter.discount && item?.stock?.isOutlet) {
      let discount = getDiscount(item)
      if (!tempFilter.discount.find(val => val.slug === discount) ) {
        tempFilter.discount = [
          ...tempFilter.discount, {
            slug: discount,
            name: discount + ' %',
          }]
      }
    }

    return item
  })

  tempFilter.priceRange = [Math.floor(minPrice / 500) * 500, Math.ceil(maxPrice / 500) * 500]
  initialActiveFilter.attributeFilter.map( actAtr => {
    if (actAtr.type === 'range') {
      let values = tempFilter.attributeFilter.find(atr => atr.taxonomy_slug === actAtr.taxonomy_slug).values
      values.map( val => {
        val.term_slug = Number(val.term_slug.split('-sm')[0])

        return val
      })
      values.sort((a, b) => {
        return a.term_slug - b.term_slug
      })
    }
    return actAtr
  })

  return tempFilter
}

function setFilterCategoryItems(item, tempFilter, key) {
 if (item[key] && !tempFilter[key].find(val => val.slug === item[key].slug  || val.slug === item[key].name || val.slug ===  item[key])) {
    tempFilter[key] = [
            ...tempFilter[key], {
      slug: item[key].slug || item[key].name || item[key],
      name: item[key].name || item[key].slug || item[key],
    }]
  }
}

export function filterItem(item, activeFilter) {
  let isset: boolean;
  let activeAttributes = activeFilter.attributeFilter.filter( (attr) =>  attr.term_slug.length > 0)
  const itemVariations : Array<IVariations> = Object.values(item.variations)

  isset = activeFilter.stock
          ? itemVariations.some(variation => Number(variation.stock))
          : true

  activeFilter.outlet
          ? isset = item.stock?.isOutlet ?? false
          : true

  if (isset && activeAttributes.length > 0) {
    activeAttributes.filter(attr => {
      // презумция виновности. Изначально мы хотим удлать товар, если не найдем нужный атррибут.
      let isFiltred : boolean

      if (attr.type === 'range') {

        isFiltred = !item.static_attributes.some(statAttr => {

          return statAttr.taxonomy_slug === attr.taxonomy_slug
                  && Number(statAttr.term_slug.split('-sm')[0]) >= attr.term_slug[0]
                  && Number(statAttr.term_slug.split('-sm')[0]) <= attr.term_slug[1]
        })

        if (isFiltred && activeFilter.stock) {
          isFiltred = !itemVariations.some(variation => {
            if (variation.stock) {
              return variation.variation_attributes.some( varAttr => {
                return varAttr.taxonomy_slug === attr.taxonomy_slug
                        && Number(varAttr.term_slug.split('-sm')[0]) >= attr.term_slug[0]
                        && Number(varAttr.term_slug.split('-sm')[0]) <= attr.term_slug[1]
              })
            }
            return false
          })

        } else {
          isFiltred = !isFiltred
                  ? false
                  : !item.variable_attributes.some(varAttr =>
                          varAttr.taxonomy_slug === attr.taxonomy_slug
                          && varAttr.taxonomy_options.some(option =>
                          Number(option.term_slug.split('-sm')[0]) >= attr.term_slug[0]
                          && Number(option.term_slug.split('-sm')[0]) <= attr.term_slug[1]
                          )
                  )
        }


      } else {
        //проходимся по массиву статических атриботов товара, если находим нужный товар, оставляем его, пока
        isFiltred = !item.static_attributes.some(statAttr => statAttr.taxonomy_slug === attr.taxonomy_slug && attr.term_slug.includes(statAttr.term_slug) )

        //проходимся по массиву вариативным атриботов товара, если находим нужный товар, оставляем его, пока
        if (isFiltred && activeFilter.stock) {
          isFiltred = !itemVariations.some(variation => {
            if (variation.stock) {
              return variation.variation_attributes.some( varAttr => {
                if (attr.taxonomy_slug === 'pa_color' && varAttr.taxonomy_slug === 'pa_fabric') {
                  return attr.term_slug.includes(varAttr?.details?.color.slug)
                }
                return varAttr.taxonomy_slug === attr.taxonomy_slug && attr.term_slug.includes(varAttr.term_slug)
              })
            }
            return false
          })

        } else {
          isFiltred = !isFiltred
                  ? false
                  : !item.variable_attributes.some(varAttr => {
                            if (attr.taxonomy_slug === 'pa_color' && varAttr.taxonomy_slug === 'pa_fabric') {
                              return varAttr.taxonomy_options.some(option => attr.term_slug.includes(option.color.slug))
                            }
                            return varAttr.taxonomy_slug === attr.taxonomy_slug && varAttr.taxonomy_options.some(option => attr.term_slug.includes(option.term_slug))
                          }
                  )
        }

      }
      // отфильтрован ли товар
      return isFiltred
    }).length === 0
            // если товар прошел проверку аттрибутов, переходим к следующим проверкам.
            ? isset = true
            // если не прошел отфильтровываем.
            : isset = false
  }

  // // проверка на активную коллекцию
  //   if (isset && activeFilter.collection.length) {
  //     isset = item.collection ? activeFilter.collection.includes( item.collection.name) : false
  //   }
  for (let key in activeFilter) {
    if ( (key === 'collection' || key === 'category' ) && isset && activeFilter[key].length) {
      isset = item[key] && activeFilter[key].includes(item[key].slug || item[key].name || item[key])
    }
  }

  if (isset && activeFilter.discount?.length) {
    isset = item.stock?.isOutlet && activeFilter.discount.includes(getDiscount(item))
  }

  if (isset && activeFilter.city?.length) {
    isset = item.stock?.entities && item.stock?.entities.find(showroom => activeFilter.city.includes(showroom.location.city.slug) )
  }

  // проверка на диапозон цены
  if (isset) {
    isset = getMaxPrice(item) >= activeFilter.priceRange[0] && getMinPrice(item) <= activeFilter.priceRange[1]
  }

  return isset
}

export function setUrlStringFilter(activeFilter, initialActiveFilter) {
  let paramString = ''
  let activeAtributesParams = ''
  let activeAnotherParams = ''
  let activePriceParams = ''
  let activeAttributes = activeFilter.attributeFilter.filter( attr => attr.term_slug.length > 0)
  if (activeAttributes.length) {
    activeAtributesParams = '"attributes":{';

    activeAttributes.map( attr => {
      activeAtributesParams += '"' + attr.taxonomy_slug.replace('pa_', '') + '":['
      attr.term_slug.forEach( slug => activeAtributesParams += typeof slug === 'string' ?  '"' + slug + '",' : '' + slug + ',')
      activeAtributesParams = activeAtributesParams.slice(0, -1)
      activeAtributesParams += '],'
      return attr
    })
    activeAtributesParams = activeAtributesParams.slice(0, -1)
    activeAtributesParams += '},'
  }

  for (let key in activeFilter) {
    if (key !== 'priceRange' && key !== 'attributeFilter' && key !== 'stock' && key !== 'outlet') {
      if (activeFilter[key].length) {
        activeAnotherParams += `"${key}":[`;
        activeFilter[key].forEach( item => {
          activeAnotherParams += `"${item}",`
        })
        activeAnotherParams = activeAnotherParams.slice(0, -1)
        activeAnotherParams += '],';
      }
    }
  }



  if (activeFilter.priceRange[0] !== initialActiveFilter.priceRange[0] || activeFilter.priceRange[1] !== initialActiveFilter.priceRange[1]) {
    activePriceParams = '"priceRange":[' + activeFilter.priceRange[0] + ',' + activeFilter.priceRange[1] + '],'
  }

  if (activeAtributesParams || activeAnotherParams || activePriceParams) {
    paramString += '&filter={' + activeAtributesParams + activeAnotherParams + activePriceParams
    paramString = paramString.slice(0, -1) + '}'
  }
  return paramString
}

export function sortBy(catalog, sortType ) {
  switch (sortType) {
    case 'priceAsc':
      return catalog.sort(sortByPriceAsc)
    case 'priceDesc':
      return catalog.sort(sortByPriceDesc)
    case 'nameAsc':
      return catalog.sort(sortByName)
    case 'nameDesc':
      return catalog.sort(sortByName).reverse()
    default:
      return catalog
  }
}

function sortByPriceAsc(a ,b) {
  return getRealPrice(a) - getRealPrice(b)
}

function sortByPriceDesc(a ,b) {
  return getRealPrice(b) - getRealPrice(a)
}

function sortByName(a, b) {
  const nameA= a.name.toLowerCase(),
        nameB=b.name.toLowerCase();
  if (nameA < nameB)
    return -1
  if (nameA > nameB)
    return 1
  return 0
}

export function attributesSort(a, b) {
  a = a.term_slug.toString().split('-sm')[0]
  b = b.term_slug.toString().split('-sm')[0]
  return  isNaN(a - b)
          ? isNaN(a.split('x')[0] - b.split('x')[0])
                  ? a < b  ? -1 : a > b ? 1 : 0
                  : a.split('x')[0] - b.split('x')[0]
          : a - b
}

export function setInitialActiveFilterAttributes(attributes_filter_list) {
  let activeAttributes = []
  for (let attribute in attributes_filter_list) {
    activeAttributes.push({ taxonomy_slug: attribute, taxonomy_name: '', term_slug: [], type: attributes_filter_list[attribute]})
  }
  return activeAttributes
}


export function useSetUrlString(router, activeFilter, initialFilter) {
  const defaultPerPage = useSelector((state:RootState) => state.catalog.defaultPerPAge);
  const defaultSort = useSelector((state:RootState) => state.catalog.defaultSort);
  const sort = useSelector((state:RootState) => state.catalog.sort);
  const perPage = useSelector((state:RootState) => state.catalog.perPage);
  const page = useSelector((state:RootState) => state.catalog.page);

  useEffect( () => {
    let paramString = setUrlStringFilter(activeFilter, initialFilter)

    if (sort !== defaultSort) {
      paramString += '&sort=' + sort
    }

    if (page !== 1) {
      paramString += '&page=' + page
    }

    if (perPage !== defaultPerPage) {
      paramString += '&perPage=' + perPage
    }

    if (activeFilter.stock ) {
      paramString += '&stock=1'
    }

    if (activeFilter.outlet ) {
      paramString += '&outlet=1'
    }

    paramString = paramString.replace('&', '?')
    paramString = paramString.replaceAll(' ', '_')
    let path = router?.query?.slug ? `${router.pathname.replace('[slug]', '')}${router.query.slug}` : router.pathname
    window.history.replaceState({path:`${path}${paramString}`}, '', `${path}${paramString}`)
    // window.onpopstate = () => console.log(router)
    // router.push('http://localhost:3000/product-category/sofas',  `/product-category/${router.query.slug}${paramString}` , {shallow: true})
  }, [activeFilter, sort, page, perPage])
}

export function getFun(item, activeVariation, activeAttributes) {
  // const activeFilter = useSelector((state: RootState) => state.catalog.activeFilter)
  if (item.id === '161482' && activeVariation.id === "163777" ) {
    // @ts-ignore
    const a : any = document.querySelector('.haveFun').style.right = '20px'

  }
}

export function initCatalog(catalog) {
  const init = setInitialActiveFilterAttributes(catalog?.attributes_filter_list)
  const dispatch = useDispatch()
  const defaultPerPage =  useSelector((state:RootState) => state.catalog.defaultPerPAge)
  const defaultSort =  useSelector((state:RootState) => state.catalog.defaultSort)
  const router = useRouter()

  let perPage : number
  let page : number
  let sort : string
  let stock = false
  let filter : any = null
  let initAttr = []
  let initCollection = []
  let initPriceRange = []

  let outlet = false
  let initDiscount = []
  let initCity = []
  let initCategory = []




  for (let queryItem in router.query) {
    switch (queryItem) {
      case 'filter':
        let string =  String(router.query[queryItem])
        while (string.indexOf('_') > -1) {
          string = string.replace('_', ' ')
        }
        filter = JSON.parse(string)
        let temporaryAttrs = []
        if (filter.attributes) {
          for (let attr in filter.attributes ) {
            temporaryAttrs = [...temporaryAttrs, {taxonomy_slug: 'pa_' + attr, term_slug: filter.attributes[attr] } ]
          }
        }
        filter.collection ? initCollection = filter.collection : null
        filter.priceRange ? initPriceRange = filter.priceRange : null


        filter.discount ? initDiscount = filter.discount.map(discount => Number(discount)) : null
        filter.city ? initCity = filter.city : null
        filter.category ? initCategory = filter.category : null


        filter.attributes = temporaryAttrs
        initAttr = init.map( initattr => {
          return {...initattr, term_slug: temporaryAttrs.find(attr => attr.taxonomy_slug === initattr.taxonomy_slug)?.term_slug ?? [] }
        })
        break
      case 'perPage':
        perPage = Number(router.query[queryItem])
        break
      case 'page':
        page = Number(router.query[queryItem])
        break
      case 'sort':
        sort = router.query[queryItem] as string
        break
      case 'stock':
        stock = true
        break
      case 'outlet':
        outlet = true
        break
      default:
        break
    }
  }

  let activeFilter : any = {
    attributeFilter: initAttr.length ? initAttr : init,
    collection: initCollection,
    stock: stock,
    priceRange: initPriceRange.length ? initPriceRange : [],
  }

if (router.pathname === '/stock') {
  activeFilter = {
    ...activeFilter,
    discount: initDiscount,
    city: initCity,
    category: initCategory,
    outlet: outlet,
  }
}
  dispatch({
    type: ACatalog.INIT,
    payload: {
      catalog: catalog?.items ? catalog?.items?.filter(item =>
              !!Number(item.default_variation_id)
              && !!item.variations[item.default_variation_id]
              && !!item.variations[item.default_variation_id]?.variation_attributes
              && item.variable_attributes !== 0
              && item.variable_attributes.length > 0
      ) : [],
      activeFilter,
      page: page ?? 1,
      perPage: perPage ?? defaultPerPage ,
      sort: sort ?? defaultSort
    }
  })
}

export function isOneSelectFilter(activeFilter, initialPriceRange, name) {
  let count = 0

  if ( activeFilter.priceRange[0] !== initialPriceRange[0] && activeFilter.priceRange[1] !== initialPriceRange[1]) {
    count++
  }

  for (let key in activeFilter) {
    if (key !== 'priceRange' && key !== 'attributeFilter' && key !== name  ) {
      if (activeFilter[key] && activeFilter[key]?.length) {
        count++
      }
    }
  }
  activeFilter.attributeFilter.map( attr => {
    if (attr.taxonomy_slug !== name && attr.term_slug && attr.term_slug.length)  {
      count++
    }
  })

  return count < 1
}

export function getFormatPriceWithoutRub(price, rate) {
  let priceString = formatPrice(price *  ( rate  ? (rate + 100) / 100 : 1) )
  return priceString.substring(0, priceString.length - 2)
}