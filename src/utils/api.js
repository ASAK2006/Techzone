import axios from "axios";

const params = {
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_STRIPE_APP_KEY}`,
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(
            process.env.REACT_APP_DEV_URL + url,
            params
        );
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};



const getAuthorizationHeader = () => {
    const apiKey = "e0c25f7fcfdaf02a505ddc26123cb3fd5fca07733cd836dcbd4a858e3c3f265c7694905cb339f0c599750bc75a1b3e0c6ff6dabbe9ab7f6ee465021040d41cd191f0f45785fdba3b793500cc705586eb3e60f38a8ed1300d5ffafcfb3d02dff78c7ec097ae9741d8583e46321d5f480e24b7cb08fda3da8bba18a59797b4b3bc";
    if (!apiKey) {
      console.error("Stripe API key not set in environment variables");
    }
    return {
      Authorization: `Bearer ${apiKey}`,
    };
  };
  
  export const makePaymentRequest = axios.create({
    baseURL: "http://localhost:1337",  
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_STRIPE_APP_KEY}`,
    }
  });