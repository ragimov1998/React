import React from "react";

function Home() {
  const HomeData = [
    {
      tittle: "Hey there 👋 I am Ragim Ragimov",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  return (
    <>
      <section className="home">
        {HomeData.map((item) => (
          <div className="home-container">
            <h1>{item.tittle}</h1>
            <p>{item.text}</p>
            <span>
              <button>About me</button>
              <button>😮 Let’s see portfolios</button>
            </span>
          </div>
        ))}
      </section>
    </>
  );
}

export default Home;
