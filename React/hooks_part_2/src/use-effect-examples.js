import React, {Component, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const App = () => {
    const [value, setValue] = useState(0)
    const [visible, setVisible] = useState(true)

    if (visible) {
        return (
            <>
                <button
                    onClick={
                        () => {
                            setValue((v) => v + 1)
                        }
                    }>
                    +
                </button>
                <button
                    onClick={
                        () => {
                            setVisible(false)
                        }
                    }>
                    Hide
                </button>
                {/*<HooksCounter value={value}/>*/}
                {/*<ClassCounter value={value}/>*/}
                <Notification/>
            </>
        )

    }
    else{
        return (
            <button onClick={
                () => {
                    setVisible(true)
                }
            }>Show</button>
        )
    }
}

const HooksCounter = ({value}) => {
    // useEffect(()=>{
    //     console.log("useEffect()")
    // })
    useEffect(()=>{
        console.log("mount")
        return ()=>{
            console.log("unmount")}
    }, [])

    useEffect(()=>{
        console.log("update")
    })

    // useEffect(()=>()=>{
    //     console.log("unmount")},
    //     []
    // )

    return <p>{value}</p>
}

const Notification = ()=>{
    const [visible, setVisible] = useState(true)
    useEffect(()=>{
        const timeout =
        setTimeout(()=>{
            setVisible(false)
            console.log("Salam")
        },3000)
        return ()=>clearTimeout(timeout)
    }, [])
    return (
        <div>
            {visible && <p>Hello</p>}
        </div>
    )
}

class ClassCounter extends Component{
    componentDidMount() {
        console.log("class mount")
    }
    componentDidUpdate() {
        console.log("class update")
    }
    componentWillUnmount() {
        console.log('class unmount')
    }
    render() {
        return <p>{this.props.value}</p>
    }
}

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)