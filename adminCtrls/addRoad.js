const { HttpError } = require("../helpers");
const { validate } = require("../middlewares");
const Product = require("../models/product");
const { addRodJoiSchema, Rod } = require("../models/rod");
const { uploadImagesToS3 } = require("../uploadImages");


const addRod = async (req, res) => {
    
    const { models} = req.body;
    const { images, modelImages } = req.files;
    const purpose = "test";
    const brand = "client-images";
    
    console.log(req.files);
    // Файлы должны быть предварительно обработаны на фронтенде
    const imageUploadResults = await uploadImagesToS3(images, purpose, brand.toLowerCase());
   

    const imageUrls = imageUploadResults.map(file => file.url); // Извлечение URL из результатов

    
    const modelsUploadResults = await uploadImagesToS3(modelImages, purpose, brand.toLowerCase());
    const modelsUrls = modelsUploadResults.map(file => file.url);

    console.log(models)
    if (models) {
        req.body.models = models.map((product, index) => ({
          ...product,
          img: modelsUrls[index],
        }));
      }

    const newProduct = new Product({
        name: req.body.name,
        brand,
        purpose,
      description: req.body.description,
        images: imageUrls,
      models: req.body.models,
    });

    await newProduct.save();
    
//     const { render, purpose, price, stock, sale, salePriceMain, code, typerods, name, brand, series, model, item, action, design, section, description, alt } = req.body;
// \

    // if (!files) throw HttpError(400, "Product photo/photoes is/are required");

    // const imageUploadResults = await uploadImagesToS3(files);
    // const imageUrls = imageUploadResults.map(file => file.url);

    // if (description) {
    //     req.body.description = JSON.parse(description).map((item, index) => ({
    //         ...item
    //     }));
    // }

    // const { error } = validate(req.body, addRodJoiSchema);
    // if (error) {
    //     throw HttpError(400, error.details[0].message);
    // }

    // const newRod = await Rod.create({
    //     render,
    //     purpose,
    //     price,
    //     stock,
    //     sale,
    //     salePriceMain,
    //     code,
    //     typerods,
    //     name,
    //     brand,
    //     series,
    //     model,
    //     item,
    //     action,
    //     design,
    //     section,
    //     description: req.body.description,
    //     img: imageUrls,
    //     alt,
    // });
  
    res.status(201).json({
      message: "Rod added",
      newProduct,
    });
};
  
module.exports = {
    addRod,
}