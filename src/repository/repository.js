const { default: axios } = require("axios");
const url = "http://localhost:8000";
import { getDownloadURL, ref , uploadBytes} from "firebase/storage";

import { storage } from "@/config/firebase_config";

axios.defaults.baseURL = url;

const username = 'admin';
const password = 'admin';

const config = {
    headers: {
    'Content-Type': 'application/json',
      // Ajouter l'en-tête d'authentification avec les informations d'identification
    'Authorization': `Basic ${btoa(`${username}:${password}`)}`
    }
};

export const get_data = async () => {
    return await axios
        .get("/users", config)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
}

export const get_imag_urls = async () => {
    return await axios
        .get("/images", config)
        .then((response) => {

            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
}


const updload_file = async (reference, file) => {
    const storageRef = ref(storage, reference + file.name); // Créer une référence avec le nom du fichier
    await uploadBytes(storageRef, file).then((snapshot) => { // Utiliser directement le fichier comme données à télécharger
        console.log('Uploaded a blob or file!');
    }).catch((error) => {
        console.error('Error uploading file to Firebase Storage:', error);
    });
}

const updload_url = async (reference, file_name, endpoint) => {
    await getDownloadURL(ref(storage, reference + file_name)).then((url) => {
        axios.post(endpoint, {
            url: url
        }, config)
    });
}

export const add_image_url = async (file) => {
    await updload_file('cars/', file);
    await updload_url("cars/", file.name, "/images/");
}
