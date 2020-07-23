/* eslint-disable */
import React, { useState, useEffect } from 'react';
import {
  Button, Row, Col, Avatar, Card, Select,
} from 'antd';

import styled from 'styled-components';
import Meta from 'antd/lib/card/Meta';
import HoltelIcon from '../../assets/hotel.png';
import PlaceIcon from '../../assets/maps.png';
import FoodIcon from '../../assets/junk-food.png';
import CupIcon from '../../assets/cup.png';
import ManIcon from '../../assets/man.png';

import './style.scss';
import ReviewModal from '../../components/ReviewModal';
import AddPlaceModal from '../../components/AddPlaceModal';
import { GetPlaceForIndexPage } from '../../services/places';
import LoadingScreen from '../../components/LoadingScreen'
import _ from 'lodash'
import { Link } from 'react-router-dom';
const WrapperContainer = styled.div`
  transform:translateY(-3rem);
  padding : 0 10% 0 10%;  
`;

const NewsFeedPage = () => {
  const [openReviewModal, setOpenReviewModal] = useState(false)
  const [openAddPlaceModal, setOpenAddPlaceModal] = useState(false)
  const [places, setPlaces] = useState([])
  const handleOpenReviewModal = () => {
    setOpenReviewModal(false)
    
  };
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const response = await GetPlaceForIndexPage()
    setPlaces(response.data)
  }
  const handleOpenAddPlaceModal = () => {
    setOpenAddPlaceModal(false)    
  };  
  return (
    <>
      <div className="Header-background d-flex justify-content-center align-items-center">
        <h4 className="text-white Title-landing">TRẢI NGHIỆM DU LỊCH CÙNG VỚI CHÚNG TÔI</h4>
      </div>
      <WrapperContainer>
        <Row>
          <Col span={8} className="Category--item pt-2 pb-2">
            <Row>
              <Col span={12} className="mr-auto">
                <Button className="h-100 d-flex align-items-center Category--item_button" ghost type="link">
                  <Avatar style={{ width: '50px', height: '50px' }} src={HoltelIcon} className="bg-white p-2" />
                  Khách sạn
                </Button>
              </Col>
              <Col span={12} className="ml-auto">
                <Button className="h-100 d-flex align-items-center Category--item_button" ghost type="link">
                  <Avatar style={{ width: '50px', height: '50px' }} src={FoodIcon} className="bg-white p-2" />
                  Ẩm thực
                </Button>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Button className="h-100 d-flex align-items-center Category--item_button" ghost type="link">
                  <Avatar style={{ width: '50px', height: '50px' }} src={HoltelIcon} className="bg-white p-2" />
                  Khách sạn
                </Button>
              </Col>
              <Col span={12} className="ml-auto">
                <Button className="h-100 d-flex align-items-center Category--item_button" ghost type="link">
                  <Avatar style={{ width: '50px', height: '50px' }} src={PlaceIcon} className="bg-white p-2" />
                  Địa điểm
                </Button>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Button className="h-100 d-flex align-items-center Category--item_button" ghost type="link">
                  <Avatar style={{ width: '50px', height: '50px' }} src={CupIcon} className="bg-white p-2" />
                  Cafe
                </Button>
              </Col>
              <Col span={12} className="ml-auto">
                <Button className="h-100 d-flex align-items-center Category--item_button" ghost type="link">
                  <Avatar style={{ width: '50px', height: '50px' }} src={ManIcon} className="bg-white p-2" />
                  Dịch vụ
                </Button>
              </Col>
            </Row>
          </Col>
          <Col span={16} className="Review-content">
            <Row>
              <Col span={12}>
                <Button onClick={() => setOpenReviewModal(true)} className="w-100" style={{ borderRadius: '0', height: '50px', lineHeight: '25px' }} type="default">Viết review</Button>
              </Col>
              <Col span={12}>
                <Button className="w-100" style={{ borderRadius: '0', height: '50px', lineHeight: '25px' }} type="default" onClick={() => setOpenAddPlaceModal(true)}>Thêm địa điểm mới</Button>
              </Col>
            </Row>
            <Row justify="center" align="center" className="h-100">

            </Row>
          </Col>
        </Row>
        <Row justify="center" className="mt-5 text-center">
          <Col span={8}>
            <h5 className="Title-landing">Địa điểm du lịch ngẫu nhiên</h5>
          </Col>
        </Row>
        <Row justify="space-between" className="mt-3">
          {_.get(places, "random_places", []).map((place, i) =>
            <>
              <Col span={8} className="p-2" key={i}>
                <Card
                  hoverable
                  className="text-justify"
                  style={{ width: 'auto' }}
                  cover={<img height="250" width="auto" alt="example" src={place.landing_image_src} />}
                >
                  <Meta title={place.name} />
                  <p style={{ height: '100px' }}>
                    {place.description.split(" ").slice(0, 30).join(" ") + "..."}
                  </p>
                  <div className="d-flex justify-content-end">
                    <Link to={"/dia-diem/" + place.id}>
                      Xem thêm
                    </Link>
                  </div>
                </Card>
              </Col>
            </>
          )}
        </Row>
        <Row justify="center" className="mt-5 text-center">
          <Col span={8}>
            <h5 className="Title-landing">Checkin nhiều nhất</h5>
          </Col>
        </Row>
        <Row justify="space-between" className="mt-3">
        {_.get(places, "hot_places", []).map((place, i) =>
            <>
              <Col span={8} className="p-2" key={i}>
                <Card
                  hoverable
                  className="text-justify"
                  style={{ width: 'auto' }}
                  cover={<img height="250" width="auto" alt="example" src={place.landing_image_src} />}
                >
                  <Meta title={place.name} />
                  <p style={{ height: '100px' }}>
                    {place.description.split(" ").slice(0, 30).join(" ") + "..."}
                  </p>
                  <div className="d-flex justify-content-end">
                    <Link to={"/dia-diem/" + place.id}>
                      Xem thêm
                    </Link>
                  </div>
                </Card>
              </Col>
            </>
          )}
        </Row>      
      </WrapperContainer>
      <ReviewModal open={openReviewModal} setOpen={handleOpenReviewModal} />
      <AddPlaceModal open={openAddPlaceModal} setOpen={handleOpenAddPlaceModal} />
      {/* <DetailPlace open={true} setOpen={handleOpenReviewModal} /> */}
    </>
  );
};
export default NewsFeedPage;
