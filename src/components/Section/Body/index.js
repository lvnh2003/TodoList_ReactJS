import Item from "../TaskItem";

export default function Menu({ items, onToggle, onDelete, onEdit }) {
  // export default  function Menu({ items }){
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
