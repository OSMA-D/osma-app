function Button(props) {
  return (
    <a href={props.href} className={props.className}>
      <div className="transition-transform w-48 ease-[cubic-bezier(.69,.58,.32,1.69)] delay-60 hover:scale-105  p-2 pl-6 text-lg bg-zinc-100 hover:bg-zinc-300 dark:bg-zinc-600 dark:hover:bg-zinc-800 rounded-2xl">
        {props.children}
      </div>
    </a>
  );
}

function IconWithButton(props) {
  return (
    <div className="grid grid-cols-4">
      {props.icon}
      <div className="grid-span-3">{props.children}</div>
    </div>
  );
}

export { Button, IconWithButton };
