export const FETCH_TRADE = "FETCH_TRADE";
export const ADD_TRADE = "ADD_TRADE";
export const TOGGLE_TRADE_DETAIL_POPUP = "TOGGLE_TRADE_DETAIL_POPUP";

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

export function toggleTradeDetailPopup(payload) {
    return {
        type: TOGGLE_TRADE_DETAIL_POPUP,
        payload
    }
}