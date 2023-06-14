
const Banner = () => {
    return (
        <div className="carousel w-full mb-16">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3mDz2QcoIDSuFBrF6BOhL8dS-Feuu91a4x4pm0NdF2q_fwvsStxAQ6ItML3rm48Ghio0&usqp=CAU" className="w-full" />
          <div className="absolute flex justify-between transform left-5 right-5 mt-28">
           <div className=" mt-28 ml-32 ">
            <h2 className="text-blue-400 text-5xl mb-7 font-extrabold">Unlock the World: <br /> Learn a New Language </h2>
            <p className="text-2xl mb-7 text-white font-bold">
            Knowing multiple languages allows you to communicate with a wider <br /> range of people, fostering cross-cultural understanding and opening up new <br /> opportunities for personal and professional relationships.</p>
<div>
<button className="btn btn-active btn-primary mr-5">enrolle Now!</button>
</div>
           </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i0.wp.com/cms.babbel.news/wp-content/uploads/2017/10/CreativeLiveHeader.png?resize=640%2C360" className="w-full" />
          <div className="absolute flex justify-between transform left-5 right-5 mt-28">
           <div className=" mt-28 ml-32">
            <h2 className="text-blue-400 text-5xl mb-7 font-extrabold">Speak the Language of the World: <br /> Start Learning Today</h2>
            <p className="text-2xl mb-7 text-white font-bold">
            Enhanced Communication Skills: Knowing multiple <br /> languages allows you  to communicate<br /> with a wider range of people, fostering cross-cultural <br /> understanding and opening up new <br /> opportunities for personal and professional relationships.</p>
<div>
<button className="btn btn-active btn-primary mr-5">enrolle Now!</button>
</div>
           </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle ">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://scitechdaily.com/images/Student-Learning-Teaching.jpg" className="w-full" />
          <div className="absolute flex justify-between transform left-5 right-5 mt-28">
           <div className="mt-28 ml-32">
            <h2 className="text-blue-500 text-5xl mb-7 font-extrabold">Open Doors to Opportunity: <br /> Learn a Foreign Language!</h2>
            <p className="text-2xl text-natural mb-7 font-bold">
            Learning a new language challenges you to step out of your comfort zone, <br /> boosts your confidence, and enhances self-discipline <br /> and perseverance. It is a rewarding and fulfilling <br /> experience that promotes personal growth and development.</p>
<div>
<button className="btn btn-active btn-primary mr-5">enrolle Now!</button>
</div>
           </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle ">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY_3g9u9CuLxP29V9bERP7CxfS-szS59oBUA&usqp=CAU" className="w-full" />
          <div className="absolute flex justify-between transform left-5 right-5 mt-28">
           <div className=" mt-28 ml-32">
            <h2 className="text-blue-500 text-5xl mb-7 font-extrabold">Discover a New Culture: <br /> Learn a Foreign Language</h2>
            <p className="text-2xl mb-7 font-bold text-natural">
            Learning a new language can improve academic performance, including <br /> reading, writing, and problem-solving skills. It also <br /> promotes a greater understanding of grammar and language <br /> structures, which can be beneficial in other subjects.</p>
<div>
<button className="btn btn-active btn-primary mr-5">enrolle Now!</button>
</div>
           </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;