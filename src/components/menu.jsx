import { Button, IconWithButton } from "./button";
import {
  MenuIcon,
  ArchiveIcon,
  ArrowCircleDownIcon,
  CogIcon,
} from "@heroicons/react/outline";

function Menu() {
  return (
    <div className="grid grid-cols-1 gap-3 m-4">
      <Button href="/main">
        <IconWithButton icon={<MenuIcon className="h-7 w-7" />}>
          Main
        </IconWithButton>
      </Button>
      <Button href="/library">
        <IconWithButton
          icon={<ArchiveIcon className="transform translate-z-0 h-7 w-7" />}
        >
          Library
        </IconWithButton>
      </Button>
      <Button href="/downloads">
        <IconWithButton
          icon={
            <ArrowCircleDownIcon className="transform translate-z-0 h-7 w-7" />
          }
        >
          Downloads
        </IconWithButton>
      </Button>
      <Button href="/options">
        <IconWithButton
          icon={<CogIcon className="transform translate-z-0 h-7 w-7" />}
        >
          Options
        </IconWithButton>
      </Button>
    </div>
  );
}

export default Menu;
