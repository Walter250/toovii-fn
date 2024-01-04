import url from "../../url";

export async function login(userInfo) {
  const formData = new URLSearchParams();
  for (const [key, value] of Object.entries(userInfo)) {
    formData.append(key, value);
  }
  try {
    const response = await fetch(`${url}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });
    const user = await response.json();
    return user;
  } catch (error) {
    return null;
  }
}

export function logout() {}

export function createMessages() {}

export function signup() {}

export function updateUser() {}
