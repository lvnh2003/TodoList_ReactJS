import Item from "components/Section/Item"; 

export default function Menu({ items, onToggle, onDelete, onEdit }) {

  const listItems = items.map((item) => (
    <Item
      key={item.id}
      {...item}
      onToggle={onToggle}
      onDelete={onDelete}
      onEdit={onEdit}
    />
  ));
  return <div>{listItems}</div>;
  
}
