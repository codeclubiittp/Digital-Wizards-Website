// import "../css/NoteFromFA.css";

function NoteFromFA() {
  return (
    <div className="horizontalFlex">
      <div className="left verticalFlex">
        <p style={{ color: "white", fontSize: "3rem" }}>
          Note From Faculty Advisor
        </p>

        <img
          src="https://files.iittp.ac.in/images/demo/iit/director.jpg"
          alt=""
        />
      </div>
      <div className="right verticalFlex">
        <p
          style={{
            fontSize: "2rem",
            fontWeight: "100",
            marginBottom: "1rem",
          }}
        >
          Our Vision
        </p>
        <p style={{ fontSize: "1rem", fontWeight: "500", width: "70%" }}>
          Change the color palette and font once the content is ready. etur
          adipisicing elit. Officia autem reiciendis obcaecati molestias
          perspiciatis iure in totam placeat nemo vero iste, dolore, ad,
          reprehenderit sint. Eum quos reiciendis porro, maiores delectus ut
          distinctio beatae sunt ducimus harum maxime aut! Doloremque est
          possimus asperna
        </p>
      </div>
    </div>
  );
}

export default NoteFromFA;
