import React from "react";

function Portfolios() {
  const PortfoliosData = [
    {
      url: "https://spectrum.ieee.org/media-library/image-of-the-2021-porsche-911-turbo-s.jpg?id=26144951&width=980",
      tittle: "There is more than you know",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      read: "Read More",
      icon: "fa-solid",
      icon1: "fa-arrow-up-right-from-square",
    },
    {
      url: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/11/1200/675/sian-rear.jpg?ve=1&tl=1",
      tittle: "There is more than you know",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      read: "Read More",
      icon: "fa-solid",
      icon1: "fa-arrow-up-right-from-square",
    },
    {
      url: "https://cdn-fastly.thetruthaboutcars.com/media/2022/06/30/8816540/bmw-8-series-gran-coupe-leaked-ahead-of-official-debut.jpg?size=1200x628",
      tittle: "There is more than you know",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      read: "Read More",
      icon: "fa-solid",
      icon1: "fa-arrow-up-right-from-square",
    },
    {
      url: "https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C2299/U678/IMG_70422-large.jpg",
      tittle: "There is more than you know",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      read: "Read More",
      icon: "fa-solid",
      icon1: "fa-arrow-up-right-from-square",
    },
    {
      url: "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F220821164722-audi-grandsphere-electric-vehicle-lounge.jpg",
      tittle: "There is more than you know",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      read: "Read More",
      icon: "fa-solid",
      icon1: "fa-arrow-up-right-from-square",
    },
    {
      url:"https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_s_02_m.jpg",
      tittle: "There is more than you know",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      read: "Read More",
      icon: "fa-solid",
      icon1: "fa-arrow-up-right-from-square",
    },
  ];
  return (
    <>
      <section className="portfolios">
        <div className="portfolios-container">
          {PortfoliosData.map((item) => (
            <div className="portfolios-item">
              <div className="left">
                <img src={item.url} alt="cars" />
              </div>
              <div className="right">
                <h3>{item.tittle}</h3>

                <p>{item.text}</p>

                <span>{item.read}</span>

                <p className="portfoliosicon">
                  <i className={item.icon + " " + item.icon1}></i>
                  </p>

                
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Portfolios;
