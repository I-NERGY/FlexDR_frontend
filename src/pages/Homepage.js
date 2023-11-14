import HomepageItemFullWidth from "../components/Homepage/HomepageItemFullWidth";
import {servicesHomepage} from "../components/Homepage/servicesHomepage";

const Homepage = () => {
    return (
        <div data-testid={"homepageOverall"}>
            {servicesHomepage.map((service, index) => (
                <div data-testid={"homepageItem"}>
                    <HomepageItemFullWidth title={service.title} description={service.description} icon={service.icon}
                                           image={service.image} link={service.link} index={index} key={service.id}/>
                </div>
            ))}
        </div>
    );
}

export default Homepage;