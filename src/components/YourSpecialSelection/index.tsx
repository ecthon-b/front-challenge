import { useEffect, useState } from 'react';
import { api } from '../../pages/api/api';
import styles from './styles.module.scss';

interface Products {
    id: number;
    name: string;
    image: string;
    oldPrice: number;
    price: number;
    description: string;
    installments: {
        count: number;
        value: string;
    };
}

export function YourSpecialSelection() {
    const [productData, setProductData] = useState<Products[]>([]);

    useEffect(() => {
        loadProducts();
    }, []);

    async function loadProducts() {
        const { data } = await api.get('products?page=1')
        setProductData(data.products)
    }

    return (
        <>
            <div className={styles.divContenteTitle}>
                <div className={styles.lineDiv} />
                <span>Sua seleção especial</span>
                <div className={styles.lineDiv} />
            </div>
            <div className={styles.productsContainer}>


                {
                    productData.map(product => (
                        <div key={product.id} className={styles.productContent}>
                            <img className={styles.productImg} src={product.image} alt="" />
                            <p className={styles.productName}>{product.name}</p>
                            <p className={styles.productDescription}>{product.description}</p>
                            <p className={styles.priceProduct}>De: {product.oldPrice}</p>
                            <strong className={styles.pricePromotional}>Por: {product.price} </strong>
                            <p className={styles.pricePartials}>ou {product.installments.count}x de R${product.installments.value}</p>
                            <a className={styles.buttonBuy} href="">Comprar</a>
                        </div>
                    ))}


            </div>

            <div className={styles.morePruductsButton}>
                <a className={styles.productMore} href="">Ainda mais produtos aqui!</a>

            </div>
        </>
    )
}