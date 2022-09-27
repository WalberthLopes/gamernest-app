import axios from "axios";
import { supabase } from "../../database/supabase";

const createNewItem = async (elements: any) => {
  const { data, error } = await supabase.storage
    .from("cubecave")
    .upload(`vip_icons/${elements.file.name}`, elements.file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    console.log("error: " + error.message);
  } else {
    const productUrl =
      "https://duzeehpjigkkkbkxsjvb.supabase.co/storage/v1/object/public/cubecave/" +
      data.path;

    const response = await axios.post(
      import.meta.env.VITE_API_URL + "/api/create-new-item",
      { elements, productUrl }
    );

    return response.data;
  }
};

export { createNewItem };
