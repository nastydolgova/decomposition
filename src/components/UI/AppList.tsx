interface ListProps {
    children: React.ReactNode
}

export default function AppList({children}: ListProps) {
    return (
        <ul>{children}</ul>
    )
}

// список