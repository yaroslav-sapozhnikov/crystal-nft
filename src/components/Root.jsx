import {ProjectResume} from "./ProjectResume/ProjectResume";
import {Presentation} from "./Presentation/Presentation";
import styles from './Root.module.css'
import {About} from "./About/About";
import {RoadMap} from "./RoadMap/RoadMap";

export const Root = () => {
    return (
        <div className={styles.Root}>
            <div className={styles.HighestDiv}>
                <ProjectResume/>
                <Presentation/>
            </div>
            <About/>
            <RoadMap/>
        </div>
    )
}