import React, { useState } from 'react';
import Checkout from './templates/Checkout';

const Ordering = () => {
  const [isOrdering, setIsOrdering] = useState(true);
  const onTogleOrderingBouth = (e) => {
    setIsOrdering(e);
  };
  return isOrdering ? (
    <Checkout onTogleOrderingBouth={onTogleOrderingBouth} />
  ) : null;
};

export default Ordering;
