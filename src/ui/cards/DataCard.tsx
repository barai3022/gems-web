import { DataObject } from '@/types';
import React from 'react'

const DataCard = ({
    data
}:{ 
    data:DataObject 
}) => {
  const { title, val, main_class, ttl_class, val_class } = data;
  return (
    <div className={main_class}>
      <div className={ttl_class}>{title}</div>
      <div className={val_class}>{val}</div>
    </div>
  );
}

export default DataCard
