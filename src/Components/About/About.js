import React from "react";
import "./About.css"

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h2>About Us</h2>
        <p>This is the about page.</p>
        <ul>
          <li>Feature 1
            <p style={{fontSize:"14px" ,fontWeight:"200" ,padding:"20px"}}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, nemo iusto. Molestias voluptas nostrum, inventore maiores dicta placeat temporibus expedita quasi aliquid tempora eveniet recusandae odit libero repellat, vel porro? Commodi vero repudiandae molestiae maxime ducimus doloribus incidunt quasi officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, error! Aliquam voluptatibus, nam quaerat voluptate perferendis optio aut minus debitis.</p>
          </li>
          <li>Feature 2
            <p style={{fontSize:"14px" ,fontWeight:"200" ,padding:"20px"}}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus qui explicabo modi optio numquam incidunt nesciunt commodi expedita facilis cupiditate placeat velit, eum dicta? Reiciendis, dignissimos corporis, ratione quaerat, aut sed molestiae ex rem magni consequatur eveniet recusandae iure perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, error! Aliquam voluptatibus, nam quaerat voluptate perferendis optio aut minus debitis.</p>
          </li>
          <li>Feature 3
            <p style={{fontSize:"14px" ,fontWeight:"200" ,padding:"20px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod soluta perferendis reiciendis ipsum voluptatum! Quaerat, et dolor molestiae rerum ad earum possimus id tenetur voluptatum delectus? Quae, aliquam enim ullam quibusdam sapiente qui reprehenderit rem ratione fugit molestiae perferendis? Eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, error! Aliquam voluptatibus, nam quaerat voluptate perferendis optio aut minus debitis.</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default About;
