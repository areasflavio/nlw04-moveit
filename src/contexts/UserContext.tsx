import { createContext, ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import axios from 'axios';

interface UserContextData {
  name: string;
  avatar: string;
  setUsername: (username: string) => void;
}

interface UserProviderProps {
  children: ReactNode;
  name: string;
  avatar: string;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children, ...rest }: UserProviderProps) {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [name, setName] = useState(rest.name ?? null);
  const [avatar, setAvatar] = useState(rest.avatar ?? null);

  async function getUser() {
    try {
      const response =
        username &&
        (await axios.get(`https://api.github.com/users/${username}`));

      setName(response.data.name);
      setAvatar(`https://github.com/${username}.png`);
    } catch (error) {
      //
    }
  }

  useEffect(() => {
    if (name) {
      Cookies.set('name', name);
      Cookies.set('avatar', avatar);

      router.push('/home');
    } else {
      getUser();
    }
  }, [username, name, avatar]);

  return (
    <UserContext.Provider
      value={{
        name,
        avatar,
        setUsername,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
