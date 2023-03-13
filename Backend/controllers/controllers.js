import { Coctel } from "../models/coctels.js";

export const getDrinks = async(req, res) => {
    try {
        const drinks = await Coctel.find({uid: req.uid}).lean()
        return res.status(201).json({ drinks })
    } catch (e) {
        console.log(e);
        return res.status(500).json({ error: "Error de servidor" });
    }
}

export const createDrink = async(req, res) => {
    try {
        let { drink } = req.body
        const coctel = new Coctel({ drink, uid:req.uid })
        const newCoctel = await coctel.save()
        res.status(201).json({ status: 201, newCoctel })
    } catch (e) {
        console.log(e);
        return res.status(500).json({ error: "Error de servidor" });
    }
}

export const deleteDrink = async(req, res) => {
    try {
        const { id } = req.params
        const coctel = await Coctel.findById(id)
        if (!coctel) return res.status(404).json({ status: 404, error: "no existe el coctel" })
        await coctel.deleteOne()
        return res.json({ coctel })
    } catch (e) {
        console.log(e);
        if (e.kind === "ObjectId")
            return res.status(403).json({ error: "Formato id incorrecto" });
        return res.status(500).json({ error: "Error de servidor" });
    }
}