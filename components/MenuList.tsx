import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMenu } from "@/redux/slices/menuSlice";
import type { RootState, AppDispatch } from "@/redux/store";

type MenuItem = {
  id: string | number;
  name: string;
  // add other fields as needed
};

const MenuList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status, error } = useSelector(
    (state: RootState) => state.menu
  );

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <ul>
      {(items as MenuItem[]).map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default MenuList;
