export enum AProduct {
    INIT = '@@product/initialize',
}

export enum AVariator {
    UPDATE_OPTION = '@@variator/update_option',
    UPDATE_OPTIONS = '@@variator/update_options',
}

export enum AModalFabric {
    FETCH_SUCCESS = '@@modal_fabric/fetch_success',
    FETCH_ERROR = '@@modal_fabric/fetch_error',
    FETCH_RETRY = '@@modal_fabric/fetch_retry',
    SELECT_FABRIC = '@@modal_fabric/select_fabric',
    RESET_FABRIC = '@@modal_fabric/reset_fabric',
}

export enum AModalCollection {
    FETCH_SUCCESS = '@@modal_collection/fetch_success',
    FETCH_ERROR = '@@modal_collection/fetch_error',
    FETCH_RETRY = '@@modal_collection/fetch_retry',
    RESET = '@@modal_collection/reset'
}

export enum AModalProduct {
    INIT = '@@modal_product/initialize',
    UPDATE_OPTIONS = '@@modal_product/update_options'
}

export enum AModal {
    OPEN = '@@modal/open',
    CLOSE = '@@modal/close',
    CLOSE_ALL = '@@modal/close_all'
}

export enum ACart {
    ADD = '@@cart/add_entity'
}

export enum ACatalog {
    INIT = '@@catalog/init',
    CHANGE_PRICE = '@@catalog/change_price',
    CHANGE_ACTIVE_FILTER_ATTRIBUTES = '@@catalog/change_active_filter_attr',
    CHANGE_ACTIVE_FILTER_ATTRIBUTES_RANGE = '@@catalog/change_active_filter_attr_range',
    CLEAR_ACTIVE_FILTER = '@@catalog/clear_active_filter',
    CHANGE_SORT_TYPE = '@@catalog/change_sort_type',
    CHANGE_PAGE = '@@catalog/change_page',
    CHANGE_PER_PAGE = '@@catalog/change_per_page',
    CHANGE_ACTIVE_FILTER_COLLECTION = '@@catalog/change_active_filter_collection',
    CHANGE_STOCK = '@@catalog/change_stock',
    CHANGE_STOCK_OR_OUTLET = '@@catalog/change_stock_or_outlet',
    SET_NOT_ACCEPT_FILTER = '@@catalog/set_not_accept_filter',
    CHANGE_ACTIVE_FILTER_DATA = '@@catalog/change_active_filter_data'
}

export enum AFabrics {
    INIT = '@@fabric/initialize',
    SET_ACTIVE_TAB = '@@fabric/set_active_tab',
    FILTER_FABRICS = '@@fabric/filter_fabrics',
    CHANGE_ADDED_FABRICS = '@@fabric/change_added_fabrics',
    CHANGE_ADDED_ANOTHER_MATERIAL = '@@fabric/change_added_another_material',
    SET_NOT_ACCEPT_FILTER = '@@fabric/setNotAcceptFilter',
    CLEAR_FABRICS = '@@fabric/clearFilter',
    OPEN_FABRIC = '@@openFabric',
    CLEAR_ADDED_ITEMS= '@@clearAddedItems'
}

export enum AModalVideo {
    OPEN = '@@modal_video/open',
    CLOSE = '@@modal_video/close',
}

export enum AShowroom {
    INIT_LIST = '@@showroom/init_list'
}

export enum AModalForm {
    SET_DATA = '@@modal_form/set_data'
}
