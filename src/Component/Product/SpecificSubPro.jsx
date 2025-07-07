import HOC from '../HOC';
import { useParams } from 'react-router-dom';
import products from '../../Product';

function SpecificSubPro() {
    const { id, subid } = useParams();

    const product = products.find(p => p.id === id);
    const subproduct = product.subproducts.find(item => item.id === subid)

    if (!subproduct) return <p>No subproducts found.</p>;


    return (

        <div >
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-6 p-5'>
                        <h4>{subproduct.subName}</h4>
                        <h1>{subproduct.ProductName}</h1>
                        <div className=''>{subproduct.description}</div>
                    </div>
                    <div className='col-6'>
                        <div className='specificbg text-center'>
                            <img src={subproduct.proimg} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HOC(SpecificSubPro)