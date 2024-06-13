interface LinkProps{
    title: string
    href: string
}

export default function AppLink({title, href}: LinkProps) {
    return (
        <a href={href}>{title}</a>
    )
}

// ссылка