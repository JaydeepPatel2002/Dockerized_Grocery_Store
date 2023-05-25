// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
//
// const About = () => {
//     return (
//         <Container>
//             <Row className="justify-content-center">
//                 <Col md={8}>
//                     <div className="about-page">
//                         <h2>Welcome to Daft Goods!</h2>
//                         <p>
//                             Daft Goods is a grocery store looking to rebuild their entire e-commerce platform using Docker and Docker Compose.
//                             They've hired me to complete this work.
//                         </p>
//                         <h3>About the Developer</h3>
//                         <p>
//                             My name is Jaydeep Patel, and I'm a second-year student of Computer Systems Technology.
//                             I'm excited to work on this project and provide a modern and efficient e-commerce solution for Daft Goods.
//                             As the website designer, I will be creating an e-commerce website that meets the specified criteria.
//                             Stay tuned for updates as I build the dockerized instances of the database and web application, incorporating features such as basic user authentication, item creation, item updating, and item purchase.
//                         </p>
//                     </div>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };
//
// export default About;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={8}>
                    <div className="about-page">
                        <h2 className="text-center mb-4">Welcome to Daft Goods!</h2>
                        <p>
                            Daft Goods is a grocery store looking to rebuild their entire e-commerce platform using Docker and Docker Compose.
                            They've hired me to complete this work.
                        </p>
                        <div className="about-developer">
                            <h3 className="text-center mb-4">About the Developer</h3>
                            <p>
                                My name is Jaydeep Patel, and I'm a second-year student of Computer Systems Technology.
                                I'm excited to work on this project and provide a modern and efficient e-commerce solution for Daft Goods.
                                As the website designer, I will be creating an e-commerce website that meets the specified criteria.
                                Stay tuned for updates as I build the dockerized instances of the database and web application, incorporating features such as basic user authentication, item creation, item updating, and item purchase.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
