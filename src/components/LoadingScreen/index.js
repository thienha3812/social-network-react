import React from 'react'
import { Spin, Space } from 'antd';



const LoadingScreen = ({ children }) => {
    const [loading, setLoading] = React.useState(true)
    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 800)
    }, [])
    return (
        <>
            {loading && (
                <Space style={{ position: "absolute", left: "50%", top: "50%" }}>
                    <Spin size="large" />
                </Space>
            )}
            {
                !loading && (
                    children
                )
            }
        </>
    )
}

export default LoadingScreen