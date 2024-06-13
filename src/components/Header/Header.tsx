
import AppDate from "../UI/AppDate";
import AppLink from "../UI/AppLink";

export default function Header() {
    return (
        <header>
            <div>
                <AppLink href={"#"} title={"Сейчас в СМИ"} />
                <AppLink href={"#"} title={"В России"} />
                <AppLink href={"#"} title={"Рекомендуем"} />
            </div>
            <AppDate date={new Date().toLocaleString()}/>
        </header>
    )
}

// Верхняя строка