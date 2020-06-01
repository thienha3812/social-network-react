import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import {
    Modal, Row, Col, Input, Button, message
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { FileAddOutlined } from '@ant-design/icons';
import { AddPlace } from '../../services/places';



const AddPlaceModal = ({ open, setOpen }) => {
    const fileRef = useRef()
    const [dataUrl, setDataUrl] = useState([])
    const [form,setForm] =  useState({address:"",name : "", description:"",files:[]})
    const selectFile = (e) => {
        var dataUrl = []
        var files = []
        for (let i = 0; i < e.target.files.length; i++) {
            files.push(e.target.files[i])
            const fd = new FileReader
            fd.onloadend = function (el) {
                dataUrl.push(el.currentTarget.result)
                setDataUrl((prev)=> [...prev,el.currentTarget.result])
            }
            fd.readAsDataURL(e.target.files[i])
        }
        setForm(prev=> ({...prev,files}))
    }
    const handleAddPlace =  async () => {
        let fd = new FormData()
        const {files,name,description,address} = form
        fd.append("description",description)
        fd.append("name",name)
        fd.append("address",address)
        for(let i = 0;i<files.length;i++){
            fd.append("file",files[i])
        }
        try { 
            await AddPlace(fd)
            message.success("Thêm địa điểm thành công")
            setOpen()
            setForm({address:"",name:"",description:"",files:[]})
        }catch(err){
            message.warning(err.message)
        }
    }
    return (
        <Modal
            title="Thêm địa điểm"
            visible={open}
            cancelText="Huỷ"
            okText="Xác nhận"
            width={800}
            onOk={handleAddPlace}
            onCancel={setOpen}
        >
            <div className="d-flex flex-column pl-5 pr-5">
                <div className="w-50">
                    <Input placeholder="Tên địa điểm" onChange={(e)=> setForm({description: form.description,name:e.currentTarget.value,address:form.address,files:form.files})}/>
                </div>
                <div className="mt-2">
                    <TextArea placeholder="Địa chỉ" rows={2} style={{ resize: "none" }} onChange={(e)=> setForm({description: form.description,name:form.name,address:e.currentTarget.value,files:form.files})} />
                </div>
                <div className="mt-2">
                    <TextArea placeholder="Mô tả địa điểm" rows={2} style={{ resize: "none" }}  onChange={(e)=> setForm({description:e.currentTarget.value,name:form.name,address:form.address,files:form.files})}/>
                </div>
                <div className="mt-2">
                    <Button type="ghost" onClick={() => fileRef.current.click()} icon={<FileAddOutlined />}>Thêm hình ảnh</Button>
                    <input type="file" onChange={selectFile} multiple ref={fileRef} hidden />
                </div>
                <div className="mt-2">
                    <Row>                    
                            {dataUrl.map(x => (
                                <Col span={6}>
                                <img src={x} style={{ height: '150px', width: '150px' }} />
                                </Col>
                            ))}
                    </Row>
                </div>
            </div>
        </Modal>

    )
}

export default AddPlaceModal