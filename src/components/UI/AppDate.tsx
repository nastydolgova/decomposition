interface DateProp{
    date: string
}

export default function AppDate({date}: DateProp) {
    return (
        <div>{date}</div>
    )
}

// дата