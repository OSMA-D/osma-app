function Button(props) {
  return (
    <a href={props.href}>
      <div className="transition w-48 ease-[cubic-bezier(1,.22,.32,1.69)] delay-60 hover:scale-110 p-2 pl-6 text-lg bg-zinc-400 hover:bg-zinc-600 dark:bg-zinc-600 dark:hover:bg-zinc-800 rounded-2xl">
        {props.children}
      </div>
    </a>
  );
}

export default Button;
