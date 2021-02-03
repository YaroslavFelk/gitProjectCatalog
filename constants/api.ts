import SYSTEM from "./config";

const protocol = 'http';
const address = 'api'
const port = '8080'
const api_path = 'wp-json/rest'
const api_version = SYSTEM.is_production ? 'v4' : 'v4'

type RestModel = 'product' | 'menu' | 'catalog' | 'showrooms' | 'indexpage' | 'cart' | 'fabrics' | 'stock'

/**
 * Generate REST link based on model and arguments for it if provided
 *
 * @param model REST model corresponding for data block
 * @return {string} Compiled latest part of API url to get required data
 */
const generateEndpointLink = (model: RestModel, ...args: string[]): string => `${model}/${args ? args.join('/') : ''}`

/**
 * Generate API link based constants and {version} if provided
 *
 * @param version {null|string} Version of API required for request
 * @param customPort
 * @return {string} Base API url
 */
const generateAPILink = (version: null | string = null, customPort: null | string = null) => `${protocol}://${address}:${customPort ?? port}/${api_path}/${version ? version : api_version}`

/**
 *
 * @param endpoint {string} REST request url
 * @param options {RequestInit} Fetch request options
 */
const createRequest = async (endpoint: string, options: (RequestInit | {}) = {}) => {
  try {
    const response = await fetch(endpoint, options)
    const content = await response.json()
    return {
      data: content,
      status: response.status,
      request: endpoint,
      options: options
    }
  } catch( e ){
    return {
      status: 500,
      request: endpoint,
      options: options,
      error: e
    }
  }
}

export const REQUEST = {
  /**
   *  Get single product by product id/slug
   *
   *  @param key {string|number} Product id or slug ( 164811 | raf-triple )
   */
  product: (key) => createRequest(`${generateAPILink()}/${generateEndpointLink('product', key)}`),

  /**
   *  Get single product's sets by product id/slug
   *
   *  @param key {string|number} Product id or slug ( 164811 | raf-triple )
   */
  productSets: (key) => createRequest(`${generateAPILink()}/${generateEndpointLink('product', key, 'sets')}`),

  /**
   *  Get single product's collectibles by product id/slug
   *
   *  @param key {string|number} Product id or slug ( 164811 | raf-triple )
   */
  productCollectibles: (key) => createRequest(`${generateAPILink('v3')}/${generateEndpointLink('product', key, 'collections')}`),

  /**
   *  Get single catalog by catalog id
   *
   *  @param slug {string} Catalog slug ( sofas )
   */
  // catalog: (slug) => createRequest(`${generateAPILink('v5', '8888')}/${generateEndpointLink('catalog', slug)}`),
  catalog: (slug) => createRequest(`${generateAPILink()}/${generateEndpointLink('catalog', slug)}`),

  /**
   *  Get single catalog by catalog id
   *
   *  @param slug {string} Catalog slug ( sofas )
   */
  stock: () => createRequest(`${generateAPILink('v5', '8888')}/${generateEndpointLink('stock')}`),

  /**
   *  Get single catalog by catalog id
   *
   *  @param slug {string} Catalog slug ( sofas )
   */
  stockCategory: (slug) => createRequest(`${generateAPILink('v5', '8888')}/${generateEndpointLink('stock', `category/${slug}`)}`),

  /**
   *  Get all showrooms
   */
  showrooms: () => createRequest(`${generateAPILink('v3')}/${generateEndpointLink('showrooms')}`),

  /**
   *  Get data for main page
   */
  main: () => createRequest(`${generateAPILink('v3')}/${generateEndpointLink('indexpage')}`),

  /**
   *  Get all materials including veneers, enamels, fabrics
   */
  materials: () => createRequest(`${generateAPILink('v3')}/${generateEndpointLink('fabrics')}`),

  /**
   *  Get single fabric's details fabric id
   *
   * @param id {number|string} Fabric id ( 142304 )
   */
  fabric: () => createRequest(`${generateAPILink('v3')}/${generateEndpointLink('fabrics')}`),

  /**
   *  Get single product's sets by product's id or slug
   */
  addToCart: (data) => createRequest(`${generateAPILink('v3')}/${generateEndpointLink('fabrics')}`, {
    method: 'POST',
    body: data,
    headers: { 'Content-Type': 'application/json' }
  }),
}




