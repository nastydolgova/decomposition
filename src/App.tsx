import Header from "./components/Header/Header"
import NewsView from "./components/Main/NewsView/NewsView"
import AppBanner from "./components/UI/AppBanner"
import Stock from "./components/Main/Stock/Stock"
import Search from "./components/Main/Search/Search"
import Weather from "./components/Main/Weather/Weather"
import OffenLinks from "./components/Main/OffenLinks/OffenLinks"
import AppLink from "./components/UI/AppLink"
import TV from "./components/Main/TV/TV"
import AppList from "./components/UI/AppList";
import AppIcon from "./components/UI/AppIcon";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className="top-wrap">
          <NewsView />
          <Search />
          <AppBanner info={"info1"}/>
        </div>
        <Stock />
        <AppBanner info={"info2"}/>
        <div className="content">
          <div className="column">
            <Weather />
            <OffenLinks />
          </div>
          <div className="column">
            <AppLink href={"#"} title={"Карта России"} />
            <AppLink href={"#"} title={"Расписание"} />
            <TV />
          </div>
          <div className="column">
            <div>
              <h2>Эфир</h2>
            </div>
            <AppList>
              <li>
                <AppIcon />
                <AppLink href={"#"} title={"Управление как исскуство"} />
              </li>
            </AppList>
          </div>
        </div>
      </main>
    </>
  )
}