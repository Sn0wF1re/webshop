import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

const strapiKey = import.meta.env.VITE_STRAPI_KEY;
const baseURL = 'https://pm-webshop-strapi-aad213b0148f.herokuapp.com';

export const useProductStore = defineStore('productStore', () => {
    const products = ref([]);
    const product = ref({});

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${baseURL}/api/products?populate[cover_photo][fields][0]=formats&populate[category][fields][0]=name&populate[product_variations][populate]=size&populate[product_variations][populate]=color&pagination[pageSize]=10&pagination[page]=1&publicationState=live&locale[0]=en`, {
                headers: {
                    // 'Authorization': 'Bearer 1e6521e8f6300e448d0961e515aa83d8333be1f5625e09b6cd950b13543e5b68f85c650b2687d1a3b3e4558286649c4ccee841884d45409cb1f0fdb2ea4e112cf61d03f2d47bed21544a5444784ad094ff459f37ba65f19aa8b615d73b93585fb05638fa640bedb7b54dca00053ea4b7762dc43b0c2616577f4d02e0cdccfad0'
                    'Authorization': `Bearer ${strapiKey}`
                }
            });

            products.value = response.data.data;
            console.log(products.value);
        } catch (error) {
            console.log(`Failed to load products: ${error}`);
        }
    }

    const fetchProduct = async (id) => {
        try {
            const response = await axios.get(`${baseURL}/api/products/${id}?populate[cover_photo][fields][0]=formats&populate[category][fields][0]=name&populate[product_variations][populate]=size&populate[product_variations][populate]=color&pagination[pageSize]=10&pagination[page]=1&publicationState=live&locale[0]=en`, {
                headers: {
                    // 'Authorization': 'Bearer 1e6521e8f6300e448d0961e515aa83d8333be1f5625e09b6cd950b13543e5b68f85c650b2687d1a3b3e4558286649c4ccee841884d45409cb1f0fdb2ea4e112cf61d03f2d47bed21544a5444784ad094ff459f37ba65f19aa8b615d73b93585fb05638fa640bedb7b54dca00053ea4b7762dc43b0c2616577f4d02e0cdccfad0'
                    'Authorization': `Bearer ${strapiKey}`
                }
            });

            product.value = response.data.data;
            console.log(product.value);

        } catch (error) {
            console.log(`Failed to load product: ${error}`);
        }
    }

    return {
        product,
        products,
        fetchProducts,
        fetchProduct
    };
});