import io from 'socket.io-client'




export default function socket({username,account_id}){    
    const socket = io.connect("http://127.0.0.1:9002",{path : "/socket.io",query:{username,account_id}})    
    return socket
}