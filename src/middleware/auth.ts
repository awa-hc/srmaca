export function userIsAdmin(): boolean{
    // Obtener el token de la cookie "Auth"
    const cookies = document.cookie.split(';');
    const authCookie = cookies.find(cookie => cookie.startsWith('Auth='));

    if (!authCookie) {
        return false;
    }

    // Decodificar el token
    const token = authCookie.split('=')[1];
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/-/g, '/');
    const payload = JSON.parse(window.atob(base64));
    // Verifica el rol del usuario
    return payload.role === 'admin';
}