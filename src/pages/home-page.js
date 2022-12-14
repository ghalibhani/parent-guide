import React, { useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { BsTelephone, BsChatLeftText } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import CardList from '../components/card-list';
import { getPopularArticles, getRecommendationArticles } from '../utils/data';
import { IoLocationSharp } from 'react-icons/io5';

function HomePage() {
  const [popularArticles, setPopularArticles] = React.useState([]);
  const [recommendationArticles, setRecommendationArticles] = React.useState([]);

  const [initializing, setInitializing] = React.useState(true);

  useEffect(() => {
    async function fetchArticles() {
      const popularContent = await getPopularArticles();
      setPopularArticles(popularContent);

      const recommendationContent = await getRecommendationArticles();
      setRecommendationArticles(recommendationContent);
    }
    fetchArticles();
    setInitializing(false);
  }, []);

  if (initializing === true) {
    return (
      <div className="indicator">
        <Spinner animation="grow" />
        <Spinner animation="grow" />
        <Spinner animation="grow" />
      </div>
    );
  }

  return (
    <>
      <div className="hero-image">
        <div className="hero-text">
          <h1>Parenting Guide</h1>
          <p>Parenting ideas and strategies when you need them</p>
        </div>
      </div>

      <Container>
        <Row>
          <h1 className="content-header">Populer</h1>
          <CardList articles={popularArticles} />
        </Row>

        <Row>
          <h1 className="content-header">Rekomendasi</h1>
          <CardList articles={recommendationArticles} />
        </Row>

        <Row className="mb-3 content-wrapper">
          <h1 className="content-header">Layanan Pengaduan</h1>
          <div className="content-pengaduan">
            <div className="title-contact">
              <h4>Komnas Perlindungan Anak</h4>
              <p>
                <IoLocationSharp size={20} />
                Jl. Teuku Umar No. 10 Gondangdia Menteng Jakarta Pusat DKI Jakarta, Indonesia{' '}
              </p>
            </div>
            <hr></hr>
            <div className="contact-list">
              <div className="contact-wrapper">
                <div>
                  <BsTelephone size={25}></BsTelephone>
                </div>
                <div className="contact-content">
                  <h4>Telepon</h4>
                  <p>021 31900659</p>
                </div>
              </div>
              <div className="contact-wrapper">
                <div>
                  <TfiEmail size={30}></TfiEmail>
                </div>
                <div className="contact-content">
                  <h4>Email</h4>
                  <p>pengaduan@kpai.go.id</p>
                </div>
              </div>
              <div className="contact-wrapper">
                <div>
                  <BsChatLeftText size={25}></BsChatLeftText>
                </div>
                <div className="contact-content">
                  <h4>FAX</h4>
                  <p>021 3900833</p>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
