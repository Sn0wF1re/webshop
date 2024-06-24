import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';


export const useProductStore = defineStore('productStore', () => {
    const products = ref([]);
    const product = ref({});

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:1337/api/products?populate[image][fields][0]=formats&pagination[pageSize]=10&pagination[page]=1&publicationState=live&locale[0]=en', {
                headers: {
                    'Authorization': 'Bearer 6ce5448e2f741e9e1d201222f8e69929efdf2c5909698cc2d08edc8b226185f9ab347d26ca1c5d2bbc566e09de4640e49c68cfdde1dd2b5d402102ca2bd6e420797b371d84e43e8e0d295314cd72d2900832247319383f56238a1ec635ea0b81751b49d6b046a0e29d906572426dab88dbc0a0e7d3408a4ecd7d991d546ae11e'
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
            const response = await axios.get(`http://localhost:1337/api/products/${id}?populate[image][fields][0]=formats&pagination[pageSize]=10&pagination[page]=1&publicationState=live&locale[0]=en`, {
                headers: {
                    'Authorization': 'Bearer 6ce5448e2f741e9e1d201222f8e69929efdf2c5909698cc2d08edc8b226185f9ab347d26ca1c5d2bbc566e09de4640e49c68cfdde1dd2b5d402102ca2bd6e420797b371d84e43e8e0d295314cd72d2900832247319383f56238a1ec635ea0b81751b49d6b046a0e29d906572426dab88dbc0a0e7d3408a4ecd7d991d546ae11e'
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