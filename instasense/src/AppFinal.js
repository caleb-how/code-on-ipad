import React, { useState } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return <NewRoot1 />;
}

export default App;

const images = [
  {
    tile: "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/e46c2fbb-562d-4239-b266-069601f65406.png?alt=media&token=ea64e491-3298-4a75-983b-ec2a859ab545",
    image:
      "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/09eaa5c5-9fc6-40f5-8ca8-1ce0a04e9679.png?alt=media&token=501caa95-e5f2-4974-a625-49e0305f1548",
  },
  {
    tile: "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/e46c2fbb-562d-4239-b266-069601f65406.png?alt=media&token=ea64e491-3298-4a75-983b-ec2a859ab545",
    image:
      "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/09eaa5c5-9fc6-40f5-8ca8-1ce0a04e9679.png?alt=media&token=501caa95-e5f2-4974-a625-49e0305f1548",
  },
];

export const NewRoot1 = () => {
  const [qty, setQty] = useState(0);

  const product = {
    title: "",
    description: "",
    price: 300,
    salePrice: 250,
    productImages: images,
  };

  const addToCart = () => {};

  const buyNow = () => {};

  const login = () => {};

  return (
    <NewRootRoot>
      <Frame12>
        <Frame11>
          <Image1
            src={
              "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/461abffc-f138-45da-9942-2de0ef45918b.png?alt=media&token=8806fa69-a309-4bb4-b572-9097b22e29e9"
            }
          />
          <Group1>
            <Frame1>
              <Home>Home</Home>
              <Home>Products</Home>
              <Home>About</Home>
              <Home>Contact</Home>
            </Frame1>
            <Frame2>
              <Image2
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/c94df469-335c-4449-bc08-023d245ed9bd.png?alt=media&token=e297d008-4ce7-4469-b7a3-a4abf9bc0b39"
                }
              />
              <Image2
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/c36a7318-ff1d-458d-b354-79f642e8253e.png?alt=media&token=afe460e8-9f81-42a6-a4e5-687adf58b2af"
                }
              />
              <Image4
                src={
                  "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/a2aaa604-aed8-4fb9-a503-8255591e3f22.png?alt=media&token=0be21cdf-17ef-4b4d-ba01-4f8d85c45197"
                }
              />
            </Frame2>
          </Group1>
        </Frame11>
        <Group>
          <Component52 images={product.productImages} />
          <Component42
            qty={qty}
            setQty={setQty}
            price={product.price}
            salePrice={product.salePrice}
            buyNow={buyNow}
            addToCart={addToCart}
          />
        </Group>
        <Frame3>
          <LogIn onClick={login}>Log In</LogIn>
          <CheckoutAsAGuestOrRegister>
            Checkout as a Guest or Register
          </CheckoutAsAGuestOrRegister>
          <RegisterAccount>Register Account</RegisterAccount>
          <RegisterAccount>Guest Checkout</RegisterAccount>
          <AlreadyHaveAnAccount>Already Have an Account?</AlreadyHaveAnAccount>
          <Typeprimary3 onClick={buyNow} type={"primary"} />
        </Frame3>
      </Frame12>
    </NewRootRoot>
  );
};
const Component51 = ({ className, images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <Component5 className={className}>
      <Group4>
        {images.map((image, i) => (
          <Image6 src={image.tile} onClick={() => setSelectedImage(i)} />
        ))}
      </Group4>
      <Image5 src={images[selectedImage].image} />
    </Component5>
  );
};
const Typeprimary3 = ({ type, className }) => {
  return (
    <Typeprimary className={className}>
      <BuyNow>Buy Now</BuyNow>
    </Typeprimary>
  );
};
const Component41 = ({
  className,
  price,
  salePrice,
  qty,
  setQty,
  buyNow,
  addToCart,
}) => {
  return (
    <Component4 className={className}>
      <RoseIncense150Gms>Rose Incense - 150 Gms</RoseIncense150Gms>
      <Group5>
        {salePrice && <Rs250>Rs: ${salePrice}</Rs250>}
        <_300 hasSalePrice={!!salePrice}>${price}</_300>
        {salePrice && <Save50>Save ${price - salePrice}</Save50>}
      </Group5>
      <EachPackContains80IncenseSticks10Inches>
        Each pack contains 80 incense sticks, 10 inches.
      </EachPackContains80IncenseSticks10Inches>
      <Group2>
        <Group6>
          <AddQuantity>Add Quantity</AddQuantity>
          <Image8
            onClick={() => setQty(qty + 1)}
            src={
              "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/7a89b18c-1d5e-4094-9d22-89c87d462680.png?alt=media&token=d7459bf4-54d3-4b9a-a4bd-26d61871ec3b"
            }
          />
        </Group6>
        <_1ItemSelected>{qty} Item Selected.</_1ItemSelected>
      </Group2>
      <Component2 onClick={addToCart} type={"secondary"} />
      <Component1 onClick={buyNow} type={"primary"} />
    </Component4>
  );
};
const Typesecondary2 = ({ type, className }) => {
  return (
    <Typesecondary className={className}>
      <AddToCart1>Add To Cart</AddToCart1>
    </Typesecondary>
  );
};
const Component5 = styled.div`
  width: 645px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Group4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 23px;
  padding-top: 40px;
  padding-bottom: 40px;
`;
const Image5 = styled.img`
  width: 502px;
  height: 600px;
`;
const Typeprimary = styled.div`
  background-color: #126656;
  width: 370px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 100px;
  cursor: pointer;
`;
const BuyNow = styled.div`
  color: #efefef;
  font-size: 25px;
  font-family: Poppins;
  font-weight: 400;
  letter-spacing: 3.75px;
`;
const Component4 = styled.div`
  height: 524px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const RoseIncense150Gms = styled.div`
  color: #126656;
  font-size: 40px;
  font-family: Poppins;
  font-weight: 400;
  margin-bottom: 12px;
  align-self: center;
`;
const Group5 = styled.div`
  align-self: stretch;
  margin-bottom: 31px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 26px;
`;
const Rs250 = styled.div`
  color: #126656;
  font-size: 25px;
  font-family: Poppins;
  font-weight: 400;
`;
const _300 = styled.div`
  color: #126656;
  font-size: 25px;
  font-family: Poppins;
  ${({ hasSalePrice }) =>
    hasSalePrice ? "text-decoration: line-through;" : ""}
  font-weight: 400;
`;
const Save50 = styled.div`
  color: #b87843;
  font-size: 25px;
  font-family: Poppins;
  font-weight: 400;
`;
const EachPackContains80IncenseSticks10Inches = styled.div`
  color: #126656;
  font-size: 20px;
  font-family: Poppins;
  font-weight: 400;
  margin-bottom: 50px;
  align-self: stretch;
`;
const Group2 = styled.div`
  width: 304px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
const Group6 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const AddQuantity = styled.div`
  color: #126656;
  font-size: 20px;
  font-family: Poppins;
  font-weight: 400;
  align-self: stretch;
`;
const Image8 = styled.img`
  width: 130px;
  height: 54px;
`;
const _1ItemSelected = styled.div`
  color: #b87843;
  font-size: 20px;
  font-family: Poppins;
  font-weight: 400;
  margin-bottom: 11px;
`;
const Component2 = styled(Typesecondary2)`
  margin-left: 22px;
  margin-bottom: 25px;
`;
const Component1 = styled(Typeprimary3)`
  margin-left: 22px;
`;
const Typesecondary = styled.div`
  background-color: #fdf5e6;
  border-width: 1px;
  border-color: #126656;
  border-style: solid;
  width: 370px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 100px;
  cursor: pointer;
`;
const AddToCart1 = styled.div`
  color: #126656;
  font-size: 25px;
  font-family: Poppins;
  font-weight: 400;
  letter-spacing: 3.75px;
`;
const Home = styled.div`
  color: #126656;
  font-size: 26px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: 2.6px;
`;
const Image2 = styled.img`
  width: 26px;
  height: 26px;
`;
const RegisterAccount = styled.div`
  color: #126656;
  font-size: 35px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: 1.75px;
`;
const Image6 = styled.img`
  width: 114px;
  height: 85px;
`;
const NewRootRoot = styled.div`
  height: 1443px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  min-width: 1510px;
`;
const Frame12 = styled.div`
  background-color: #fdf5e6;
  height: 1443px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Frame11 = styled.div`
  width: 1423px;
  margin-bottom: 61px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 43.5px;
  padding-right: 43.5px;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
`;
const Image1 = styled.img`
  width: 271px;
  height: 120px;
  align-self: stretch;
`;
const Group1 = styled.div`
  width: 651px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Frame1 = styled.div`
  width: 492px;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Frame2 = styled.div`
  width: 104px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Image4 = styled.img`
  width: 26px;
  height: 28px;
  align-self: stretch;
`;
const Group = styled.div`
  margin-bottom: 96px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 119px;
  padding-left: 84px;
  padding-right: 84px;
  align-items: flex-start;
`;
const Component52 = styled(Component51)`
  align-self: stretch;
`;
const Component42 = styled(Component41)`
  margin-top: 14px;
`;
const Frame3 = styled.div`
  height: 471px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const LogIn = styled.div`
  color: #b87843;
  font-size: 30px;
  font-family: Poppins;
  font-weight: 400;
  cursor: pointer;
`;
const CheckoutAsAGuestOrRegister = styled.div`
  color: #126656;
  font-size: 60px;
  font-family: Poppins;
  font-weight: 400;
  align-self: stretch;
`;
const AlreadyHaveAnAccount = styled.div`
  color: #126656;
  font-size: 20px;
  font-family: Poppins;
  font-weight: 500;
`;
