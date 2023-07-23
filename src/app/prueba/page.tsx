"use client";
import React from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { increment, decrement } from "../../redux/features/counterSlice";
import { useGetUsersQuery } from "../../redux/services/userApi";
import Spinner from "../Components/spinner";

function HomePage() {
  const count = useAppSelector((state) => state.counterReducer.counter);
  const dispatch = useAppDispatch();
  const { data, error, isLoading, isFetching } = useGetUsersQuery(null);

  if (isLoading || isFetching) return <Spinner />;
  if (error) {
    console.error("Error fetching users:", error);
    return <p>Error fetching users</p>;
  }

  return (
    <div>
      <h1 className="text-center text-2xl">Total: {count}</h1>
      <div className="flex justify-center bg-red-100 gap-x-2">
        <button
          className="bg-green-500 px-3 py-2 rounded-md"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <br />
        <button
          className="bg-blue-500 px-3 py-2 rounded-md"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div className="grid grid-cols-3 mx-auto gap-3">
        {" "}
        aca va la data {data?.allUsers[0].id}
      </div>
      {data?.allUsers.map((user) => (
        <div key={user.id} className="bg-yellow-400 p-4">
          <p>ID = {user.id}</p>
          <p>ADDRESS = {user.address}</p>
          <p>LASTNAME = {user.lastname}</p>
          <p>NAME = {user.name}</p>
          <p>STATUS = {user.status}</p>
          <p>EMAIL = {user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
