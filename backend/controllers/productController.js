import userModel from "../models/userModel.js";
import productModel from "../models/productModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import validator from "validator";
import bakerModel from "../models/bakerModel.js";
import cookie from "cookie"


const addItem=async(req,res)=>{
    try {
      let image_filename = `${req.file.filename}`
        let bakerData = await bakerModel.findById(req.body.userId);
        let bakerId= await bakerData._id;

        const item = new productModel({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            bakerid: bakerId,
            image: image_filename
        })

        
        const savedItem = await item.save();
        bakerData.products.push(savedItem._id);
        await bakerData.save();
        res.status(200).json({ message: "Item added successfully" });
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Something went Wrong!!!"})
    }
}

    const listItem = async (req, res) => {
    try {
        let bakerData = await bakerModel.findById(req.body.userId);
        // let bakerId= await bakerData._id;
        if (!bakerData) {
            return res.json({ success: false, message: "Baker not found" });
        }

        const items = await productModel.find({ bakerid: bakerData._id });
        if (items.length > 0) {
            res.json({ success: true, data: items });
        } else {
            res.json({ success: false, message: "Baker has no items" });
        }
    } catch (error) {
        console.error(error.message);
        res.json({ success: false, message: "Error retrieving items" });
    }
    }

  const deleteItem = async (req, res) => {
    try {
      const { productId} = req.body;
  
      let bakerData = await bakerModel.findById(req.body.userId);
      
      if (!bakerData) {
        return res.json({ success: false, message: "Baker not found" });
      }

      
      const item = await productModel.findById(productId);
      if (!item) {
        return res.json({ success: false, message: "Item not found" });
      }
      if (item.bakerid.toString() === bakerData._id.toString()) {
        fs.unlink(`uploads/${food.image}`, () => { })
        await productModel.findByIdAndDelete(productId);

        bakerData.products = bakerData.products.filter(id => id.toString() !== productId);
        await bakerData.save();

        return res.json({ success: true, message: "Item deleted successfully" });
      } else {
        return res.json({ success: false, message: "Baker is not verified for this item" });
      }
    } catch (error) {
      console.error(error.message);
      res.json({ success: false, message: "Error retrieving items" });
    }
  }

export {addItem,listItem,deleteItem};
