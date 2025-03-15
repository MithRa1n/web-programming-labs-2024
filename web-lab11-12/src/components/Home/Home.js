import { Heading } from "./Heading/Heading";
import ViewMore from "./ViewMore";
import TilesGrid from "./TilesGrid";
import { useState } from "react";

const Home = () => {
    const defaultDisplayLimit = 3;
    const [displayLimit, setDisplayLimit] = useState(defaultDisplayLimit);
    const ViewMoreRender = () => {
        setDisplayLimit(displayLimit + 3);
    };


    return (
        <div>
            <Heading />
            <TilesGrid displayLimit={displayLimit} />
            <ViewMore onClick={ViewMoreRender} />
        </div>
    );
};

export default Home;