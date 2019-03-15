export const FETCH_TRADE = "FETCH_TRADE";
export const ADD_TRADE = "ADD_TRADE";

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