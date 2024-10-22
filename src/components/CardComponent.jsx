import "../css/Card.css";

// function Cardd() {
//     return (
//       <>
//       <div class='card'>
//         <img src="https://media.istockphoto.com/id/1289245135/photo/front-view-of-brown-bear-isolated-on-black-background-portrait-of-kamchatka-bear.jpg?s=2048x2048&w=is&k=20&c=aR78lsbCaatCqYGsy_G1GWmqjtIZJTUDgi01I2H3yjA=" alt="" />
//         <h1>Card Effect</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit excepturi veritatis voluptas necessitatibus, assumenda aut debitis quae reiciendis porro, corporis, dolorem natus ullam possimus illum! Totam dolorem nam neque modi qui consequuntur iste veniam illum libero voluptatibus molestiae nulla quas laudantium ipsum deleniti, accusamus inventore repellendus? Unde aliquid nemo in.</p>
//       </div>
//       </>
//     )
//   }

function Card() {
  return (
    <>
      <div className="card">
        <div className="bg">
          <img
            src="https://media.istockphoto.com/id/1289245135/photo/front-view-of-brown-bear-isolated-on-black-background-portrait-of-kamchatka-bear.jpg?s=2048x2048&w=is&k=20&c=aR78lsbCaatCqYGsy_G1GWmqjtIZJTUDgi01I2H3yjA="
            alt=""
          />
        </div>
        <div className="texts">
          <h1>WEB DEVELOPMENT</h1>
          <p>Turning Years of data into instant insights: Fortune</p>
        </div>
        <div className="hiddeN">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            inventore. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus, explicabo sit! Dolorem deserunt fuga architecto
            recusandae. Beatae a ipsum nam.
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
