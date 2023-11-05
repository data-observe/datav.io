export const LangSwitcher = () => {
    return (<span className="cursor-pointer w-12 text-sm font-medium" onClick={() => location.href = ("https://observex.io" + location.pathname)}>
        <p>EN</p>
    </span>)
}