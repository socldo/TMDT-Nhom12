import {Spin} from 'antd'
function  Loading({children, isPending, deley = 200}) {
    return (
        <Spin spinning = {isPending} delay = {deley}>
            {children}
        </Spin>
    )
}
export default Loading;
