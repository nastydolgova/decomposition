import AppList from "../../UI/AppList";
import AppLink from "../../UI/AppLink";
import AppIcon from "../../UI/AppIcon";

export default function NewsView() {
    return (
        <AppList>
            <li>
                <AppIcon />
                <AppLink href={'#'} title={'Новость 1'} />
            </li>
        </AppList>
    )
}

// Список новостей