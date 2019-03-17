export const FETCH_TRADE = "FETCH_TRADE";
export const ADD_TRADE = "ADD_TRADE";
export const DISPLAY_TRADE_DETAIL = "DISPLAY_TRADE_DETAIL";
export const RESET_TRADE_DETAIL = "RESET_TRADE_DETAIL";

/*
 * action creators
 */

export function fetchTrade(payload) {
    return {
        type: FETCH_TRADE,
        payload
    }
}

export function addTrade(payload) {
    return {
        type: ADD_TRADE,
        payload
    }
}

export function displayTradeDetail(payload) {
    return {
        type: DISPLAY_TRADE_DETAIL,
        payload
    }
}

export function resetTradeDetail(payload) {
    console.log('dispatching actions....',payload)
    return {
        type: RESET_TRADE_DETAIL,
        payload
    }
}