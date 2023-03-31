import React from "react";

function Journey() {
  const RightData = [
    {
      rtittle: "Time line",
    },
    {
      time: "2 January 2021",
      tittle: "The resolution, What am i gonna do?",
      text: "It’s all about the new year and works i have to do",
    },
    {
      time: "29 January 2021",
      tittle: "Gow - command line tool to manage works",
      text: "Gow is cli tool written in golang using cobra",
    },
    {
      time: "2 February 2021",
      tittle: "Started designing what you are seeing right now!",
      text: "Yes in 2th of february i started designing this site",
    },
    {
      time: "1 March 2021",
      tittle: "Maybe it’s time to deploy...!",
      text: "Maybe in this day i completed the front and backend of this",
    },
  ];
  const JourneyData = [
    {
      tittle: "The resolution, What am I gonna do?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      headline: "The standard Lorem Ipsum passage, used since the 1500s",
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      headline2:
        'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
      explanation2:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      headline3: "1914 translation by H. Rackham",
      explanation3:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone ",
    },
  ];

  return (
    <>
      <section className="journey">
        <div className="journey-container">
          {JourneyData.map((item) => (
            <div className="journey-item">
              <h1>{item.tittle}</h1>
              <p>{item.text}</p>
              <h3>{item.headline}</h3>
              <p>{item.explanation}</p>
              <h6>{item.headline2}</h6>
              <p>{item.explanation2}</p>
              <h6>{item.headline3}</h6>
              <p>{item.explanation3}</p>
            </div>
          ))};

          <div className="journey-right">
            {RightData.map((item) => (
              <>
                <h3>{item.rtittle}</h3>
                
                <select id="vaxt">
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                </select>
                <p>{item.time}</p>
                <h4>{item.tittle}</h4>
                <p>{item.text}</p>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Journey;
