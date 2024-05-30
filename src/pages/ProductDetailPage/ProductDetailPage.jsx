import ProductDetailsComponent from "../../components/ProductDetailsComponent/ProductDetailsComponent";

function ProductDetailPage() {
    // const {id} = useParams();

    return (
        <div style={{padding: "0 120px", background: "#efefef", height: "1000px"}}>
            <h4>Trang chủ</h4>
            <ProductDetailsComponent id/>
        </div>
    );
}

export default ProductDetailPage;