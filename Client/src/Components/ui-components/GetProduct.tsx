import React from 'react'
import { IGetProduct, IProducts } from '../../utils/interfaces';
import { CreateProduct } from './CreateProduct';

export default function GetProduct(props: IGetProduct) {
    const {state, searchVal, onDelete} = props
        return (
          <div className="get-products">
            {state?.filter(
              (p: IProducts) => p.title.toLowerCase().includes(searchVal)
              ).map((p: IProducts) => {
                const { image, title, category, price, id, rating, amount=1} = p; 
                return (
                  <CreateProduct
                    amount={amount}
                    image={image}
                    title={title}
                    price={price}
                    category={category}
                    id={id}
                    key={id}
                    favorite={false}
                    rating={rating}
                    state={state}
                    onDelete={onDelete}
                  />
                );
              })}
          </div>
        );
}
