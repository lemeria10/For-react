import Imagesection from "./Imagesection";
import InfoSection from "./InfoSection/InfoSection";

function MainSection () {
    return (
        <div className=" flex gap-x-4">
            <Imagesection/>
            <InfoSection/>
        </div>
    );
}

export default MainSection;