/* eslint-disable */
import React from 'react';
import {
  Modal, Row, Col,
} from 'antd';
import _ from 'lodash';

const DetailPlace = ({ open, setOpen }) => (
  <Modal
    title="Review địa điểm"
    visible={open}
    cancelText="Huỷ"
    okText="Xác nhận"
    width={800}
    onCancel={setOpen()}
  >
    <Row>
      <Col span={24}>
        {/* <img style={{height:"400px"}} className="img-fluid w-100" src="https://mytourcdn.com/upload_images/Image/Quang%20Dia%20Danh/29/hon%20tre%2025.jpg"/> */}
      </Col>
    </Row>
  </Modal>
);
export default DetailPlace;
