import AppLogo from "../../UI/AppLogo";
import AppLink from "../../UI/AppLink";
import SearchField from "./SearchField";

export default function Search() {
    return (
        <div>
            <AppLogo />
            <div className="search-line">
            <div className="links">
                <AppLink title={"Заголовок"} href={"#"}/>
            </div>
            <SearchField />
            </div>
        </div>
    )
}

// Компонент поиска