import React from 'react';
import { Container, NavLink, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrashCan } from "react-icons/fa6";
import { MdRemoveShoppingCart } from "react-icons/md";
import './addedtocart.css'
import { Link } from 'react-router-dom';
import { clearall, deleteFromCart } from '../../redux for saving/createReducer';

export default function Addedtocart() {

    const dispatch = useDispatch();

    const carted = useSelector((state) => state.cart.carts);

    const clearcart = () => {
        dispatch(clearall())
    }

    const removeitems = (elem) => {
        dispatch(deleteFromCart(elem))
    }



    return (
        <Container fluid="md">
            <Row className='added-items justify-content-center'>
                <div className="cart">
                    <div className="cart-header d-flex justify-content-between p-2">
                        <div className="cart-heading">
                            <h4>Saved Items ({carted.length})</h4>
                        </div>
                        <button className="empty-cart d-flex align-items-center justify-content-center px-2" onClick={clearcart}>
                            <FaTrashCan className='me-2' size={20} />
                            <span className="empty-title">
                                Emtpy Cart</span>
                        </button>
                    </div>
                    <div className="cart-body">
                        {carted.length == 0 ? <table className='table cartis-empty mt-4'>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="cart-empty">
                                            <MdRemoveShoppingCart size={60} color='grey' />
                                            <p className='nodata'>Your Cart Is Empty</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table> :
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Images</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>View Hotel</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carted.map((elem, index) => {
                                        const ids = elem.regionId
                                        const listing = `/hotelList/${elem.name}/` + `${ids}`
                                        return (

                                            <tr key={index}>
                                                <td>
                                                    <button className='hotel-delete' onClick={() => removeitems(elem)}> <FaTrashCan className='me-0 remove-item' size={20} color='#003b95' /></button>
                                                </td>
                                                <td>
                                                    <div className="hotel-img">
                                                        <img src={elem.propertyImage.image.url} alt="product" />
                                                    </div>
                                                </td>
                                                <td className=''>
                                                    <div className="hotel-name my-auto">
                                                        <p className='m-0'>{elem.name}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="hotel-price">
                                                        <p className='m-0'>{elem.mapMarker.label}</p>
                                                    </div>
                                                </td>
                                                <td >
                                                    <button className='view'>
                                                        <Link to={listing} as={NavLink}>view
                                                        </Link></button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>}
                    </div>
                </div>
            </Row>
        </Container>
    )
}
