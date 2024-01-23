import {QueryClient} from '@tanstack/react-query';

export const query = new QueryClient();

export const fetchAuthData = async ({ email, password }) => {  
  const response = await fetch(
    `https://data-56427-default-rtdb.firebaseio.com/authdata.json`
  );
  if (!response.ok) {
    throw new Error("fetching Failed");
  }
  const data = await response.json();
  const newData = [];
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const newObject = data[key];
      newData.push(newObject);
    }
  }
  const check = newData.findIndex(
    (item) => item.id === email && item.pass === password
  );
  console.log('sign:'+check);
  return check;
};

export const fetchAuth = async ({ email, password }) => {
  const response = await fetch(
    `https://data-56427-default-rtdb.firebaseio.com/authdata.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: email,
        pass: password,
      }),
    }
  );
  const data = await response.json();
};
