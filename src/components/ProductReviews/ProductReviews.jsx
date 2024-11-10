import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../services/api";
import { nanoid } from "nanoid";

const ProductReviews = () => {
  const { productId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    if (!productId) return;

    const getProductReviews = async () => {
      try {
        const data = await fetchProductById(productId);
        setReviews(data.reviews);
      } catch (error) {
        console.log(error);
      }
    };
    getProductReviews();
  }, [productId]);

  if (!reviews) return <h2>Loader...</h2>;

  return (
    <div>
      <ul className="flex flex-col gap-2">
        {reviews.map((review) => (
          <li key={nanoid()} className="flex gap-4">
            <p className="">{review.reviewerName}</p> -
            <p className="">&quot;{review.comment}&quot;</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductReviews;
