export const getCart = async () => {
  return (await fetch(`${process.env.NEXT_PUBLIC_API_NEXT}/api/cart/getcart`)).json();
};
