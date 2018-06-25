export const select = (client) => {
  return{
      type:"CLIENT_SELECTED",
      payload:client
  }
};
export const filterCl = (name) => {
    return {
        type:"FILTER_CLIENTS",
        payload:name
    }
}

