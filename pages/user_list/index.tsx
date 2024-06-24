import { UserObj } from "@/types/todo";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const getUser = async () => {
  const res = await fetch("https://reqres.in/api/users?page=1");
  const data = await res.json();
  return data;
};

const User: React.FC = () => {
  const [users, setUsers] = useState<UserObj[]>([]);

  useEffect(() => {
    handleTheFetch();
  }, []);

  const handleTheFetch = async () => {
    const data = await getUser();
    setUsers(data.data);
  };

  return (
    <div className="h-screen flex justify-center items-center gap-7">
      {users.map((user) => {
        return (
          <div
            key={user.id}
            className="flex flex-col gap-2 justify-center items-center"
          >
            <Image height={200} width={200} alt="avatar" src={user.avatar} />
            <p className="text-xl font-semibold">{user.first_name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default User;
