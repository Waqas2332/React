import MenuListItem from "./MenuListItem";

function MenuList() {
  const items = [
    {
      id: "01",
      title: "List Item # 1",
    },
    {
      id: "02",
      title: "List Item # 2",
    },
    {
      id: "03",
      title: "List Item # 3",
    },
  ];
  return (
    <ul>
      {items.map((item) => (
        <MenuListItem title={item.title} key={item.id} />
      ))}
    </ul>
  );
}
export default MenuList;
