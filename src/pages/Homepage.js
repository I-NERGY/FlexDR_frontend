import HomepageItemFullWidth from "../components/Homepage/HomepageItemFullWidth";
import {servicesHomepage} from "../components/Homepage/servicesHomepage";

const Homepage = () => {
    return (
        <>
            {servicesHomepage.map((service, index) => (
                <HomepageItemFullWidth title={service.title} description={service.description} icon={service.icon}
                                       image={service.image} link={service.link} index={index} key={service.id}/>
            ))}
        </>
    );
}

export default Homepage;