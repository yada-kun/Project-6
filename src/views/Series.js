import Header from "../components/Home Components/Header";
import SelectCategory from "../components/Series Components/SelectCategory";
import ViewSeries from "../components/Series Components/ViewSeries";

const Series = ({dispatch}) => {
    return(
        <>
            <Header/>
            <SelectCategory/>
            <ViewSeries dispatch={dispatch}/>
        </>
    )

}

export default Series;