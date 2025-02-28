import axios from 'axios';

// Cria uma instância do Axios
const api = axios.create({
  baseURL: 'http://localhost:8000', // URL base da sua API
});

// Interceptor para adicionar o token em todas as requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para tratar erros globally (opcional)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Se o erro for de /pedidos e for 401, apenas loga o erro sem redirecionar
    if (error.config.url === '/pedidos' && error.response?.status === 401) {
      console.error("Falha ao buscar pedidos, mas continuando na página");
      return Promise.reject(error);
    }
    if (error.response?.status === 401) {
      // Token inválido ou expirado, redireciona para login
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;