import React from "react";

function Blog() {
  const blogData = [
    {
      url: "https://spectrum.ieee.org/media-library/image-of-the-2021-porsche-911-turbo-s.jpg?id=26144951&width=980",
      logo: "There is more than you know",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      read: "Read More",
      icon: "fa-solid",
      icon1: "fa-arrow-up-right-from-square",
    },
    {
      url: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/11/1200/675/sian-rear.jpg?ve=1&tl=1",
      logo: "There is more than you know",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      read: "Read More",
      icon: "fa-solid",
      icon1: "fa-arrow-up-right-from-square",
    },
    {
      url: "https://cdn-fastly.thetruthaboutcars.com/media/2022/06/30/8816540/bmw-8-series-gran-coupe-leaked-ahead-of-official-debut.jpg?size=1200x628",
      logo: "There is more than you know",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      read: "Read More",
      icon: "fa-solid",
      icon1: "fa-arrow-up-right-from-square",
    },
    {
      url: "https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C2299/U678/IMG_70422-large.jpg",
      logo: "There is more than you know",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      read: "Read More",
      icon: "fa-solid",
      icon1: "fa-arrow-up-right-from-square",
    },
    {
      url: "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F220821164722-audi-grandsphere-electric-vehicle-lounge.jpg",
      logo: "There is more than you know",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      read: "Read More",
      icon: "fa-solid",
      icon1: "fa-arrow-up-right-from-square",
    },
  ];
  return (
    <>
      <section className="blog">
        <div className="blog-container">

            {blogData.map((item) => (

            <div className="blog-item"> 

            <img src={item.url} alt="car"/>

            <h3>{item.logo}</h3>

            <p>{item.text}</p>

            <span>{item.read}</span>

            <i className= {item.icon + ' ' + item.icon1}></i>
            </div>
           
          ))}
        </div>
      </section>
    </>
  );
}

export default Blog;
