interface BannerProp{
    info: string
}

export default function AppBanner({info} : BannerProp) {
    return (
        <div>{info}</div>
    )
}

// баннер