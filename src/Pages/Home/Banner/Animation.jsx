import { Slide } from "react-awesome-reveal";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
const Animation = () => {
    return (
        <div>
            <SectionTitle heading='our upcomming classes'></SectionTitle>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
<Slide>
        <img className=" mr-5" src="https://images.pexels.com/photos/4019754/pexels-photo-4019754.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </Slide>
        <Slide>
        <img className="ml-5" src="https://images.pexels.com/photos/5211446/pexels-photo-5211446.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </Slide>
        <Slide>
        <img className="ml-10" src="https://images.pexels.com/photos/8197494/pexels-photo-8197494.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </Slide>
        <Slide>
        <img className="ml-5 mt-5" src="https://images.pexels.com/photos/5212331/pexels-photo-5212331.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </Slide>
<Slide>
        <img className=" mr-5 mt-5" src="https://images.pexels.com/photos/6936012/pexels-photo-6936012.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </Slide>
        <Slide>
        <img className="ml-10 mt-5" src="https://images.pexels.com/photos/5212340/pexels-photo-5212340.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </Slide>

</div>
        </div>
    );
};

export default Animation;