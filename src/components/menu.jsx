import Button from "./button";

function Menu() {
  return (
    <div className="grid grid-cols-1 gap-3 m-4">
      <Button href="/main">Main</Button>
      <Button href="/library">Library</Button>
      <Button href="/downloads">Downloads</Button>
    </div>
  );
}

export default Menu;
