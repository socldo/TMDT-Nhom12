import React, { useEffect } from "react";
import { WrapperContainerLeft, WrapperContainerRight } from "./style";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image } from "antd";
import { useNavigate } from "react-router-dom";
import * as CartService from '../../service/CartService';
import { useMutationHooks } from "../../hooks/useMutationHooks";
import Loading from "../../components/LoadingComponent/Loading";
import * as message from "../../components/Message/Message";
import { useDispatch, useSelector } from 'react-redux';
import { updateCart, removeItem } from "../../redux/Slices/CartSlice";
import CartItem from "../../components/CartItem/CartItem";
import logo from '../../assets/Image/logo.jpg';

function CartPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart || { items: [] });

    const mutationUpdateCart = useMutationHooks(
        data => CartService.updateCart(data)
    );
    const mutationCheckout = useMutationHooks(
        data => CartService.checkout(data)
    );
    const { data, isPending, isSuccess } = mutationUpdateCart;
    const { isPending: isCheckoutPending, isSuccess: isCheckoutSuccess } = mutationCheckout;

    useEffect(() => {
        if (isSuccess && data?.status !== "ERR") {
            message.success();
            dispatch(updateCart(data.cart));
        } else if (data?.status === "ERR") {
            message.err(data.message);
        }
    }, [isSuccess, data, dispatch]);

    useEffect(() => {
        if (isCheckoutSuccess) {
            message.success("Thanh toán thành công!");
            navigate("/");
        }
    }, [isCheckoutSuccess, navigate]);

    const handleRemoveItem = (itemId) => {
        const updatedItems = cart.items.filter(item => item.id !== itemId);
        dispatch(removeItem(itemId));
        mutationUpdateCart.mutate({ items: updatedItems });
    };

    const handleCheckout = () => {
        mutationCheckout.mutate({ items: cart.items });
    };

    return (
        <div style={{
            display: "flex",
            alignItems: 'center',
            justifyContent: "center",
            background: "rgba(0,0,0, 0.53)",
            height: "100vh"
        }}>
            <div style={{
                width: "800px", borderRadius: "6px", backgroundColor: "#fff", display: "flex", flexDirection: "column"
            }}>
                <WrapperContainerLeft>
                    <h1>Giỏ hàng của bạn</h1>
                    <div style={{ overflowY: 'auto', maxHeight: '300px' }}>
                        {cart?.items?.map(item => (
                            <CartItem key={item.id} item={item} onRemove={handleRemoveItem} />
                        )) || <p>Giỏ hàng trống</p>}
                    </div>
                    {cart.items.length === 0 && <p>Giỏ hàng trống</p>}
                    <Loading isPending={isPending || isCheckoutPending}>
                        <ButtonComponent
                            size={40}
                            disabled={cart.items.length === 0}
                            onClick={handleCheckout}
                            styleButton={{
                                background: "rgb(255, 47, 60)",
                                height: "48px",
                                width: "100%",
                                border: "none",
                                borderRadius: "4px",
                                margin: "26px 0 10px"
                            }}
                            textButton={"Thanh toán"}
                            styleTextButton={{ color: "#fff", fontSize: "15px", fontWeight: "700" }}
                        />
                    </Loading>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <Image src={logo} preview={false} alt="image-logo" height='203px' width='203px' />
                    <h4>Mua sắm tại Phone Store</h4>
                </WrapperContainerRight>
            </div>
        </div>
    );
}

export default CartPage;
