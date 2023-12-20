import axios from 'axios';

export async function getProducts() {
  return await axios.get('https://apireact.wabit.cl/api/benjagdg/products');
}

export async function getProductsById(id) {
  return await axios.get(`https://apireact.wabit.cl/api/benjagdg/products/${id}`);
}

export async function getProductsByCategory(id_category) {
  return await axios.get(`https://apireact.wabit.cl/api/benjagdg/products/category/${id_category}`);
}

export async function getCategories() {
  return await axios.get('https://apireact.wabit.cl/api/benjagdg/categories');
}