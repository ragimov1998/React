import React from "react";

function Contact() {
  const ContactData = [
    {
      tittle: "You can reach me any time🙂 ",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venLiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
      twit: "Twitter: amirhwsin",
      git: "Github: amireshoon",
      drib: "Dribble: amireshoon",
      tgram: "Telegram: GeekDreamer",
      email: "Email: amirhwsin@outlook.com",
    },
  ];
  return (
    <>
      <section className="contact">
        {ContactData.map((item) => (
          <div className="contact-container">
            <h1>{item.tittle}</h1>
            <p>{item.text}</p>
            <p>{item.twit}</p>
            <p>{item.git}</p>
            <p>{item.drib}</p>
            <p>{item.tgram}</p>
            <p>{item.email}</p>
            <button>About me</button>
          <button>😮 Let’s see portfolios</button>
          </div>
        ))}
      </section>
    </>
  );
}

export default Contact;
