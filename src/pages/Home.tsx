import React from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageContainer from '../components/layout/PageContainer';

const Home = () => {
  return (
    <PageContainer>
      <Row>
        <Col>
          <h1>CHICAGO ARTIST GUIDE</h1>
          <h4 className="tagline">
            Diversifying theatre one connection at a time.
          </h4>
        </Col>
      </Row>
      <HomePageRows>
        <Col md={6}>
          <h2>WHAT WE DO</h2>
          TEXT FOR WHAT WE DO
        </Col>
      </HomePageRows>
      <HomePageRows>
        <Col>
          <h2>WHAT WE OFFER</h2>
          SECTION FOR THE CARDS
        </Col>
      </HomePageRows>

      <HomePageRows>
        <Col md={6}>
          <h2>VISION</h2>
          <h5>Theatre for everyone, made by anyone.</h5>
        </Col>
        <Col md={6}>
          <h2>MISSION</h2>
          <h5>
            To diversify Chicago theatre with a centralized online network for
            artists, producers, and community groups.
          </h5>
        </Col>
      </HomePageRows>

      <HomePageRows>
        <Col md={12}>
          <h2>VALUES</h2>
        </Col>
        <Col md={6}>
          <div>
            <h5>ACCESSIBILITY</h5>
            <p>
              We provide easily accessible resources to empower those in
              marginalized groups to advocate for themselves. By leveraging
              online technologies, we eliminate geographical barriers so that
              more artists can connect to work across the city.
            </p>
          </div>
          <div>
            <h5>INNOVATION</h5>
            <p>
              We recognize that industry standards need to evolve to reach our
              goals. We do our part by identifying existing problems and finding
              solutions that uphold our values.
            </p>
          </div>
          <div>
            <h5>PRIVACY</h5>
            <p>
              The privacy of your data is of the utmost importance to us. We are
              committed to following, and (where we’re able) exceeding industry
              standards and best practices with regard to safeguarding your
              information.
              <ul>
                <li>
                  We are committed to full transparency with regard to what data
                  we collect from you, why we are collecting it, and, most
                  importantly, what will and will not be displayed publicly for
                  on your profile or elsewhere on our site.
                </li>
                <li>
                  We will never share your information without your explicit,
                  affirmative consent.
                </li>
                <li>We will never sell your data to a third party.</li>
              </ul>
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <h5>DIVERSITY, EQUITY, and INCLUSION</h5>
            <p>
              We acknowledge that there is no one perfect way to achieve equity,
              but we are willing to take risks because there is much work to do.
            </p>
            <h6>ANTI-RACISM</h6>
            <p>
              Racism is inherent to every aspect of our lives; it is woven into
              the fabric of society and encompasses more than racial prejudices.
              Racism involves social, institutional and systemic powers. While
              we cannot separate ourselves from White Supremacy we are committed
              to challenging the traditionally biased processes for hiring and
              promoting artists both on and off stage. Chicago Artist Guide is
              dedicated to doing our part in creating equitable anti-racist
              representation in all areas of the performing arts. We at Chicago
              Artist Guide must be actively anti-racist. We absolutely and
              unapologetically denounce our racist systems and its proponents
              without exception.
            </p>
            <h6>INTERSECTIONALITY</h6>
            <p>
              We stand for and protect the values of inclusion, participation,
              and compassion for everyone--regardless of race, class, religion,
              country of origin, immigration status, (dis)ability, age, gender
              identity, or sexual orientation. ​(via{' '}
              <a
                href="https://theghostlightproject.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                The Ghostlight Project
              </a>
              )
            </p>
            <h6>OUR PLEDGE</h6>
            <p>
              We are committed to bettering ourselves, our services, and our
              industry through continued learning. We are thoughtfully
              researching and implementing this new platform for the artistic
              community, starting with an in-depth assessment of our services,
              policies and procedures. We are seeking out and listening to
              voices that have not been heard, and fully engaging
              under-represented populations in dialogue that will help us
              improve this technology.
            </p>
          </div>
        </Col>
        <Col md={12}>
          <div></div>
        </Col>
      </HomePageRows>
    </PageContainer>
  );
};

const HomePageRows = styled(Row)`
  padding-top: 2rem;
`;

export default Home;
