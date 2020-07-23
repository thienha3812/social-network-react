import io from 'socket.io-client'




export default function socket({username,account_id}){    
    const socket = io.connect("http://192.168.43.224:9002",{path : "/socket.io",query:{username,account_id}})    
    return socket
}