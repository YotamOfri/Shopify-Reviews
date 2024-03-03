// src/utils/cookies.js

// Function to get a cookie value by name
export function getCookie(name) {
  const cookieName = `${name}=`;
  const cookieArray = document.cookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].trim();
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return null; // Cookie not found
}

// Function to set a cookie
export function setCookie(name, value, options) {
  options = options || {};
  let cookie = `${name}=${value}`;
  if (options.expires) {
    const expirationDate = new Date(options.expires);
    cookie += `; expires=${expirationDate.toUTCString()}`;
  }
  if (options.path) cookie += `; path=${options.path}`;
  if (options.domain) cookie += `; domain=${options.domain}`;
  if (options.secure) cookie += "; Secure";
  document.cookie = cookie;
}

// Function to delete a cookie by name
export function deleteCookie(name) {
  setCookie(name, "", { expires: new Date(0) });
}
