import itemslist from "../itemslist.json";
export const searchitemtoList = (searchitem) => {
  return itemslist.data.itemslist.filter((cur) =>
    cur.title.toLowerCase().includes(searchitem.toLowerCase())
  );
};
