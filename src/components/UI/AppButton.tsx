interface ButtonProp{
    text: string
}

export default function AppButton({text}: ButtonProp) {
    return (
        <button>{text}</button>
    )
}

// кнопка