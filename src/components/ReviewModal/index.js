/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Modal, Select, Avatar } from 'antd';
import _ from 'lodash';
import { GetPlaces } from '../../services/places';
import { useHistory } from 'react-router-dom';

const ReviewModal = ({ open, setOpen }) => {
  const [selectedOption,setSelectedOption] = useState('')
  const [options, setOptions] = useState([]);
  const history = useHistory()
  const handleSearch = async (val) => {    
    const response = await GetPlaces({ keyword: val });
    const { places } = response.data;    
    if (places.length > 0) {      
      setOptions(places.map(x=>({name : x.name,value  :x.id})))      
    }
  };
  useEffect(()=>{
    const fetchList = async () =>{
      const response = await GetPlaces({ keyword: '' });
      const { places } = response.data;                
      setOptions(places.map(x=>({name : x.name,value : x.id,img : x.landing_image})))
    }
    fetchList()
  },[])
  const handleChange = (post_id,option) => {        
    setSelectedOption(post_id)
  }
  const handleConfirm = () =>{     
    history.push("/dia-diem/" + selectedOption)
  }
  return (
    <Modal
      title="Review địa điểm"
      visible={open}
      cancelText="Huỷ"
      okText="Xác nhận"      
      onOk={handleConfirm}
      onCancel={()=> setOpen()}
    >
      <div className="d-flex justify-content-center">
        <Select
          onChange={handleChange}
          showSearch
          style={{ width: 300 }}
          size="large"
          optionFilterProp="children"
          filterOption={true}
          placeholder="Tìm kiếm địa điểm du lịch ngay nào!"          
          
        >      
        {options.map((option,i)=>(
          <Select.Option  key={i} value={option.value}>
            <Avatar src={option.img}/>
            {option.name}
          </Select.Option>
        ))}            
          
        </Select>
      </div>
    </Modal>
  );
};
export default ReviewModal;
