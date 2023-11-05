export const LangSwitcher = () => {  
    return (<span className="cursor-pointer   w-12 text-sm font-medium" onClick={() =>location.href = ("https://zh.observex.io" + location.pathname)}>
        <p>中文</p>
    </span>)
}