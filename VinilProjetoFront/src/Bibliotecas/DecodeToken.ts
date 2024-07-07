import { jwtDecode } from "jwt-decode";


interface DecodedToken {
  role: string[];
  // outras propriedades do token, se houver
}

export function decodeToken(token: string): string[] {
  try {
    const decoded = jwtDecode<DecodedToken>(token);
    return decoded.role;
  } catch (error) {
    console.error('Failed to decode token', error);
    return [];
  }
}