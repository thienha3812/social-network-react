/* eslint-disable */
import React ,{useState} from 'react';
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


const WrapperContainer = styled.div`
  transform:translateY(-3rem);
  padding : 0 10% 0 10%;

`;

const NewsFeedPage = () => {
  const [openReviewModal,setOpenReviewModal] = useState(false)
  const [openAddPlaceModal,setOpenAddPlaceModal] = useState(false)
  const handleOpenReviewModal = () => {
    setOpenReviewModal(false)
  };
  const handleOpenAddPlaceModal = () =>{
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
              <Col span={8}>
                <Button onClick={()=>setOpenReviewModal(true)} className="w-100 border-0" style={{ borderRadius: '0', height: '50px', lineHeight: '25px' }} type="default">Viết review</Button>
              </Col>
              <Col span={8}>
                <Button className="w-100 border-0" style={{ borderRadius: '0', height: '50px', lineHeight: '25px' }} type="default">Đánh giá địa điểm</Button>
              </Col>
              <Col span={8}>
                <Button className="w-100" style={{ borderRadius: '0', height: '50px', lineHeight: '25px' }} type="default" onClick={()=>setOpenAddPlaceModal(true)}>Thêm địa điểm mới</Button>
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
          <Col span={8} className="p-2">
            <Card
              hoverable
              className="text-justify"
              style={{ width: 'auto' }}
              cover={<img alt="example" src="https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/02_2019/thumbs/780_crop_tour-du-lich-nha-trang-3-ngay.jpg" />}
            >
              <Meta avatar={<Avatar src="https://kenh14cdn.com/2017/21314351-1985353301736209-4990432823795657711-n-1505119169311.jpg" />} title="Europe Street beat" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
              <div className="d-flex justify-content-end">
                <Button type="link">Xem thêm</Button>
              </div>
            </Card>

          </Col>
          <Col span={8} className="p-2">
            <Card
              hoverable
              className="text-justify"
              style={{ width: 'auto' }}
              cover={<img alt="example" src="https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/02_2019/thumbs/780_crop_tour-du-lich-nha-trang-3-ngay.jpg" />}
            >
              <Meta avatar={<Avatar src="https://kenh14cdn.com/2017/21314351-1985353301736209-4990432823795657711-n-1505119169311.jpg" />} title="Europe Street beat" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
              <div className="d-flex justify-content-end">
                <Button type="link">Xem thêm</Button>
              </div>
            </Card>

          </Col>
          <Col span={8} className="p-2">
            <Card
              hoverable
              className="text-justify"
              style={{ width: 'auto' }}
              cover={<img alt="example" src="https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/02_2019/thumbs/780_crop_tour-du-lich-nha-trang-3-ngay.jpg" />}
            >
              <Meta avatar={<Avatar src="https://kenh14cdn.com/2017/21314351-1985353301736209-4990432823795657711-n-1505119169311.jpg" />} title="Europe Street beat" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
              <div className="d-flex justify-content-end">
                <Button type="link">Xem thêm</Button>
              </div>
            </Card>

          </Col>
        </Row>
        <Row justify="center" className="mt-5 text-center">
          <Col span={8}>
            <h5 className="Title-landing">Xu hướng gần đây</h5>
          </Col>
        </Row>
        <Row justify="space-between" className="mt-3">
          <Col span={8} className="p-2">
            <Card
              hoverable
              className="text-justify"
              style={{ width: 'auto' }}
              cover={<img alt="example" src="https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/02_2019/thumbs/780_crop_tour-du-lich-nha-trang-3-ngay.jpg" />}
            >
              <Meta avatar={<Avatar src="https://kenh14cdn.com/2017/21314351-1985353301736209-4990432823795657711-n-1505119169311.jpg" />} title="Europe Street beat" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
              <div className="d-flex justify-content-end">
                <Button type="link">Xem thêm</Button>
              </div>
            </Card>

          </Col>
          <Col span={8} className="p-2">
            <Card
              hoverable
              className="text-justify"
              style={{ width: 'auto' }}
              cover={<img alt="example" src="https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/02_2019/thumbs/780_crop_tour-du-lich-nha-trang-3-ngay.jpg" />}
            >
              <Meta avatar={<Avatar src="https://kenh14cdn.com/2017/21314351-1985353301736209-4990432823795657711-n-1505119169311.jpg" />} title="Europe Street beat" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
              <div className="d-flex justify-content-end">
                <Button type="link">Xem thêm</Button>
              </div>
            </Card>

          </Col>
          <Col span={8} className="p-2">
            <Card
              hoverable
              className="text-justify"
              style={{ width: 'auto' }}
              cover={<img alt="example" src="https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/02_2019/thumbs/780_crop_tour-du-lich-nha-trang-3-ngay.jpg" />}
            >
              <Meta avatar={<Avatar src="https://kenh14cdn.com/2017/21314351-1985353301736209-4990432823795657711-n-1505119169311.jpg" />} title="Europe Street beat" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
              <div className="d-flex justify-content-end">
                <Button type="link">Xem thêm</Button>
              </div>
            </Card>

          </Col>
        </Row>
        <Row justify="center" className="mt-5 text-center">
          <Col span={8}>
            <h5 className="Title-landing">Check-in nhiều nhất</h5>
          </Col>
        </Row>
        <Row justify="space-between" className="mt-3">
          <Col span={8} className="p-2">
            <Card
              hoverable
              className="text-justify"
              style={{ width: 'auto' }}
              cover={<img alt="example" src="https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/02_2019/thumbs/780_crop_tour-du-lich-nha-trang-3-ngay.jpg" />}
            >
              <Meta avatar={<Avatar src="https://kenh14cdn.com/2017/21314351-1985353301736209-4990432823795657711-n-1505119169311.jpg" />} title="Europe Street beat" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
              <div className="d-flex justify-content-end">
                <Button type="link">Xem thêm</Button>
              </div>
            </Card>

          </Col>
          <Col span={8} className="p-2">
            <Card
              hoverable
              className="text-justify"
              style={{ width: 'auto' }}
              cover={<img alt="example" src="https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/02_2019/thumbs/780_crop_tour-du-lich-nha-trang-3-ngay.jpg" />}
            >
              <Meta avatar={<Avatar src="https://kenh14cdn.com/2017/21314351-1985353301736209-4990432823795657711-n-1505119169311.jpg" />} title="Europe Street beat" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
              <div className="d-flex justify-content-end">
                <Button type="link">Xem thêm</Button>
              </div>
            </Card>

          </Col>
          <Col span={8} className="p-2">
            <Card
              hoverable
              className="text-justify"
              style={{ width: 'auto' }}
              cover={<img alt="example" src="https://luhanhvietnam.com.vn/tour-du-lich/vnt_upload/tour/02_2019/thumbs/780_crop_tour-du-lich-nha-trang-3-ngay.jpg" />}
            >
              <Meta avatar={<Avatar src="https://kenh14cdn.com/2017/21314351-1985353301736209-4990432823795657711-n-1505119169311.jpg" />} title="Europe Street beat" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
              <div className="d-flex justify-content-end">
                <Button type="link">Xem thêm</Button>
              </div>
            </Card>

          </Col>
        </Row>
      </WrapperContainer>
      <ReviewModal open={openReviewModal} setOpen={handleOpenReviewModal} />
      <AddPlaceModal open={openAddPlaceModal} setOpen={handleOpenAddPlaceModal}/>
      {/* <DetailPlace open={true} setOpen={handleOpenReviewModal} /> */}
    </>
  );
};
export default NewsFeedPage;
